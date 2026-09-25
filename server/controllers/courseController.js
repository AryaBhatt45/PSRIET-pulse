const pool = require('../config/db');

// Sabhi courses get karne ka logic
const getAllCourses = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM courses ORDER BY id ASC');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server Error while fetching courses' });
    }
};

// Ek single course aur uski faculty details get karne ka logic
const getCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await pool.query('SELECT * FROM courses WHERE id = $1', [id]);
        
        if (course.rows.length === 0) {
            return res.status(404).json({ message: "Course not found" });
        }

        const faculty = await pool.query('SELECT * FROM faculty WHERE course_id = $1', [id]);

        res.status(200).json({
            course: course.rows[0],
            faculty: faculty.rows
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server Error while fetching course details' });
    }
};

module.exports = {
    getAllCourses,
    getCourseById
};