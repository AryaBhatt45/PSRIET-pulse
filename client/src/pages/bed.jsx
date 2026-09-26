import React from 'react';
import { Link } from 'react-router-dom';
import './style/bed.css'; // B.Ed ki apni CSS file

const BedPage = () => {
  return (
    <div className="bed-unique-page">
      
      {/* Top Bar */}
      <div className="bed-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge">Department of Education & Training</span>
      </div>

      {/* Hero Banner */}
      <div className="bed-hero">
        <span className="bed-icon">🎓</span>
        <h1>Bachelor of Education (B.Ed)</h1>
        <p>Shape future generations with modern pedagogical techniques, child psychology, and professional teaching methodologies.</p>
        <div className="bed-meta-tags">
          <span>⏳ 2 Years (4 Semesters)</span>
          <span>🪑 100 Seats</span>
          <span>💰 ₹45,000 / Year</span>
        </div>
      </div>

      {/* Semesters & Notes Section */}
      <div className="bed-section">
        <h2>📚 Semester-wise Notes, Syllabus & Results</h2>
        <div className="bed-sem-grid">
          {['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'].map((sem, index) => (
            <div key={index} className="bed-sem-card">
              <h3>{sem}</h3>
              <div className="bed-links">
                <a href="#notes" className="bed-btn notes">Notes</a>
                <a href="#syllabus" className="bed-btn syllabus">Syllabus</a>
                <a href="#result" className="bed-btn result">Result</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HOD Profile */}
      <div className="bed-hod-card">
        <img 
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60" 
          alt="HOD B.Ed" 
          className="hod-img" 
        />
        <div>
          <h3>Dr. Arvind Kumar</h3>
          <p className="hod-title">HOD - Faculty of Education</p>
          <p className="hod-desc">"Empowering educators with innovative teaching methods and moral values to inspire young minds."</p>
        </div>
      </div>

    </div>
  );
};

export default BedPage;