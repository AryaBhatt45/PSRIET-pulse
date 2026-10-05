import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/ba.css';

const BaPage = () => {
  const [activeSem, setActiveSem] = useState(null);

  const toggleAccordion = (index) => {
    setActiveSem(activeSem === index ? null : index);
  };

  const subjectsList = [
    { name: 'Ancient History' },
    { name: 'Modern History' },
    { name: 'Geography', pdfUrl: '/Geography.pdf' },
    { name: 'Education' },
    { name: 'Sociology', pdfUrl: '/Sociology.pdf' },
    { name: 'English Literature', pdfUrl: '/English.pdf' },
    { name: 'Hindi Literature', pdfUrl: '/U_hindi.pdf' },
    { name: 'CTS (Co-Curricular)' }
  ];

  const semesters = [
    { sem: 'Sem 1', subjects: subjectsList },
    { sem: 'Sem 2', subjects: subjectsList },
    { sem: 'Sem 3', subjects: subjectsList },
    { sem: 'Sem 4', subjects: subjectsList },
    { sem: 'Sem 5', subjects: subjectsList },
    { sem: 'Sem 6', subjects: subjectsList }
  ];

  const announcements = [
    "📢 Check the latest institute notice for B.A. admissions and application dates.",
    "📖 Contact the department for current academic guidance and programme details.",
    "📝 Verify assignment deadlines with your semester coordinator.",
    "🎭 Follow institute announcements for upcoming cultural and literary events."
  ];

  return (
    <div className="ba-page-container">

      {/* Top Bar */}
      <div className="ba-top-bar">
        <Link to="/" className="ba-back-btn">← Back to Dashboard</Link>
        <span className="ba-badge-top">Faculty of Arts & Humanities</span>
      </div>

      {/* Hero Section */}
      <div className="ba-hero-card">
        <div>
          <span className="ba-hero-tag">ACADEMIC EXCELLENCE</span>
          <h1 className="ba-hero-title">Bachelor of Arts (B.A)</h1>
          <p className="ba-hero-desc">Gain comprehensive critical thinking, social insights, and literary appreciation through a structured multidisciplinary curriculum.</p>
          <div className="ba-hero-info-tags">
            <span>⏳ 3 Years</span>
            <span>🪑 90 Seats</span>
            <span>💰 ₹7000/ Year</span>
          </div>
        </div>
        <div className="ba-hero-logo-box">
          <img src="/logo.png" alt="BA Logo" />
        </div>
      </div>

      {/* Infinite Moving Ticker */}
      <div className="ba-ticker-container">
        <div className="ba-ticker-head">🚨 UPDATES</div>
        <div className="ba-ticker-body">
          <div className="ticker-track">
            {[...announcements, ...announcements].map((item, idx) => (
              <span key={idx} className="ba-ticker-item">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Curriculum Section */}
      <div className="ba-curriculum-section">
        <div className="ba-section-header">
          <span className="ba-sub-tag">🚀 ROADMAP</span>
          <h2>Semester-wise Curriculum & Notes</h2>
        </div>

        <div className="ba-sem-grid">
          {semesters.map((item, index) => {
            const isOpen = activeSem === index;
            return (
              <div key={index} className={`ba-sem-card ${isOpen ? 'open' : ''}`}>
                <div className="ba-sem-card-top">
                  <h3>{item.sem}</h3>
                  <span className="ba-active-dot"></span>
                </div>

                <p className="ba-sem-preview-text">
                  {item.subjects.map(s => s.name).join(', ')}
                </p>

                <button onClick={() => toggleAccordion(index)} className="ba-accordion-btn">
                  <span>{isOpen ? 'Hide Subjects' : 'View Subjects & Resources'}</span>
                  <span>{isOpen ? '▲' : '▼'}</span>
                </button>

                {isOpen && (
                  <div className="bca-sub-subjects-container">
                    {item.subjects.map((sub, subIdx) => (
                      <div key={subIdx} className="bca-sub-card">
                        <h4 className="ba-subject-title">{sub.name}</h4>
                        <div className="bca-links">
                          {sub.pdfUrl ? (
                            <a href={sub.pdfUrl} target="_blank" rel="noopener noreferrer" className="bca-btn syllabus-l">View PDF</a>
                          ) : (
                            <span style={{ color: '#64748b', fontSize: '0.82rem' }}>Verified resources are not available yet.</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Cheatsheet Hub Card (Replaces HOD section) */}
      <div className="ba-cheatsheet-card">
        <div className="ba-cheatsheet-header">
          <div>
            <span className="ba-cheat-tag">⚡ QUICK ACCESS</span>
            <h3>B.A. All-Subjects Master Cheatsheet Hub</h3>
            <p>Open the currently available subject PDFs. More verified resources will be added when published.</p>
          </div>
        </div>
        <div className="ba-cheat-grid">
          {subjectsList.filter((subj) => subj.pdfUrl).map((subj) => (
            <a key={subj.name} href={subj.pdfUrl} target="_blank" rel="noopener noreferrer" className="ba-cheat-chip">
              <span>{subj.name}</span>
              <span className="ba-pdf-badge">View PDF ↗</span>
            </a>
          ))}
        </div>
      </div>
      {/* Scholarship & Eligibility Hub */}
      <div className="ba-scholarship-card">
        <div className="ba-scholarship-header">
          <div>
            <span className="ba-sch-tag">🎓 FINANCIAL AID</span>
            <h3>State Scholarship & Fee Reimbursement</h3>
            <p>Check your eligibility criteria and apply for government scholarship schemes directly.</p>
          </div>
          <div className="ba-sch-buttons">
            <a href="https://scholarship.up.gov.in/" target="_blank" rel="noopener noreferrer" className="ba-sch-btn apply-btn">Apply Now 🚀</a>
            <a href="https://scholarship.up.gov.in/" target="_blank" rel="noopener noreferrer" className="ba-sch-btn status-btn">Check Status 🔍</a>
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

export default BaPage;