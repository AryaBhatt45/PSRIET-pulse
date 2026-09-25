import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js'; // Database connection import (.js extension is mandatory in ES modules)

// Environment variables configure karein
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

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

// Server start karein
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});