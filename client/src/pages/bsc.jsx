import React from 'react';
import { Link } from 'react-router-dom';
import './style/bsc.css'; // BSc ki apni CSS file

const BscPage = () => {
  return (
    <div className="bsc-unique-page">
      
      {/* Top Bar */}
      <div className="bsc-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge">Department of Science</span>
      </div>

      {/* Hero Banner */}
      <div className="bsc-hero">
        <span className="bsc-icon">🔬</span>
        <h1>Bachelor of Science (BSc)</h1>
        <p>Explore fundamental sciences, experimental research, and analytical methodologies with a comprehensive 3-year curriculum.</p>
        <div className="bsc-meta-tags">
          <span>⏳ 3 Years (6 Semesters)</span>
          <span>🪑 120 Seats</span>
          <span>💰 ₹25,000 / Year</span>
        </div>
      </div>

      {/* Semesters & Notes Section */}
      <div className="bsc-section">
        <h2>📚 Semester-wise Notes, Syllabus & Results</h2>
        <div className="bsc-sem-grid">
          {['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'].map((sem, index) => (
            <div key={index} className="bsc-sem-card">
              <h3>{sem}</h3>
              <div className="bsc-links">
                <a href="#notes" className="bsc-btn notes">Notes</a>
                <a href="#syllabus" className="bsc-btn syllabus">Syllabus</a>
                <a href="#result" className="bsc-btn result">Result</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HOD Profile */}
      <div className="bsc-hod-card">
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60" 
          alt="HOD BSc" 
          className="hod-img" 
        />
        <div>
          <h3>Dr. Sunita Verma</h3>
          <p className="hod-title">HOD - Science Faculty</p>
          <p className="hod-desc">"Focus on core theoretical derivations, laboratory practicals, and conceptual clarity."</p>
        </div>
      </div>

    </div>
  );
};

export default BscPage;