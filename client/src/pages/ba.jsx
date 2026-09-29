import React from 'react';
import { Link } from 'react-router-dom';
import './style/bca.css';

const BaPage = () => {
  const semesters = [
    { sem: 'Sem 1', subjects: 'History of Ancient India, Hindi Literature (Kavya), Political Theory, Sociology Basics', syllabusPdf: '/syllabus/ba-sem1-syllabus.pdf' },
    { sem: 'Sem 2', subjects: 'Medieval Indian History, Hindi Prose & Fiction, Western Political Thought, Society in India', syllabusPdf: '/syllabus/ba-sem2-syllabus.pdf' },
    { sem: 'Sem 3', subjects: 'Modern Indian History (1757-1947), Modern Hindi Poetry, Indian Government & Politics, Social Change', syllabusPdf: '/syllabus/ba-sem3-syllabus.pdf' },
    { sem: 'Sem 4', subjects: 'World History (1453-1950), Functional & Media Hindi, Public Administration, Social Research Methods', syllabusPdf: '/syllabus/ba-sem4-syllabus.pdf' },
    { sem: 'Sem 5', subjects: 'Indian National Movement, Hindi Drama & Linguistics, International Relations, Classical Sociological Thinkers', syllabusPdf: '/syllabus/ba-sem5-syllabus.pdf' },
    { sem: 'Sem 6', subjects: 'Contemporary World History, Literary Criticism & Essays, Comparative Politics, Indian Sociological Thought', syllabusPdf: '/syllabus/ba-sem6-syllabus.pdf' }
  ];

  const gloryStudents = [
    { name: 'Vandana Shukla', achievement: 'Cleared UPPSC Pre Examination 2025', image: '/student1.jpg' },
    { name: 'Anurag Yadav', achievement: 'Published Poetry Anthology in National Forum', image: '/student2.jpg' },
    { name: 'Pooja Pandey', achievement: 'Rank 1 in University B.A Merit List', image: '/student3.jpg' },
    { name: 'Kishan Mishra', achievement: 'Selected for National Debate Championship', image: '/student4.jpg' }
  ];

  const announcements = [
    "📢 B.A Admission Open for Academic Session 2026-27",
    "📚 Annual Seminar on Indian History & Literature scheduled for next month.",
    "💡 National Scholarship Portal (NSP) Form submission open - Apply Now!",
    "📝 Even Semester Mid-Term Assignment submission last date: 20th July."
  ];

  return (
    <div className="bca-dashboard-theme">

      {/* Top Bar */}
      <div className="bca-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge-pill">Faculty of Arts & Humanities</span>
      </div>

      {/* Clean Dashboard-Style Hero Section */}
      <div className="bca-hero-dashboard">
        <div className="bca-hero-left">
          <span className="hero-tag">ACADEMIC EXCELLENCE</span>
          <h1>Bachelor of Arts (B.A)</h1>
          <p>Gain comprehensive critical thinking, social insights, and literary appreciation through a structured 3-year multidisciplinary curriculum.</p>
          <div className="bca-meta-tags">
            <span>⏳ 3 Years</span>
            <span>🪑 150 Seats</span>
            <span>💰 ₹10,000 / Year</span>
          </div>
        </div>
        <div className="bca-hero-right">
          <img src="/logo.png" alt="BA Logo" className="bca-hero-logo" />
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
          <h3>Prof. Ramakant Dwivedi</h3>
          <p className="hod-title-light">HOD - Faculty of Arts & Humanities</p>
          <p className="hod-desc-light">"Empowering students through historical perspectives, social conscience, and linguistic excellence."</p>
        </div>
      </div>

    </div>
  );
};

export default BaPage;
