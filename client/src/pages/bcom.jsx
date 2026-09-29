import React from 'react';
import { Link } from 'react-router-dom';
import './style/bca.css';

const BcomPage = () => {
  const semesters = [
    { sem: 'Sem 1', subjects: 'Financial Accounting, Business Regulatory Framework, Micro Economics, Business Communication', syllabusPdf: '/syllabus/bcom-sem1-syllabus.pdf' },
    { sem: 'Sem 2', subjects: 'Corporate Accounting, Business Laws, Business Mathematics & Statistics, Macro Economics', syllabusPdf: '/syllabus/bcom-sem2-syllabus.pdf' },
    { sem: 'Sem 3', subjects: 'Income Tax Law & Accounts, Cost Accounting, Principles of Business Management, Company Law', syllabusPdf: '/syllabus/bcom-sem3-syllabus.pdf' },
    { sem: 'Sem 4', subjects: 'Goods & Services Tax (GST), Auditing, Corporate Governance, Financial Markets & Institutions', syllabusPdf: '/syllabus/bcom-sem4-syllabus.pdf' },
    { sem: 'Sem 5', subjects: 'Management Accounting, Banking Operations & Insurance, Indian Economy, E-Commerce', syllabusPdf: '/syllabus/bcom-sem5-syllabus.pdf' },
    { sem: 'Sem 6', subjects: 'Corporate Tax Planning, International Trade, Financial Management, Project Work & Viva', syllabusPdf: '/syllabus/bcom-sem6-syllabus.pdf' }
  ];

  const gloryStudents = [
    { name: 'Adarsh Gupta', achievement: 'Cleared CA Foundation in First Attempt', image: '/student1.jpg' },
    { name: 'Kavita Singh', achievement: 'Tax Consultant Trainee at Deloitte', image: '/student2.jpg' },
    { name: 'Manish Tiwari', achievement: 'University Silver Medalist in B.Com', image: '/student3.jpg' },
    { name: 'Shruti Agrawal', achievement: 'Certified GST Practitioner & Accountant', image: '/student4.jpg' }
  ];

  const announcements = [
    "📢 B.Com Admission Open for Academic Session 2026-27",
    "📊 Practical Workshop on Tally Prime & GST Filing starting next Monday.",
    "💡 National Scholarship Portal (NSP) Form submission open - Apply Now!",
    "📝 Even Semester Examination Form submission deadline: 10th July."
  ];

  return (
    <div className="bca-dashboard-theme">

      {/* Top Bar */}
      <div className="bca-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge-pill">Faculty of Commerce</span>
      </div>

      {/* Clean Dashboard-Style Hero Section */}
      <div className="bca-hero-dashboard">
        <div className="bca-hero-left">
          <span className="hero-tag">ACADEMIC EXCELLENCE</span>
          <h1>Bachelor of Commerce (B.Com)</h1>
          <p>Gain deep expertise in corporate accounting, financial auditing, tax regulations, and modern banking operations.</p>
          <div className="bca-meta-tags">
            <span>⏳ 3 Years</span>
            <span>🪑 80 Seats</span>
            <span>💰 ₹15,000 / Year</span>
          </div>
        </div>
        <div className="bca-hero-right">
          <img src="/logo.png" alt="B.Com Logo" className="bca-hero-logo" />
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
          <h3>Dr. Suresh Chandra Agarwal</h3>
          <p className="hod-title-light">HOD - Faculty of Commerce</p>
          <p className="hod-desc-light">"Focusing on financial literacy, forensic accounting, and real-world corporate tax compliances."</p>
        </div>
      </div>

    </div>
  );
};

export default BcomPage;