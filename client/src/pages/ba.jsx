import React from 'react';
import { Link } from 'react-router-dom';
import './style/bca.css';

const BaPage = () => {
  const semesters = [
    { sem: 'Sem 1', subjects: 'Hindi Sahitya, Ancient History, Political Theory, English Language', syllabusPdf: '/syllabus/ba-sem1-syllabus.pdf' },
    { sem: 'Sem 2', subjects: 'Modern Hindi Poetry, Medieval Indian History, Indian Government & Politics', syllabusPdf: '/syllabus/ba-sem2-syllabus.pdf' },
    { sem: 'Sem 3', subjects: 'Sociology Concepts, Modern World History, Public Administration, Geography', syllabusPdf: '/syllabus/ba-sem3-syllabus.pdf' },
    { sem: 'Sem 4', subjects: 'Indian Society & Structure, Comparative Government, Environmental Studies', syllabusPdf: '/syllabus/ba-sem4-syllabus.pdf' },
    { sem: 'Sem 5', subjects: 'Major Elective I, Human Rights, International Relations, Regional Geography', syllabusPdf: '/syllabus/ba-sem5-syllabus.pdf' },
    { sem: 'Sem 6', subjects: 'Major Elective II, Social Research Methods, Field Work & Comprehensive Viva', syllabusPdf: '/syllabus/ba-sem6-syllabus.pdf' }
  ];

  const gloryStudents = [
    { name: 'Arvind Yadav', achievement: 'Cleared UPPSC PCS Prelims on 1st Attempt', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Monika Tiwari', achievement: 'Gold Medalist - University Debate Championship', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Alok Nath Pandey', achievement: 'Selected as Sub-Inspector (UP Police)', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Ritu Srivastava', achievement: 'Published Poetry Anthology in Hindi Academy', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80' }
  ];

  const announcements = [
    "📢 B.A. (Bachelor of Arts) Admissions Active for 2026 Session",
    "📖 Special Civil Services Foundation Guidance Cell meeting this Saturday",
    "📝 Internal assignment submission notice for Semester 2, 4 & 6",
    "🎭 Annual Cultural & Literary Inter-College Fest registrations open."
  ];

  return (
    <div className="bca-dashboard-theme">
      <div className="bca-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge-pill">Faculty of Arts & Humanities</span>
      </div>

      <div className="bca-hero-dashboard">
        <div className="bca-hero-left">
          <span className="hero-tag">ACADEMIC EXCELLENCE</span>
          <h1>Bachelor of Arts (B.A)</h1>
          <p>Explore history, languages, governance, sociological systems, and civil services analytical foundations.</p>
          <div className="bca-meta-tags">
            <span>⏳ 3 Years</span>
            <span>🪑 240 Seats</span>
            <span>💰 ₹10,000 / Year</span>
          </div>
        </div>
        <div className="bca-hero-right">
          <img src="/logo.png" alt="BA Logo" className="bca-hero-logo" />
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
          <h3>Prof. Mahendra Pratap Singh</h3>
          <p className="hod-title-light">Dean & HOD - Faculty of Arts</p>
          <p className="hod-desc-light">"Fostering civic consciousness, critical inquiry, and cultural wisdom in young minds."</p>
        </div>
      </div>
    </div>
  );
};

export default BaPage;