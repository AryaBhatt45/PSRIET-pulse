import React from 'react';
import { Link } from 'react-router-dom';
import './style/llb.css'; // LLB ki apni CSS file

const LlbPage = () => {
  return (
    <div className="llb-unique-page">
      
      {/* Top Bar */}
      <div className="llb-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge">Department of Legal Studies</span>
      </div>

      {/* Hero Banner */}
      <div className="llb-hero">
        <span className="llb-icon">⚖️</span>
        <h1>Bachelor of Laws (LLB)</h1>
        <p>Master constitutional law, criminal jurisprudence, corporate legal frameworks, and advocacy skills through an intensive 3-year curriculum.</p>
        <div className="llb-meta-tags">
          <span>⏳ 3 Years (6 Semesters)</span>
          <span>🪑 60 Seats</span>
          <span>💰 ₹50,000 / Year</span>
        </div>
      </div>

      {/* Semesters & Notes Section */}
      <div className="llb-section">
        <h2>📚 Semester-wise Notes, Syllabus & Results</h2>
        <div className="llb-sem-grid">
          {['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'].map((sem, index) => (
            <div key={index} className="llb-sem-card">
              <h3>{sem}</h3>
              <div className="llb-links">
                <a href="#notes" className="llb-btn notes">Notes</a>
                <a href="#syllabus" className="llb-btn syllabus">Syllabus</a>
                <a href="#result" className="llb-btn result">Result</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HOD Profile */}
      <div className="llb-hod-card">
        <img 
          src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60" 
          alt="HOD LLB" 
          className="hod-img" 
        />
        <div>
          <h3>Adv. Vikramaditya Singh</h3>
          <p className="hod-title">HOD - Faculty of Law</p>
          <p className="hod-desc">"Upholding justice, mastering statutory interpretation, and fostering ethical courtroom advocacy."</p>
        </div>
      </div>

    </div>
  );
};

export default LlbPage;