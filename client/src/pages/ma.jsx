import React from 'react';
import { Link } from 'react-router-dom';
import './style/bca.css';

const MaPage = () => {
  const semesters = [
    { sem: 'Sem 1', subjects: 'Advanced Literary Theory, Research Methodology & Historiography, Classical Political Thought, Sociological Concepts', syllabusPdf: '/syllabus/ma-sem1-syllabus.pdf' },
    { sem: 'Sem 2', subjects: 'Comparative Literature & Linguistics, Modern Indian Historiography, Indian Political System, Social Stratification', syllabusPdf: '/syllabus/ma-sem2-syllabus.pdf' },
    { sem: 'Sem 3', subjects: 'Specialized Thematic Elective, Interdisciplinary Seminars, Public Policy Analysis, Contemporary Social Movements', syllabusPdf: '/syllabus/ma-sem3-syllabus.pdf' },
    { sem: 'Sem 4', subjects: 'Master Dissertation / Thesis Submission, Comprehensive Academic Viva, Advanced Research Workshop', syllabusPdf: '/syllabus/ma-sem4-syllabus.pdf' }
  ];

  const gloryStudents = [
    { name: 'Shalini Tripathi', achievement: 'Qualified UGC-NET JRF in First Attempt', image: '/student1.jpg' },
    { name: 'Deepak Mishra', achievement: 'Published Peer-Reviewed Research in UGC Care Journal', image: '/student2.jpg' },
    { name: 'Richa Pandey', achievement: 'Gold Medalist - University PG Convocation', image: '/student3.jpg' },
    { name: 'Amitabh Kumar', achievement: 'Selected as Assistant Professor (Guest Faculty)', image: '/student4.jpg' }
  ];

  const announcements = [
    "📢 M.A Postgraduate Admission Open for Session 2026-28",
    "📚 PG Research Synopsis Submission Deadline: 20th July.",
    "💡 UGC-NET & SLET preparation guidance cell starts this Saturday.",
    "📝 Even Semester Dissertation presentation schedule announced."
  ];

  return (
    <div className="bca-dashboard-theme">

      {/* Top Bar */}
      <div className="bca-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge-pill">Faculty of Post-Graduate Studies</span>
      </div>

      {/* Clean Dashboard-Style Hero Section */}
      <div className="bca-hero-dashboard">
        <div className="bca-hero-left">
          <span className="hero-tag">ACADEMIC EXCELLENCE</span>
          <h1>Master of Arts (M.A)</h1>
          <p>Advanced interdisciplinary scholarship, rigorous research methodologies, and higher critical analysis in humanities.</p>
          <div className="bca-meta-tags">
            <span>⏳ 2 Years</span>
            <span>🪑 60 Seats</span>
            <span>💰 ₹12,000 / Year</span>
          </div>
        </div>
        <div className="bca-hero-right">
          <img src="/logo.png" alt="MA Logo" className="bca-hero-logo" />
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
          <h3>Prof. Shashi Kant Dwivedi</h3>
          <p className="hod-title-light">Dean & HOD - Post Graduate Studies</p>
          <p className="hod-desc-light">"Guiding postgraduate scholars towards high-impact original research and academic excellence."</p>
        </div>
      </div>

    </div>
  );
};

export default MaPage;