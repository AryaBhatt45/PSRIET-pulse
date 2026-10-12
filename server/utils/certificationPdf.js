import PDFDocument from 'pdfkit';

const makePdf = (writeContent) => new Promise((resolve, reject) => {
  const document = new PDFDocument({ size: 'A4', margin: 52 });
  const chunks = [];

  document.on('data', (chunk) => chunks.push(chunk));
  document.on('end', () => resolve(Buffer.concat(chunks)));
  document.on('error', reject);
  writeContent(document);
  document.end();
});

export const createRequestReceipt = (claim) => makePdf((document) => {
  document.fillColor('#f97316').fontSize(13).text('PTSRIET PULSE', { characterSpacing: 1.5 });
  document.moveDown(2);
  document.fillColor('#111827').fontSize(25).text('Certification claim request received');
  document.moveDown(0.6);
  document.fillColor('#4b5563').fontSize(12).text(`Hello ${claim.fullName},`);
  document.moveDown(0.5);
  document.text('We have received your Open Food Facts contribution certification claim. The details below will be reviewed by an administrator before a certificate is issued.');
  document.moveDown(1.5);
  document.fillColor('#111827').fontSize(11).text(`Request reference: BCA-${claim.id}`);
  document.text(`Contribution type: ${claim.contributionType}`);
  document.text(`Email: ${claim.email}`);
  document.moveDown(1.5);
  document.fillColor('#b45309').fontSize(11).text('This document confirms receipt of your request. It is not a certificate or proof of contribution.');
  document.moveDown(3);
  document.fillColor('#6b7280').fontSize(9).text('PTSRIET Pulse · Certification request review');
});

export const createContributionCertificate = (claim) => makePdf((document) => {
  document.rect(22, 22, 551, 798).lineWidth(3).strokeColor('#f97316').stroke();
  document.fillColor('#f97316').fontSize(14).text('PTSRIET PULSE', 52, 100, { align: 'center', characterSpacing: 2 });
  document.moveDown(2);
  document.fillColor('#111827').fontSize(29).text('CERTIFICATE OF CONTRIBUTION', { align: 'center' });
  document.moveDown(1.5);
  document.fillColor('#4b5563').fontSize(13).text('This certificate recognizes the verified contribution of', { align: 'center' });
  document.moveDown(0.8);
  document.fillColor('#c2410c').fontSize(26).text(claim.fullName, { align: 'center' });
  document.moveDown(1);
  document.fillColor('#374151').fontSize(13).text(`for a verified ${claim.contributionType} contribution to Open Food Facts.`, { align: 'center' });
  document.moveDown(1.5);
  document.fillColor('#4b5563').fontSize(11).text(`Approved on ${new Date().toLocaleDateString('en-US')}`, { align: 'center' });
  document.moveDown(3);
  document.fillColor('#111827').fontSize(12).text('PTSRIET Pulse', { align: 'center' });
  document.fillColor('#6b7280').fontSize(9).text(`Verification reference: BCA-${claim.id}`, { align: 'center' });
});
