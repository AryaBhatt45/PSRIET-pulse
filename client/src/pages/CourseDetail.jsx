import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import { courseFallback, courseMap } from '../data/courses.js';
import './CourseDetail.css';

const CourseDetail = () => {
  const { id } = useParams();

  const currentCourse = courseMap[id] || { ...courseFallback, name: `${id ? id.toUpperCase() : 'Degree'} Program` };

  return (
    <>
      <Navbar />
      <main className="page-shell detail-page">
        <Link to="/" className="back-link">← Back to dashboard</Link>
        <header className="detail-hero" style={{ '--course-accent': currentCourse.color }}>
          <p className="eyebrow">PTSRIET academic excellence program</p>
          <h1>{currentCourse.fullName ? `${currentCourse.fullName} (${currentCourse.name})` : currentCourse.name}</h1>
          <p>Plan your journey with the essentials, department guidance, and a focused revision strategy.</p>
        </header>
        <div className="stat-grid">
          <div className="stat-card"><span>Duration</span><strong>{currentCourse.duration}</strong></div>
          <div className="stat-card"><span>Total seats</span><strong>{currentCourse.seats}</strong></div>
          <div className="stat-card"><span>Fee structure</span><strong className="fee-value">{currentCourse.fees}</strong></div>
        </div>
        <section className="detail-panel detail-copy">
          <div><span className="detail-label">Eligibility</span><p>{currentCourse.eligibility}</p></div>
          <div><span className="detail-label">Syllabus overview</span><p>{currentCourse.syllabus}</p></div>
          <div><span className="detail-label">Class timings</span><p>{currentCourse.timings}</p></div>
        </section>
        <section className="detail-panel hod-panel"><div className="avatar">{currentCourse.hod.name.charAt(0)}</div><div><span className="detail-label">Department contact</span><h2>{currentCourse.hod.name}</h2><p>{currentCourse.hod.designation}</p></div></section>
        <section className="revision-panel"><span className="revision-kicker">Quick revision guide</span><h2>Prepare with purpose</h2><p>{currentCourse.directPassTips}</p></section>
      </main>
    </>
  );
};

export default CourseDetail;