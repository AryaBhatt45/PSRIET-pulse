import React from 'react';
import { Link } from 'react-router-dom';
import './style/bca.css';

const BcomPage = () => {
  const semesters = [
    { sem: 'Sem 1', subjects: 'Financial Accounting, Business Organization, Business Communication, Micro Economics', syllabusPdf: '/syllabus/bcom-sem1-syllabus.pdf' },
    { sem: 'Sem 2', subjects: 'Corporate Accounting, Business Law, Macro Economics, Business Statistics', syllabusPdf: '/syllabus/bcom-sem2-syllabus.pdf' },
    { sem: 'Sem 3', subjects: 'Company Law, Cost Accounting, Principles of Business Management, Inventory', syllabusPdf: '/syllabus/bcom-sem3-syllabus.pdf' },
    { sem: 'Sem 4', subjects: 'Income Tax Law & Accounts, Fundamentals of Marketing, Monetary Economics, Auditing', syllabusPdf: '/syllabus/bcom-sem4-syllabus.pdf' },
    { sem: 'Sem 5', subjects: 'Corporate Tax Planning, Goods & Services Tax (GST), Financial Management', syllabusPdf: '/syllabus/bcom-sem5-syllabus.pdf' },
    { sem: 'Sem 6', subjects: 'Management Accounting, Human Resource Accounting, Auditing & Governance', syllabusPdf: '/syllabus/bcom-sem6-syllabus.pdf' }
  ];

  const gloryStudents = [
    { name: 'Divyanshu Jaiswal', achievement: 'Cleared CA Intermediate in First Attempt', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Simran Chawla', achievement: 'Selected as Tax Analyst at EY (Ernst & Young)', image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Kartik Mishra', achievement: 'Secured 99.4 Percentile in University Final Exams', image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Komal Gupta', achievement: 'Cleared CS Foundation with Merit Badge', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&h=200&q=80' }
  ];

  const announcements = [
    "📢 B.Com Session 2026-29 Admissions Live",
    "📊 Special Workshop on Tally Prime & GST Filing this weekend",
    "📝 Examination form submission last date: 28th July",
    "💼 Annual Commerce Fest 'VANIJYA 2026' scheduled for next month."
  ];

  return (
    <div className="bca-dashboard-theme">
      <div className="bca-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge-pill">Department of Commerce</span>
      </div>

      <div className="bca-hero-dashboard">
        <div className="bca-hero-left">
          <span className="hero-tag">ACADEMIC EXCELLENCE</span>
          <h1>Bachelor of Commerce (B.Com)</h1>
          <p>Master corporate taxation, financial reporting, industrial auditing, and contemporary fiscal regulations.</p>
          <div className="bca-meta-tags">
            <span>⏳ 3 Years</span>
            <span>🪑 120 Seats</span>
            <span>💰 ₹15,000 / Year</span>
          </div>
        </div>
        <div className="bca-hero-right">
          <img src="/logo.png" alt="B.Com Logo" className="bca-hero-logo" />
        </div>
      </div>

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
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bca-section glory-wrapper">
        <div className="bca-section-header text-center">
          <span className="section-badge">🏆 GLORY & ACHIEVEMENTS</span>
          <h2>Student Hall of Fame</h2>
        </div>
        <div className="infinite-slider-container">
          <div className="infinite-track">
            {[...gloryStudents, ...gloryStudents].map((student, idx) => (
              <div key={idx} className="glory-card-light">
                <img 
                  src={student.image} 
                  alt={student.name} 
                  className="glory-avatar" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(student.name)}&background=0D8ABC&color=fff&size=128`;
                  }}
                />
                <div className="glory-text">
                  <h3>{student.name}</h3>
                  <p>{student.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bca-hod-card-light">
        <img src="/nilesh.jpg" className="hod-img-light" alt="HOD" />
        <div>
          <h3>Dr. Santosh Kumar Pandey</h3>
          <p className="hod-title-light">HOD - Commerce Department</p>
          <p className="hod-desc-light">"Instilling deep analytical auditing precision and ethical financial responsibility in students."</p>
        </div>
      </div>
    </div>
  );
};

export default BcomPage;