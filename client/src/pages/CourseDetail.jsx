import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courseMap, courseFallback } from '../data/courses';
import './CourseDetail.css';

const CourseDetail = () => {
  const { id } = useParams();
  const course = courseMap[id] || courseFallback;

  return (
    <div className="course-detail-page">
      <div className="course-detail-container">
        
        {/* Top Navigation & Back Button */}
        <div className="nav-bar-top">
          <Link to="/" className="back-home-btn">← Back to Dashboard</Link>
          <span className="portal-badge">PTSRIET Academic Portal</span>
        </div>

        {/* Big Course Header Banner */}
        <div className="course-hero-banner" style={{ '--course-accent': course.color || '#1769e0' }}>
          <div className="hero-left">
            <span className="hero-icon">{course.icon || '🎓'}</span>
            <div>
              <span className="hero-code">{course.name}</span>
              <h1>{course.fullName}</h1>
            </div>
          </div>
          <div className="hero-right">
            <div className="meta-badge">⏳ {course.duration}</div>
            <div className="meta-badge">🪑 {course.seats}</div>
            <div className="meta-badge">💰 {course.fees}</div>
          </div>
        </div>

        {/* Course Highlights / Slides Banner */}
        {course.slides && course.slides.length > 0 && (
          <div className="course-slides-ticker">
            <span className="ticker-label">Highlights:</span>
            <div className="ticker-content">
              {course.slides.map((slide, idx) => (
                <span key={idx} className="slide-item">✨ {slide}</span>
              ))}
            </div>
          </div>
        )}

        {/* Main Grid Content */}
        <div className="course-grid-content">
          
          {/* Left Column: Semesters Notes, Syllabus & Result Buttons */}
          <div className="course-main-info">
            <div className="section-box">
              <h2>📚 Semester-wise Notes, Syllabus & Results</h2>
              <p className="section-desc">Access semester-wise study material, syllabus outlines, and check exam results instantly.</p>
              
              <div className="semesters-grid">
                {course.semesters && course.semesters.map((semData, index) => (
                  <div key={index} className="sem-card">
                    <div className="sem-header">
                      <h3>{semData.sem}</h3>
                    </div>
                    <div className="sem-actions">
                      <a href={semData.notesLink} className="action-btn notes-btn" target="_blank" rel="noreferrer">
                        📄 Notes
                      </a>
                      <a href={semData.syllabusLink} className="action-btn syllabus-btn" target="_blank" rel="noreferrer">
                        📖 Syllabus
                      </a>
                      <a href={semData.resultLink} className="action-btn result-btn" target="_blank" rel="noreferrer">
                        🏆 Result
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility & Timings */}
            <div className="section-box">
              <h2>📋 Course Eligibility & Timings</h2>
              <div className="info-row">
                <div className="info-box">
                  <h4>Eligibility Criteria</h4>
                  <p>{course.eligibility}</p>
                </div>
                <div className="info-box">
                  <h4>Class Timings</h4>
                  <p>{course.timings}</p>
                </div>
              </div>
            </div>

            {/* Direct Pass Tips */}
            {course.directPassTips && (
              <div className="section-box tips-box">
                <h2>💡 Exam Direct Pass Tips</h2>
                <p>{course.directPassTips}</p>
              </div>
            )}
          </div>

          {/* Right Column: HOD Profile & Quick Contact */}
          <div className="course-sidebar">
            {course.hod && (
              <div className="hod-card">
                <div className="hod-img-wrapper">
                  <img src={course.hod.photo} alt={course.hod.name} className="hod-img" />
                </div>
                <h3>{course.hod.name}</h3>
                <p className="hod-desig">{course.hod.designation}</p>
                <p className="hod-msg">"Feel free to reach out to the department office for academic guidance and support."</p>
              </div>
            )}

            <div className="quick-help-card">
              <h3>Need Help?</h3>
              <p>Contact college administrative office or admission cell for query resolution.</p>
              <a href="tel:+919876543210" className="call-office-btn">📞 Call College Office</a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CourseDetail;