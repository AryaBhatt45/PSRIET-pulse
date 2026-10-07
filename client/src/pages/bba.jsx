import React from 'react';
import { Link } from 'react-router-dom';
import './style/bca.css';

const BbaPage = () => {
  const semesters = [
    { sem: 'Sem 1', subjects: 'Principles of Management, Business Economics, Business Communication, Accounting', syllabusPdf: '/syllabus/BBA sem 1 .pdf' },
    { sem: 'Sem 2', subjects: 'Organizational Behavior, Business Statistics, Marketing Management, Business Law', syllabusPdf: '/syllabus/BBA 2 sem .pdf' },
    { sem: 'Sem 3', subjects: 'Human Resource Management, Cost & Management Accounting, Business Environment', syllabusPdf: '/syllabus/bba-sem3-syllabus.pdf' },
    { sem: 'Sem 4', subjects: 'Financial Management, Research Methodology, Indian Banking System, Company Law', syllabusPdf: '/syllabus/bba-sem4-syllabus.pdf' },
    { sem: 'Sem 5', subjects: 'Entrepreneurship Development, Strategic Management, Income Tax Law', syllabusPdf: '/syllabus/bba-sem5-syllabus.pdf' },
    { sem: 'Sem 6', subjects: 'International Business, Project Management & Viva, Business Ethics', syllabusPdf: '/syllabus/bba-sem6-syllabus.pdf' }
  ];

  const gloryStudents = [
    { name: 'Rishabh Soni', achievement: 'Placed at Deloitte with ₹8.5 LPA Package', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Shreya Saxena', achievement: 'Winner - National B-Plan Startup Pitch', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Nikhil Chauhan', achievement: 'Selected for IIM Indore MDP Summer Session', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Pooja Agarwal', achievement: 'Founded Campus Social Entrepreneurship Cell', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80' }
  ];

  const announcements = [
    "📢 BBA Summer Internship Placement Drive Starting Soon",
    "💼 Corporate Guest Lecture by Industry Experts on Friday",
    "📈 B-School Case Study Competition registrations open",
    "📝 4th & 6th Sem Viva-Voce Presentation timetable released."
  ];

  return (
    <div className="bca-dashboard-theme">
      <div className="bca-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge-pill">Department of Management Studies</span>
      </div>

      <div className="bca-hero-dashboard">
        <div className="bca-hero-left">
          <span className="hero-tag">ACADEMIC EXCELLENCE</span>
          <h1>Bachelor of Business Administration (BBA)</h1>
          <p>Develop leadership acumen, strategic financial planning, corporate communication, and startup agility.</p>
          <div className="bca-meta-tags">
            <span>⏳ 3 Years</span>
            <span>🪑 60 Seats</span>
            <span>💰 ₹32,000 / Year</span>
          </div>
        </div>
        <div className="bca-hero-right">
          <img src="/logo.png" alt="BBA Logo" className="bca-hero-logo" />
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
        <div className="bca-sem-grid">
          {semesters.map((item, index) => (
            <div key={index} className="bca-sem-card-light">
              <div className="card-top">
                <h3>{item.sem}</h3>
                <span className="active-dot"></span>
              </div>
              <p className="sem-subjects">{item.subjects}</p>
              <div className="bca-links">
                <a href="#notes" className="bca-btn notes-l">Notes</a>
                <a href="#quick-notes" className="bca-btn quick-l">Quick Notes ✨</a>
                <a href={item.syllabusPdf} target="_blank" rel="noopener noreferrer" className="bca-btn syllabus-l">Syllabus PDF</a>
              </div>
            </div>
          ))}
        </div>
      </div>

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
          <h3>Prof. Alok Ranjan Verma</h3>
          <p className="hod-title-light">HOD - Business Administration</p>
          <p className="hod-desc-light">"Preparing resilient young leaders capable of handling modern competitive business ecosystems."</p>
        </div>
      </div>
    </div>
  );
};

export default BbaPage;