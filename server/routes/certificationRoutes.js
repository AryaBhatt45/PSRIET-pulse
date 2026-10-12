import { randomUUID } from 'node:crypto';
import express from 'express';
import multer from 'multer';
import nodemailer from 'nodemailer';
import pool from '../config/db.js';
import requireAdmin from '../middleware/requireAdmin.js';
import { createContributionCertificate, createRequestReceipt } from '../utils/certificationPdf.js';

const router = express.Router();
const maxPhotoSize = 5 * 1024 * 1024;
const contributionTypes = new Set([
  'Data Collection',
  'Data Cleaning',
  'Translation',
  'Code Contribution',
  'Documentation',
  'Community Outreach',
  'Other'
]);

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: maxPhotoSize, files: 1 },
  fileFilter: (req, file, callback) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return callback(new Error('Upload a PNG or JPG photo.'));
    }
    return callback(null, true);
  }
});

const createMailer = () => {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
    throw new Error('SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM must be configured to send email.');
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });
};

const isAllowedPhoto = (file) => {
  if (!file) return true;
  const isPng = file.mimetype === 'image/png'
    && file.buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
  const isJpeg = file.mimetype === 'image/jpeg'
    && file.buffer.subarray(0, 3).equals(Buffer.from([255, 216, 255]));
  return isPng || isJpeg;
};

const sendEmail = async (message) => {
  const transporter = createMailer();
  await transporter.sendMail({ from: process.env.SMTP_FROM, ...message });
};

const readClaimForm = (req) => {
  const fullName = typeof req.body.fullName === 'string' ? req.body.fullName.trim() : '';
  const email = typeof req.body.email === 'string' ? req.body.email.trim().toLowerCase() : '';
  const offUsername = typeof req.body.offUsername === 'string' ? req.body.offUsername.trim() : '';
  const githubUsername = typeof req.body.githubUsername === 'string' ? req.body.githubUsername.trim() : '';
  const contributionType = typeof req.body.contributionType === 'string' ? req.body.contributionType : '';

  if (!fullName || fullName.length > 120) throw new Error('Enter a name of up to 120 characters.');
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Enter a valid email address.');
  if (offUsername.length > 80 || githubUsername.length > 80) throw new Error('Usernames must be 80 characters or fewer.');
  if (!contributionTypes.has(contributionType)) throw new Error('Choose a valid contribution type.');
  if (req.body.agreement !== 'on') throw new Error('Accept the Contributor Code of Conduct and Licensing to continue.');

  return { fullName, email, offUsername, githubUsername, contributionType };
};

