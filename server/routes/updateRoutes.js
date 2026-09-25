const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Sabhi latest updates/notices fetch karne ke liye
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM updates ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Naya update add karne ke liye (Admin ke liye useful hoga)
router.post('/', async (req, res) => {
    try {
        const { title, link } = req.body;
        const newUpdate = await pool.query(
            'INSERT INTO updates (title, link) VALUES ($1, $2) RETURNING *',
            [title, link]
        );
        res.json(newUpdate.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;