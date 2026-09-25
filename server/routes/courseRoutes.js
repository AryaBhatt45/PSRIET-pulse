const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Sabhi courses/degrees ki list fetch karne ke liye (BCA, BSc, BA, etc.)
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM courses ORDER BY id ASC');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Kisi specific course ki details uske ID ya code se fetch karne ke liye
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const course = await pool.query('SELECT * FROM courses WHERE id = $1', [id]);
        
        if (course.rows.length === 0) {
            return res.status(404).json({ message: "Course not found" });
        }

        // Us course ke HOD/Faculty ki details bhi sath mein fetch kar sakte hain
        const faculty = await pool.query('SELECT * FROM faculty WHERE course_id = $1', [id]);

        res.json({
            course: course.rows[0],
            faculty: faculty.rows
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;