router.post('/', (req, res, next) => {
  upload.single('photo')(req, res, (error) => {
    if (error) {
      const message = error.code === 'LIMIT_FILE_SIZE'
        ? 'The photo must be 5 MB or smaller.'
        : error.message || 'The photo could not be uploaded.';
      return res.status(400).json({ message });
    }
    return next();
  });
}, async (req, res) => {
  let claim;
  try {
    claim = readClaimForm(req);
    if (!isAllowedPhoto(req.file)) {
      return res.status(400).json({ message: 'The photo contents do not match a valid PNG or JPG image.' });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }

  const id = randomUUID();
  try {
    await pool.query(
      `INSERT INTO certification_claims
        (id, full_name, email, off_username, github_username, contribution_type, agreement_accepted,
         photo_data, photo_mime_type, claim_status, receipt_email_status)
       VALUES ($1, $2, $3, $4, $5, $6, TRUE, $7, $8, 'pending', 'pending')`,
      [
        id,
        claim.fullName,
        claim.email,
        claim.offUsername || null,
        claim.githubUsername || null,
        claim.contributionType,
        req.file?.buffer || null,
        req.file?.mimetype || null
      ]
    );
  } catch (error) {
    console.error('Unable to save certification claim:', error);
    return res.status(500).json({ message: 'Unable to save your request right now. Please try again later.' });
  }

  let receiptEmailSent = false;
  try {
    const receipt = await createRequestReceipt({ ...claim, id });
    await sendEmail({
      to: claim.email,
      subject: 'We received your certification request',
      text: `Hello ${claim.fullName}, your certification claim request BCA-${id} has been received. It will be reviewed before a certificate is issued.`,
      attachments: [{ filename: 'certification-request-receipt.pdf', content: receipt }]
    });
    receiptEmailSent = true;
  } catch (error) {
    console.error(`Unable to email certification request receipt for ${id}:`, error);
  }

  try {
    await pool.query(
      'UPDATE certification_claims SET receipt_email_status = $1 WHERE id = $2',
      [receiptEmailSent ? 'sent' : 'failed', id]
    );
  } catch (error) {
    console.error(`Unable to update receipt email status for ${id}:`, error);
  }

  return res.status(201).json({
    id,
    receiptEmailSent,
    message: 'Your certification request has been saved for review.'
  });
});

router.get('/', requireAdmin, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, full_name AS "fullName", email, off_username AS "offUsername",
              github_username AS "githubUsername", contribution_type AS "contributionType",
              agreement_accepted AS "agreementAccepted", photo_data IS NOT NULL AS "hasPhoto",
              claim_status AS status, receipt_email_status AS "receiptEmailStatus",
              certificate_email_status AS "certificateEmailStatus", created_at AS "createdAt"
       FROM certification_claims
       ORDER BY created_at DESC`
    );
    return res.json(result.rows);
  } catch (error) {
    console.error('Unable to load certification claims:', error);
    return res.status(500).json({ message: 'Unable to load certification claims.' });
  }
});

router.get('/:id/photo', requireAdmin, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT photo_data, photo_mime_type FROM certification_claims WHERE id = $1',
      [req.params.id]
    );
    if (result.rows.length === 0) return res.status(404).json({ message: 'Certification claim not found.' });
    const photo = result.rows[0];
    if (!photo.photo_data) return res.status(404).json({ message: 'No photo was attached to this claim.' });
    res.type(photo.photo_mime_type);
    res.set('Content-Disposition', 'inline');
    return res.send(photo.photo_data);
  } catch (error) {
    console.error(`Unable to load photo for certification claim ${req.params.id}:`, error);
    return res.status(500).json({ message: 'Unable to load the claim photo.' });
  }
});

router.post('/:id/approve', requireAdmin, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, full_name AS "fullName", email, contribution_type AS "contributionType", claim_status AS status
       FROM certification_claims WHERE id = $1`,
      [req.params.id]
    );
    if (result.rows.length === 0) return res.status(404).json({ message: 'Certification claim not found.' });

    const claim = result.rows[0];
    const certificate = await createContributionCertificate(claim);
    await sendEmail({
      to: claim.email,
      subject: 'Your contribution claim has been approved',
      text: `Hello ${claim.fullName}, your ${claim.contributionType} contribution claim has been reviewed and approved. Your PTSRIET Pulse certificate is attached.`,
      attachments: [{ filename: 'contribution-certificate.pdf', content: certificate }]
    });

    const updated = await pool.query(
      `UPDATE certification_claims
       SET claim_status = 'approved', certificate_email_status = 'sent',
           certificate_email_sent_at = NOW()
       WHERE id = $1
       RETURNING id, claim_status AS status, certificate_email_status AS "certificateEmailStatus"`,
      [claim.id]
    );
    return res.json({ ...updated.rows[0], emailSent: true });
  } catch (error) {
    console.error(`Unable to approve or email certification claim ${req.params.id}:`, error);
    try {
      await pool.query(
        `UPDATE certification_claims SET certificate_email_status = 'failed' WHERE id = $1`,
        [req.params.id]
      );
    } catch (updateError) {
      console.error(`Unable to update certificate email status for ${req.params.id}:`, updateError);
    }
    return res.status(502).json({ message: 'The certificate could not be sent. The claim remains available for review and retry.' });
  }
});

export default router;
