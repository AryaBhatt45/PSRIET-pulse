import React from 'react';
import { Link } from 'react-router-dom';
import './style/bca.css';

const BbaPage = () => {
  const semesters = [
    { sem: 'Sem 1', subjects: 'Principles of Management, Business Economics, Financial Accounting, Business Math', syllabusPdf: '/syllabus/bba-sem1-syllabus.pdf' },
    { sem: 'Sem 2', subjects: 'Organizational Behaviour, Business Communication, Marketing Management, Statistics', syllabusPdf: '/syllabus/bba-sem2-syllabus.pdf' },
    { sem: 'Sem 3', subjects: 'Human Resource Management, Business Law, Cost Accounting, Production Mgmt', syllabusPdf: '/syllabus/bba-sem3-syllabus.pdf' },
    { sem: 'Sem 4', subjects: 'Financial Management, Research Methodology, Operations Management, MIS', syllabusPdf: '/syllabus/bba-sem4-syllabus.pdf' },
    { sem: 'Sem 5', subjects: 'Strategic Management, Consumer Behaviour, Digital Marketing, Entrepreneurship', syllabusPdf: '/syllabus/bba-sem5-syllabus.pdf' },
    { sem: 'Sem 6', subjects: 'International Business, Business Policy, Environmental Studies, Major Project', syllabusPdf: '/syllabus/bba-sem6-syllabus.pdf' }
  ];

  const gloryStudents = [
    { name: 'Rohit Sharma', achievement: 'Selected as Business Analyst at HDFC', image: '/student1.jpg' },
    { name: 'Ananya Roy', achievement: 'Winner - National B-Plan Challenge 2025', image: '/student2.jpg' },
    { name: 'Sameer Khan', achievement: 'Secured Top Placement in FMCG Brand', image: '/student3.jpg' },
    { name: 'Pooja Tiwari', achievement: '1st Rank in University BBA Examinations', image: '/student4.jpg' }
  ];

  const announcements = [
    "📢 BBA Admission Open for Academic Session 2026-27",
    "💼 Summer Internship Project guidelines uploaded for Sem 4 & 6.",
    "💡 National Scholarship Portal (NSP) Form submission open - Apply Now!",
    "📝 Back Exam Form filling started - Submit before 30th June."
  ];

  return (
    <div className="bca-dashboard-theme">

      {/* Top Bar */}
      <div className="bca-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge-pill">Department of Business Administration</span>
      </div>

      {/* Clean Dashboard-Style Hero Section */}
      <div className="bca-hero-dashboard">
        <div className="bca-hero-left">
          <span className="hero-tag">ACADEMIC EXCELLENCE</span>
          <h1>Bachelor of Business Administration (BBA)</h1>
          <p>Develop managerial leadership, modern marketing strategies, and financial expertise with a professional 3-year curriculum.</p>
          <div className="bca-meta-tags">
            <span>⏳ 3 Years</span>
            <span>🪑 60 Seats</span>
            <span>💰 ₹22,000 / Year</span>
          </div>
        </div>
        <div className="bca-hero-right">
          <img src="/logo.png" alt="BBA Logo" className="bca-hero-logo" />
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
          <h3>Prof. Arvind Saxena</h3>
          <p className="hod-title-light">HOD - Department of Management</p>
          <p className="hod-desc-light">"Nurturing analytical mindset, corporate exposure, and strategic leadership skills."</p>
        </div>
      </div>

    </div>
  );
};

export default BbaPage;