import React from 'react';
import { Link } from 'react-router-dom';
import './style/bba.css'; // BBA ki apni CSS file

const BbaPage = () => {
  return (
    <div className="bba-unique-page">
      
      {/* Top Bar */}
      <div className="bba-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge">Department of Management Studies</span>
      </div>

      {/* Hero Banner */}
      <div className="bba-hero">
        <span className="bba-icon">📊</span>
        <h1>Bachelor of Business Administration (BBA)</h1>
        <p>Master leadership, corporate management, marketing strategies, and financial analytics through an intensive 3-year curriculum.</p>
        <div className="bba-meta-tags">
          <span>⏳ 3 Years (6 Semesters)</span>
          <span>🪑 60 Seats</span>
          <span>💰 ₹40,000 / Year</span>
        </div>
      </div>

      {/* Semesters & Notes Section */}
      <div className="bba-section">
        <h2>📚 Semester-wise Notes, Syllabus & Results</h2>
        <div className="bba-sem-grid">
          {['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'].map((sem, index) => (
            <div key={index} className="bba-sem-card">
              <h3>{sem}</h3>
              <div className="bba-links">
                <a href="#notes" className="bba-btn notes">Notes</a>
                <a href="#syllabus" className="bba-btn syllabus">Syllabus</a>
                <a href="#result" className="bba-btn result">Result</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HOD Profile */}
      <div className="bba-hod-card">
        <img 
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60" 
          alt="HOD BBA" 
          className="hod-img" 
        />
        <div>
          <h3>Dr. Manish Malhotra</h3>
          <p className="hod-title">HOD - Management Faculty</p>
          <p className="hod-desc">"Drive leadership excellence, strategic thinking, and corporate innovation from day one."</p>
        </div>
      </div>

    </div>
  );
};

export default BbaPage;