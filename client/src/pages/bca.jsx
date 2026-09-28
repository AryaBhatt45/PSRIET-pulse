import React from 'react';
import { Link } from 'react-router-dom';
import './style/bca.css';

const BcaPage = () => {
  const semesters = [
    { sem: 'Sem 1', subjects: 'C Programming, Computer Fundamentals, Basic Math' },
    { sem: 'Sem 2', subjects: 'C++, Web Designing (HTML/CSS/JS), Digital Electronics' },
    { sem: 'Sem 3', subjects: 'Data Structures (DSA), Python OOPs, DBMS & SQL' },
    { sem: 'Sem 4', subjects: 'Advanced Java, Software Engineering, Computer Networks' },
    { sem: 'Sem 5', subjects: 'Full-Stack Development (MERN), Cyber Security' },
    { sem: 'Sem 6', subjects: 'Cloud Computing, Major Live Project, AI Basics' }
  ];

  return (
    <div className="bca-unique-page">

      {/* Top Bar */}
      <div className="bca-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge">Department of Computer Applications</span>
      </div>

      {/* Hero Banner with Tech Code Background */}
      <div className="bca-hero">
        <div className="bca-hero-content">
          {/* Unique Glowing Tech Computer Logo */}
          <div className="bca-logo-container">
            <svg className="bca-tech-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
              <polyline points="7 8 10 11 7 14"></polyline>
              <line x1="13" y1="14" x2="17" y2="14"></line>
            </svg>
          </div>
          <h1>Bachelor of Computer Applications (BCA)</h1>
          <p> Bachelor programming, full-stack software development, and modern technologies with a 3-year structured curriculum.</p>
          <div className="bca-meta-tags">
            <span>⏳ 3 Years (6 Semesters)</span>
            <span>🪑 60 Seats</span>
            <span>💰 ₹35,000 / Year</span>
          </div>
        </div>
      </div>
      {/* Semesters & Notes Section */}
      <div className="bca-section">
        <div className="bca-section-header">
          <span className="section-badge">🚀 ACADEMIC ROADMAP</span>
          <h2>Semester-wise Curriculum, Notes & Results</h2>
        </div>
        <div className="bca-sem-grid">
          {semesters.map((item, index) => (
            <div key={index} className="bca-sem-card">
              <h3>{item.sem}</h3>
              <p className="sem-subjects">{item.subjects}</p>
              <div className="bca-links">
                <a href="#notes" className="bca-btn notes">Notes</a>
                <a href="#syllabus" className="bca-btn syllabus">Syllabus</a>
                <a href="#result" className="bca-btn result">Result</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HOD Profile */}
      <div className="bca-hod-card">
        <img
          src="/nilesh.jpg"
          className="hod-img"
        />
        <div>
          <h3>Pradeep Pandey</h3>
          <p className="hod-title">HOD - Computer Science Department</p>
          <p className="hod-desc">"Focus on practical lab coding, algorithmic logic, and consistent project building."</p>
        </div>
      </div>

    </div>
  );
};

export default BcaPage;