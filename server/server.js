import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js'; // Database connection import (.js extension is mandatory in ES modules)
import adminRoutes from './routes/adminRoutes.js';
import certificationRoutes from './routes/certificationRoutes.js';

// Environment variables configure karein
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '64kb' }));
app.use('/api/admin', adminRoutes);
app.use('/api/certification-claims', certificationRoutes);

// Test Route
app.get('/', (req, res) => {
    res.json({ message: "PTSRIET Pulse API is running successfully!" });
});

// Database Connection Test Route
app.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({ success: true, time: result.rows[0].now });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ success: false, error: err.message });
    }
});

app.use('/api', (req, res) => {
    res.status(404).json({ message: `API route not found: ${req.method} ${req.originalUrl}` });
});

app.use((error, req, res, next) => {
    console.error('Unhandled API request error:', error);
    if (res.headersSent) return next(error);
    return res.status(500).json({ message: 'An unexpected server error occurred.' });
});

const initializeDatabase = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS certification_claims (
            id UUID PRIMARY KEY,
            full_name VARCHAR(120) NOT NULL,
            email VARCHAR(254) NOT NULL,
            off_username VARCHAR(80),
            github_username VARCHAR(80),
            contribution_type VARCHAR(40) NOT NULL,
            agreement_accepted BOOLEAN NOT NULL,
            photo_data BYTEA,
            photo_mime_type VARCHAR(20),
            claim_status VARCHAR(20) NOT NULL DEFAULT 'pending',
            receipt_email_status VARCHAR(20) NOT NULL DEFAULT 'pending',
            certificate_email_status VARCHAR(20) NOT NULL DEFAULT 'not_issued',
            certificate_email_sent_at TIMESTAMPTZ,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `);
};

try {
    await initializeDatabase();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
} catch (error) {
    console.error('Unable to initialize the certification database:', error);
    process.exitCode = 1;
}