import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => (
  <Link className="course-card" style={{ '--course-accent': course.color }} to={`/course/${course.id}`}>
    <div className="course-card-top"><span className="course-icon">{course.icon}</span><span className="course-arrow">↗</span></div>
    <p className="course-code">{course.name}</p>
    <h3>{course.fullName}</h3>
    <span className="course-link">View course details <b>→</b></span>
  </Link>
);

export default CourseCard;
