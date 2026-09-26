import React from 'react';
import { Link } from 'react-router-dom';
import './style/dled.css'; // D.El.Ed ki apni CSS file

const DledPage = () => {
  return (
    <div className="dled-unique-page">
      
      {/* Top Bar */}
      <div className="dled-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge">Department of Elementary Education</span>
      </div>

      {/* Hero Banner */}
      <div className="dled-hero">
        <span className="dled-icon">📚</span>
        <h1>Diploma in Elementary Education (D.El.Ed)</h1>
        <p>Prepare for foundational school teaching, child cognitive development, and primary classroom management through specialized training.</p>
        <div className="dled-meta-tags">
          <span>⏳ 2 Years (4 Semesters)</span>
          <span>🪑 50 Seats</span>
          <span>💰 ₹30,000 / Year</span>
        </div>
      </div>

      {/* Semesters & Notes Section */}
      <div className="dled-section">
        <h2>📚 Semester-wise Notes, Syllabus & Results</h2>
        <div className="dled-sem-grid">
          {['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'].map((sem, index) => (
            <div key={index} className="dled-sem-card">
              <h3>{sem}</h3>
              <div className="dled-links">
                <a href="#notes" className="dled-btn notes">Notes</a>
                <a href="#syllabus" className="dled-btn syllabus">Syllabus</a>
                <a href="#result" className="dled-btn result">Result</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HOD Profile */}
      <div className="dled-hod-card">
        <img 
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60" 
          alt="HOD D.El.Ed" 
          className="hod-img" 
        />
        <div>
          <h3>Dr. Priya Sen</h3>
          <p className="hod-title">HOD - Elementary Education</p>
          <p className="hod-desc">"Building strong educational roots at the primary level to shape future lifelong learners."</p>
        </div>
      </div>

    </div>
  );
};

export default DledPage;