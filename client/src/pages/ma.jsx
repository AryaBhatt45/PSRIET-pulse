import React from 'react';
import { Link } from 'react-router-dom';
import CurriculumQuickAccess from '../components/CurriculumQuickAccess';
import CurriculumSemesterCards from '../components/CurriculumSemesterCards';
import './style/bca.css';

const MaPage = () => {
  const semesters = [
    { sem: 'Sem 1', subjects: 'Advanced Literary Theory, Research Methodology, Classical Political Thought, Sociological Concepts' },
    { sem: 'Sem 2', subjects: 'Comparative Literature, Modern Indian Historiography, Indian Political System, Stratification' },
    { sem: 'Sem 3', subjects: 'Specialized Thematic Elective, Interdisciplinary Seminars, Public Policy Analysis' },
    { sem: 'Sem 4', subjects: 'Master Dissertation / Thesis Submission, Comprehensive Academic Viva, Research Workshop' }
  ];

  const gloryStudents = [
    { name: 'Shalini Tripathi', achievement: 'Qualified UGC-NET JRF in First Attempt', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Deepak Mishra', achievement: 'Published Research in UGC Care Journal', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Richa Pandey', achievement: 'Gold Medalist - University PG Convocation', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Amitabh Kumar', achievement: 'Selected as Assistant Professor (Guest Faculty)', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80' }
  ];

  const announcements = [
    "📢 M.A Postgraduate Admission Open for Session 2026-28",
    "📚 PG Research Synopsis Submission Deadline: 20th July",
    "💡 UGC-NET & SLET preparation guidance cell starts this Saturday",
    "📝 Even Semester Dissertation presentation schedule announced."
  ];

  return (
    <div className="bca-dashboard-theme">
      <div className="bca-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge-pill">Faculty of Post-Graduate Studies</span>
      </div>

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
        <CurriculumSemesterCards semesters={semesters} />
      </div>
      <CurriculumQuickAccess semesters={semesters} />

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
          <h3>Prof. Shashi Kant Dwivedi</h3>
          <p className="hod-title-light">Dean & HOD - Post Graduate Studies</p>
          <p className="hod-desc-light">"Guiding postgraduate scholars towards high-impact original research and academic excellence."</p>
        </div>
      </div>
    </div>
  );
};

export default MaPage;