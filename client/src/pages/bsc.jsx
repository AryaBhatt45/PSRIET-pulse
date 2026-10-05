import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/bsc.css';

const BscPage = () => {
  const [activeSem, setActiveSem] = useState(null);

  const toggleAccordion = (index) => {
    setActiveSem(activeSem === index ? null : index);
  };

  // B.Sc ke 8 major subjects har semester ke liye
  const subjectsList = [
    { name: 'Mechanics & Wave Motion', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/bsc-dummy.pdf' },
    { name: 'Calculus & Algebra', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/bsc-dummy.pdf' },
    { name: 'Fundamentals of Chemistry', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/bsc-dummy.pdf' },
    { name: 'Thermal Physics & Semiconductor', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/bsc-dummy.pdf' },
    { name: 'Differential Equations', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/bsc-dummy.pdf' },
    { name: 'Organic & Inorganic Chemistry', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/bsc-dummy.pdf' },
    { name: 'Computer Science Basics', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/bsc-dummy.pdf' },
    { name: 'CTS (Co-Curricular)', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/bsc-dummy.pdf' }
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
    "📢 B.Sc Admission 2026: Online Registrations Open[cite: 13]",
    "🔬 Physics & Chemistry practical batches schedule announced[cite: 13]",
    "📝 Back Paper examination dates released for 2nd & 4th semesters[cite: 13]",
    "💡 Inter-college Science Model competition on 22nd October[cite: 13]."
  ];

  return (
    <div className="bsc-page-container">

      {/* Top Bar */}
      <div className="ba-top-bar">
        <Link to="/" className="ba-back-btn">← Back to Dashboard</Link>
        <span className="ba-badge-top">Faculty of Science</span>
      </div>

      {/* Hero Section */}
      <div className="ba-hero-card">
        <div>
          <span className="ba-hero-tag">ACADEMIC EXCELLENCE</span>
          <h1 className="ba-hero-title">Bachelor of Science (B.Sc - PCM)</h1>
          <p className="ba-hero-desc">Explore empirical experimentation, pure physics, advanced calculus, and experimental chemical laboratories.</p>
          <div className="ba-hero-info-tags">
            <span>⏳ 3 Years</span>
            <span>🪑 120 Seats</span>
            <span>💰 ₹18,000 / Year</span>
          </div>
        </div>
        <div className="ba-hero-logo-box">
          <img src="/logo.png" alt="B.Sc Logo" />
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
                          <a href={sub.notesUrl} className="bca-btn notes-l">Notes</a>
                          <a href={sub.quickUrl} className="bca-btn quick-l">Quick ✨</a>
                          <a href={sub.pdfUrl} target="_blank" rel="noopener noreferrer" className="bca-btn syllabus-l">Syllabus</a>
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

      {/* Cheatsheet Hub Card */}
      <div className="ba-cheatsheet-card">
        <div className="ba-cheatsheet-header">
          <div>
            <span className="ba-cheat-tag">⚡ QUICK ACCESS</span>
            <h3>B.Sc. All-Subjects Master Cheatsheet Hub</h3>
            <p>Access one-shot revision notes and summary PDFs for all major science subjects instantly.</p>
          </div>
          <a href="/syllabus/bsc-dummy.pdf" target="_blank" rel="noopener noreferrer" className="ba-cheat-main-btn">
            View All Cheatsheets 📄
          </a>
        </div>
        <div className="ba-cheat-grid">
          {subjectsList.map((subj, sIdx) => (
            <a key={sIdx} href={subj.pdfUrl} target="_blank" rel="noopener noreferrer" className="ba-cheat-chip">
              <span>{subj.name}</span>
              <span className="ba-pdf-badge">PDF view ↗</span>
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
            <a href="#" className="ba-sch-btn apply-btn">Apply Now 🚀</a>
            <a href="#" className="ba-sch-btn status-btn">Check Status 🔍</a>
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

export default BscPage;