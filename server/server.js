const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const pool = require('./config/db');

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

// Server start karein
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});