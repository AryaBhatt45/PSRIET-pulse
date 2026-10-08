import jwt from 'jsonwebtoken';

export default function requireAdmin(req, res, next) {
  const authorization = req.get('authorization') || '';
  const token = authorization.startsWith('Bearer ') ? authorization.slice(7) : '';
  const secret = process.env.JWT_SECRET;

  if (!secret || secret.length < 32) {
    return res.status(503).json({ message: 'Admin API is not configured.' });
  }

  try {
    const admin = jwt.verify(token, secret);
    if (admin.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access is required.' });
    }
    req.admin = admin;
    return next();
  } catch {
    return res.status(401).json({ message: 'Your admin session is invalid or has expired.' });
  }
}
