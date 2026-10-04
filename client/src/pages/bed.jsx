import React from 'react';
import { Link } from 'react-router-dom';
import './style/bca.css';

const BedPage = () => {
  const semesters = [
    { sem: 'Sem 1', subjects: 'Childhood and Growing Up, Contemporary India & Education, Language Across Curriculum, ICT', syllabusPdf: '/syllabus/bed-sem1-syllabus.pdf' },
    { sem: 'Sem 2', subjects: 'Learning & Teaching, Pedagogy of School Subject 1 & 2, Drama & Art in Education', syllabusPdf: '/syllabus/bed-sem2-syllabus.pdf' },
    { sem: 'Sem 3', subjects: 'School Internship (16 Weeks), Micro Teaching Competency, Preparation of TLM', syllabusPdf: '/syllabus/bed-sem3-syllabus.pdf' },
    { sem: 'Sem 4', subjects: 'Gender School & Society, Creating an Inclusive School, Assessment for Learning', syllabusPdf: '/syllabus/bed-sem4-syllabus.pdf' }
  ];

  const gloryStudents = [
    { name: 'Meenakshi Dubey', achievement: 'Selected as Primary Teacher in Super TET (Rank 14)', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Sanjay Kumar', achievement: 'Qualified CTET Both Papers with 132/150 Score', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Vandana Shukla', achievement: 'Best Student Teacher - State Micro-teaching Camp', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Gaurav Tripathi', achievement: 'Selected in KVS TGT Recruitment Exam', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80' }
  ];

  const announcements = [
    "📢 B.Ed Session 2026-28 Counseling & Direct Admissions Open",
    "📋 School Teaching Internship (16 Weeks) list published for Sem 3",
    "💡 CTET / UPTET special pedagogical workshop every Sunday",
    "📝 Practical file & micro-teaching lesson plan submission dates."
  ];

  return (
    <div className="bca-dashboard-theme">
      <div className="bca-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge-pill">Faculty of Education</span>
      </div>

      <div className="bca-hero-dashboard">
        <div className="bca-hero-left">
          <span className="hero-tag">ACADEMIC EXCELLENCE</span>
          <h1>Bachelor of Education (B.Ed)</h1>
          <p>Equip yourself with progressive pedagogical psychology, classroom administration, and interactive teaching skills.</p>
          <div className="bca-meta-tags">
            <span>⏳ 2 Years</span>
            <span>🪑 100 Seats</span>
            <span>💰 ₹51,250 / Year</span>
          </div>
        </div>
        <div className="bca-hero-right">
          <img src="/logo.png" alt="B.Ed Logo" className="bca-hero-logo" />
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
          <h3>Dr. Anupama Mishra</h3>
          <p className="hod-title-light">Dean & HOD - Department of Education</p>
          <p className="hod-desc-light">"Transforming passionate scholars into inspiring, empathetic, and innovative educators."</p>
        </div>
      </div>
    </div>
  );
};

export default BedPage;