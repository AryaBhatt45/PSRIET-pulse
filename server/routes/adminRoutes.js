import { timingSafeEqual } from 'node:crypto';
import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/login', (req, res) => {
  const { passcode } = req.body || {};
  const expectedPasscode = process.env.ADMIN_PASSCODE;
  const secret = process.env.JWT_SECRET;

  if (!expectedPasscode || !secret || secret.length < 32) {
    return res.status(503).json({ message: 'Admin login is not configured on the server.' });
  }

  if (typeof passcode !== 'string') {
    return res.status(400).json({ message: 'Enter the admin passcode.' });
  }

  const submitted = Buffer.from(passcode);
  const expected = Buffer.from(expectedPasscode);
  if (submitted.length !== expected.length || !timingSafeEqual(submitted, expected)) {
    return res.status(401).json({ message: 'Invalid admin passcode.' });
  }

  const token = jwt.sign({ role: 'admin' }, secret, { expiresIn: '8h' });
  return res.json({ token });
});

export default router;
