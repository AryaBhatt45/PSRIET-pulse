import React from 'react';
import { Link } from 'react-router-dom';
import './style/bcom.css'; // B.Com ki apni CSS file

const BcomPage = () => {
  return (
    <div className="bcom-unique-page">
      
      {/* Top Bar */}
      <div className="bcom-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge">Department of Commerce & Accounting</span>
      </div>

      {/* Hero Banner */}
      <div className="bcom-hero">
        <span className="bcom-icon">💼</span>
        <h1>Bachelor of Commerce (B.Com)</h1>
        <p>Master financial accounting, taxation, corporate laws, and economic principles through a structured 3-year curriculum.</p>
        <div className="bcom-meta-tags">
          <span>⏳ 3 Years (6 Semesters)</span>
          <span>🪑 120 Seats</span>
          <span>💰 ₹22,000 / Year</span>
        </div>
      </div>

      {/* Semesters & Notes Section */}
      <div className="bcom-section">
        <h2>📚 Semester-wise Notes, Syllabus & Results</h2>
        <div className="bcom-sem-grid">
          {['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'].map((sem, index) => (
            <div key={index} className="bcom-sem-card">
              <h3>{sem}</h3>
              <div className="bcom-links">
                <a href="#notes" className="bcom-btn notes">Notes</a>
                <a href="#syllabus" className="bcom-btn syllabus">Syllabus</a>
                <a href="#result" className="bcom-btn result">Result</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HOD Profile */}
      <div className="bcom-hod-card">
        <img 
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60" 
          alt="HOD B.Com" 
          className="hod-img" 
        />
        <div>
          <h3>Dr. Ramesh Gupta</h3>
          <p className="hod-title">HOD - Commerce Faculty</p>
          <p className="hod-desc">"Master accounting standards, tax planning, and financial acumen for a bright corporate career."</p>
        </div>
      </div>

    </div>
  );
};

export default BcomPage;