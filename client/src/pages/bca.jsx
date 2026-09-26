import React from 'react';
import { Link } from 'react-router-dom';
import './style/bca.css'; // Apne style folder ke path ke hisab se check kar lein

const BcaPage = () => {
  return (
    <div className="bca-unique-page">
      
      {/* Top Bar */}
      <div className="bca-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge">Department of Computer Applications</span>
      </div>

      {/* Hero Banner */}
      <div className="bca-hero">
        <span className="bca-icon">💻</span>
        <h1>Bachelor of Computer Applications (BCA)</h1>
        <p>Master programming, software development, and modern technologies with a 3-year structured curriculum.</p>
        <div className="bca-meta-tags">
          <span>⏳ 3 Years (6 Semesters)</span>
          <span>🪑 60 Seats</span>
          <span>💰 ₹35,000 / Year</span>
        </div>
      </div>

      {/* Semesters & Notes Section */}
      <div className="bca-section">
        <h2>📚 Semester-wise Notes, Syllabus & Results</h2>
        <div className="bca-sem-grid">
          {['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'].map((sem, index) => (
            <div key={index} className="bca-sem-card">
              <h3>{sem}</h3>
              <div className="bca-links">
                <a href="#notes" className="bca-btn notes">Notes</a>
                <a href="#syllabus" className="bca-btn syllabus">Syllabus</a>
                <a href="#result" className="bca-btn result">Result</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HOD Profile */}
      <div className="bca-hod-card">
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60" 
          alt="HOD BCA" 
          className="hod-img" 
        />
        <div>
          <h3>Dr. Alok Sharma</h3>
          <p className="hod-title">HOD - Computer Science Department</p>
          <p className="hod-desc">"Focus on practical lab coding, algorithmic logic, and consistent project building."</p>
        </div>
      </div>

    </div>
  );
};

export default BcaPage;