import React from 'react';
import { Link } from 'react-router-dom';
import CurriculumQuickAccess from '../components/CurriculumQuickAccess';
import CurriculumSemesterCards from '../components/CurriculumSemesterCards';
import './style/bba.css';

const BbaPage = () => {
  const semesters = [
    { sem: 'Sem 1', subjects: 'Principles of Management, Business Economics, Business Communication, Accounting', syllabusPdf: '/syllabus/BBA sem 1 .pdf' },
    { sem: 'Sem 2', subjects: 'Organizational Behavior, Business Statistics, Marketing Management, Business Law', syllabusPdf: '/syllabus/BBA 2 sem .pdf' },
    { sem: 'Sem 3', subjects: 'Human Resource Management, Cost & Management Accounting, Business Environment', syllabusPdf: '/syllabus/bba-sem3-syllabus.pdf' },
    { sem: 'Sem 4', subjects: 'Financial Management, Research Methodology, Indian Banking System, Company Law', syllabusPdf: '/syllabus/bba-sem4-syllabus.pdf' },
    { sem: 'Sem 5', subjects: 'Entrepreneurship Development, Strategic Management, Income Tax Law', syllabusPdf: '/syllabus/bba-sem5-syllabus.pdf' },
    { sem: 'Sem 6', subjects: 'International Business, Project Management & Viva, Business Ethics', syllabusPdf: '/syllabus/bba-sem6-syllabus.pdf' }
  ];

  const announcements = [
    "📢 BBA Summer Internship Placement Drive Starting Soon",
    "💼 Corporate Guest Lecture by Industry Experts on Friday",
    "📈 B-School Case Study Competition registrations open",
    "📝 4th & 6th Sem Viva-Voce Presentation timetable released."
  ];

  return (
    <div className="bba-dashboard-theme">
      {/* Top Bar */}
      <div className="bba-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge-pill">Department of Management Studies</span>
      </div>

      {/* Hero Section */}
      <div className="bba-hero-dashboard">
        <div className="bba-hero-left">
          <span className="hero-tag">ACADEMIC EXCELLENCE</span>
          <h1>Bachelor of Business Administration (BBA)</h1>
          <p>Develop leadership acumen, strategic financial planning, corporate communication, and startup agility.</p>
          <div className="bba-meta-tags">
            <span>⏳ 3 Years</span>
            <span>🪑 60 Seats</span>
            <span>💰 ₹32,000 / Year</span>
          </div>
        </div>
        <div className="bba-hero-right">
          <img src="/logo.png" alt="BBA Logo" className="bba-hero-logo" />
        </div>
      </div>

      {/* Ticker Section */}
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

      {/* Semester Roadmap Section */}
      <div className="bba-section">
        <div className="bba-section-header">
          <span className="section-badge">🚀 ROADMAP</span>
          <h2>Semester-wise Curriculum & Notes</h2>
        </div>
        <CurriculumSemesterCards semesters={semesters} />
      </div>
      <CurriculumQuickAccess semesters={semesters} />

      {/* Scholarship & Eligibility Hub */}
      <div className="ba-scholarship-card" style={{ marginTop: '25px', marginBottom: '30px' }}>
        <div className="ba-scholarship-header">
          <div>
            <span className="ba-sch-tag">🎓 FINANCIAL AID</span>
            <h3>State Scholarship & Fee Reimbursement</h3>
            <p>Check your eligibility criteria and apply for government scholarship schemes directly.</p>
          </div>
          <div className="ba-sch-buttons">
            <a href="#apply" className="ba-sch-btn apply-btn">Apply Now 🚀</a>
            <a href="#status" className="ba-sch-btn status-btn">Check Status 🔍</a>
          </div>
        </div>

        <div className="ba-sch-criteria-box">
          <div className="ba-criteria-item">
            <span className="ba-criteria-label">Academic Cutoff:</span>
            <span className="ba-criteria-val">Minimum 75% Marks</span>
          </div>
          <div className="ba-criteria-item">
            <span className="ba-criteria-label">Backlog Rule:</span>
            <span className="ba-criteria-val">No Active Backlogs (0 Failures)</span>
          </div>
          <div className="ba-criteria-item">
            <span className="ba-criteria-label">Attendance:</span>
            <span className="ba-criteria-val">Minimum 75% Required</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BbaPage;