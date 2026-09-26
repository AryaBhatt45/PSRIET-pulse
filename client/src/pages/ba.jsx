import React from 'react';
import { Link } from 'react-router-dom';
import './style/ba.css'; // BA ki apni CSS file

const BaPage = () => {
  return (
    <div className="ba-unique-page">
      
      {/* Top Bar */}
      <div className="ba-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge">Department of Arts & Humanities</span>
      </div>

      {/* Hero Banner */}
      <div className="ba-hero">
        <span className="ba-icon">📖</span>
        <h1>Bachelor of Arts (BA)</h1>
        <p>Dive deep into literature, history, political science, sociology, and creative expression through a dynamic 3-year curriculum.</p>
        <div className="ba-meta-tags">
          <span>⏳ 3 Years (6 Semesters)</span>
          <span>🪑 150 Seats</span>
          <span>💰 ₹20,000 / Year</span>
        </div>
      </div>

      {/* Semesters & Notes Section */}
      <div className="ba-section">
        <h2>📚 Semester-wise Notes, Syllabus & Results</h2>
        <div className="ba-sem-grid">
          {['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'].map((sem, index) => (
            <div key={index} className="ba-sem-card">
              <h3>{sem}</h3>
              <div className="ba-links">
                <a href="#notes" className="ba-btn notes">Notes</a>
                <a href="#syllabus" className="ba-btn syllabus">Syllabus</a>
                <a href="#result" className="ba-btn result">Result</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HOD Profile */}
      <div className="ba-hod-card">
        <img 
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60" 
          alt="HOD BA" 
          className="hod-img" 
        />
        <div>
          <h3>Dr. Rajeshwari Sharma</h3>
          <p className="hod-title">HOD - Arts & Humanities Faculty</p>
          <p className="hod-desc">"Foster critical thinking, analytical writing, and a profound understanding of societal evolution."</p>
        </div>
      </div>

    </div>
  );
};

export default BaPage;