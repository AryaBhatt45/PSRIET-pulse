import React from 'react';
import { Link } from 'react-router-dom';
import './style/ma.css'; // MA ki apni CSS file

const MaPage = () => {
  return (
    <div className="ma-unique-page">
      
      {/* Top Bar */}
      <div className="ma-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge">Department of Postgraduate Humanities</span>
      </div>

      {/* Hero Banner */}
      <div className="ma-hero">
        <span className="ma-icon">📜</span>
        <h1>Master of Arts (MA)</h1>
        <p>Advance your expertise in specialized literature, advanced philosophical studies, historical analysis, and rigorous research methodologies.</p>
        <div className="ma-meta-tags">
          <span>⏳ 2 Years (4 Semesters)</span>
          <span>🪑 40 Seats</span>
          <span>💰 ₹28,000 / Year</span>
        </div>
      </div>

      {/* Semesters & Notes Section */}
      <div className="ma-section">
        <h2>📚 Semester-wise Notes, Syllabus & Results</h2>
        <div className="ma-sem-grid">
          {['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'].map((sem, index) => (
            <div key={index} className="ma-sem-card">
              <h3>{sem}</h3>
              <div className="ma-links">
                <a href="#notes" className="ma-btn notes">Notes</a>
                <a href="#syllabus" className="ma-btn syllabus">Syllabus</a>
                <a href="#result" className="ma-btn result">Result</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HOD Profile */}
      <div className="ma-hod-card">
        <img 
          src="https://images.unsplash.com/photo-1548142813-c348350df52b?w=500&auto=format&fit=crop&q=60" 
          alt="HOD MA" 
          className="hod-img" 
        />
        <div>
          <h3>Dr. Subhashini Rao</h3>
          <p className="hod-title">HOD - Postgraduate Arts Faculty</p>
          <p className="hod-desc">"Encouraging deep literary criticism, advanced sociological research, and independent intellectual thought."</p>
        </div>
      </div>

    </div>
  );
};

export default MaPage;