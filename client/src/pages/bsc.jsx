import React from 'react';
import { Link } from 'react-router-dom';
import './style/bca.css';

const BscPage = () => {
  const semesters = [
    { sem: 'Sem 1', subjects: 'Mechanics & Wave Motion, Inorganic Chemistry, Calculus & Matrices', syllabusPdf: '/syllabus/bsc-sem1-syllabus.pdf' },
    { sem: 'Sem 2', subjects: 'Thermal Physics, Organic Chemistry, Geometry & Vector Calculus', syllabusPdf: '/syllabus/bsc-sem2-syllabus.pdf' },
    { sem: 'Sem 3', subjects: 'Optics & Lasers, Physical Chemistry, Differential Equations', syllabusPdf: '/syllabus/bsc-sem3-syllabus.pdf' },
    { sem: 'Sem 4', subjects: 'Electromagnetism, Analytical Chemistry, Real Analysis', syllabusPdf: '/syllabus/bsc-sem4-syllabus.pdf' },
    { sem: 'Sem 5', subjects: 'Quantum Mechanics, Spectroscopy, Linear Algebra & Mechanics', syllabusPdf: '/syllabus/bsc-sem5-syllabus.pdf' },
    { sem: 'Sem 6', subjects: 'Solid State Physics & Electronics, Organic Synthesis, Project & Viva', syllabusPdf: '/syllabus/bsc-sem6-syllabus.pdf' }
  ];

  const gloryStudents = [
    { name: 'Sneha Pandey', achievement: 'Rank 1 in University B.Sc Merit List', image: '/student1.jpg' },
    { name: 'Vikram Singh', achievement: 'Cleared IIT-JAM Physics with AIR 142', image: '/student2.jpg' },
    { name: 'Ananya Roy', achievement: 'Selected for BARC Summer Internship', image: '/student3.jpg' },
    { name: 'Ritesh Kumar', achievement: '1st Prize in Inter-College Science Model Expo', image: '/student4.jpg' }
  ];

  const announcements = [
    "📢 B.Sc Admission Open for Academic Session 2026-27",
    "🔬 Odd Semester Practical Lab Exams schedule announced.",
    "💡 National Scholarship Portal (NSP) Form submission open - Apply Now!",
    "📝 Back Paper / Improvement Examination form filling live."
  ];

  return (
    <div className="bca-dashboard-theme">

      {/* Top Bar */}
      <div className="bca-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge-pill">Department of Science</span>
      </div>

      {/* Clean Dashboard-Style Hero Section */}
      <div className="bca-hero-dashboard">
        <div className="bca-hero-left">
          <span className="hero-tag">ACADEMIC EXCELLENCE</span>
          <h1>Bachelor of Science (B.Sc)</h1>
          <p>Explore natural sciences, advanced practical laboratories, and analytical research with a comprehensive 3-year curriculum.</p>
          <div className="bca-meta-tags">
            <span>⏳ 3 Years</span>
            <span>🪑 120 Seats</span>
            <span>💰 ₹18,000 / Year</span>
          </div>
        </div>
        <div className="bca-hero-right">
          <img src="/logo.png" alt="B.Sc Logo" className="bca-hero-logo" />
        </div>
      </div>

      {/* Important Information Infinite Ticker */}
      <div className="important-ticker-wrapper">
        <div className="ticker-label">🚨 IMPORTANT UPDATES</div>
        <div className="ticker-container">
          <div className="ticker-track">
            {[...announcements, ...announcements].map((item, idx) => (
              <span key={idx} className="ticker-item">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Semesters, Notes & Syllabus Section */}
      <div className="bca-section">
        <div className="bca-section-header">
          <span className="section-badge">🚀 ROADMAP</span>
          <h2>Semester-wise Curriculum & Notes</h2>
        </div>
        <div className="bca-sem-grid">
          {semesters.map((item, index) => (
            <div key={index} className="bca-sem-card-light">
              <div className="card-top">
                <h3>{item.sem}</h3>
                <span className="active-dot"></span>
              </div>
              <p className="sem-subjects">{item.subjects}</p>

              <div className="bca-links">
                <a href="#notes" className="bca-btn notes-l">Notes</a>
                <a href="#quick-notes" className="bca-btn quick-l">Quick Notes ✨</a>
                <a href={item.syllabusPdf} target="_blank" rel="noopener noreferrer" className="bca-btn syllabus-l">Syllabus PDF</a>
                <a href="/result-dummy" className="bca-btn result-l">Result</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Glory Infinite Slider Section with Student Photos */}
      <div className="bca-section glory-wrapper">
        <div className="bca-section-header text-center">
          <span className="section-badge">🏆 GLORY & ACHIEVEMENTS</span>
          <h2>Student Hall of Fame</h2>
        </div>

        <div className="infinite-slider-container">
          <div className="infinite-track">
            {[...gloryStudents, ...gloryStudents].map((student, idx) => (
              <div key={idx} className="glory-card-light">
                <img src={student.image} alt={student.name} className="glory-avatar" />
                <div className="glory-text">
                  <h3>{student.name}</h3>
                  <p>{student.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HOD Profile */}
      <div className="bca-hod-card-light">
        <img src="/nilesh.jpg" className="hod-img-light" alt="HOD" />
        <div>
          <h3>Dr. Rajeshwar Mishra</h3>
          <p className="hod-title-light">HOD - Faculty of Science</p>
          <p className="hod-desc-light">"Emphasizing rigorous laboratory experiments, analytical problem-solving, and scientific inquiry."</p>
        </div>
      </div>

    </div>
  );
};

export default BscPage;