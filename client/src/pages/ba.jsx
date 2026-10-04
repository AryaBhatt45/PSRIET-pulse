import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/bca.css';

const BaPage = () => {
  // Toggle state to remember open/close per semester
  const [openSem, setOpenSem] = useState({});

  const toggleSemester = (index) => {
    setOpenSem((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const semesters = [
    {
      sem: 'Sem 1',
      summary: 'History of Ancient India, Hindi Literature (Kavya), Political Theory, Sociology Basics',
      subjectList: [
        { name: 'History of Ancient India', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem1-syllabus.pdf' },
        { name: 'Hindi Literature (Kavya)', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem1-syllabus.pdf' },
        { name: 'Political Theory', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem1-syllabus.pdf' },
        { name: 'Sociology Basics', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem1-syllabus.pdf' }
      ]
    },
    {
      sem: 'Sem 2',
      summary: 'Medieval Indian History, Hindi Prose, Indian Government & Politics, Indian Society',
      subjectList: [
        { name: 'Medieval Indian History', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem2-syllabus.pdf' },
        { name: 'Modern Hindi Prose', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem2-syllabus.pdf' },
        { name: 'Indian Government & Politics', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem2-syllabus.pdf' },
        { name: 'Indian Society & Structure', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem2-syllabus.pdf' }
      ]
    },
    {
      sem: 'Sem 3',
      summary: 'Modern Indian History, Public Administration, Social Research Methods, Regional Geography',
      subjectList: [
        { name: 'Modern Indian History', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem3-syllabus.pdf' },
        { name: 'Public Administration', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem3-syllabus.pdf' },
        { name: 'Social Thought & Research', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem3-syllabus.pdf' },
        { name: 'Human & Regional Geography', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem3-syllabus.pdf' }
      ]
    },
    {
      sem: 'Sem 4',
      summary: 'History of Modern World, International Relations, Social Stratification, Environmental Studies',
      subjectList: [
        { name: 'Modern World History', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem4-syllabus.pdf' },
        { name: 'International Relations', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem4-syllabus.pdf' },
        { name: 'Social Stratification & Change', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem4-syllabus.pdf' },
        { name: 'Environmental Studies', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem4-syllabus.pdf' }
      ]
    },
    {
      sem: 'Sem 5',
      summary: 'Indian National Movement, Comparative Politics, Classical Sociological Theories, Human Rights',
      subjectList: [
        { name: 'Indian National Movement', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem5-syllabus.pdf' },
        { name: 'Comparative Politics', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem5-syllabus.pdf' },
        { name: 'Sociological Thinkers', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem5-syllabus.pdf' },
        { name: 'Human Rights & Duties', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem5-syllabus.pdf' }
      ]
    },
    {
      sem: 'Sem 6',
      summary: 'Contemporary Global Politics, Applied Sociology, Project Viva-Voce, Philosophy of Religion',
      subjectList: [
        { name: 'Contemporary Global Politics', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem6-syllabus.pdf' },
        { name: 'Applied Sociology & Fieldwork', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem6-syllabus.pdf' },
        { name: 'Philosophy & Ethics', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem6-syllabus.pdf' },
        { name: 'Comprehensive Academic Viva', notes: '#notes', quickNotes: '#quick', syllabus: '/syllabus/ba-sem6-syllabus.pdf' }
      ]
    }
  ];

  const gloryStudents = [
    { name: 'Arvind Yadav', achievement: 'Cleared UPPSC PCS Prelims on 1st Attempt', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Monika Tiwari', achievement: 'Gold Medalist - University Debate Championship', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Alok Nath Pandey', achievement: 'Selected as Sub-Inspector (UP Police)', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Ritu Srivastava', achievement: 'Published Poetry Anthology in Hindi Academy', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80' }
  ];

  const announcements = [
    "📢 B.A Admission Open for Academic Session 2026-27",
    "📚 Annual Seminar on Indian History & Literature scheduled for next month",
    "💡 National Scholarship Portal (NSP) form verification counter active",
    "📝 Examination Back Paper forms submission last date: 30th June"
  ];

  return (
    <div className="bca-dashboard-theme">
      {/* Top Bar */}
      <div className="bca-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge-pill">Faculty of Arts & Humanities</span>
      </div>

      {/* Hero Section with Larger Logo */}
      <div className="bca-hero-dashboard">
        <div className="bca-hero-left">
          <span className="hero-tag">ACADEMIC EXCELLENCE</span>
          <h1>Bachelor of Arts (B.A)</h1>
          <p>Gain comprehensive critical thinking, social insights, and literary appreciation through a structured 3-year multidisciplinary curriculum.</p>
          <div className="bca-meta-tags">
            <span>⏳ 3 Years</span>
            <span>🪑 150 Seats</span>
            <span>💰 ₹10,000 / Year</span>
          </div>
        </div>
        <div className="bca-hero-right">
          <img src="/logo.png" alt="College Logo" className="bca-hero-logo" />
        </div>
      </div>

      {/* Continuously Moving Important Updates Ticker Tape */}
      <div className="important-ticker-wrapper">
        <div className="ticker-label">🚨 IMPORTANT UPDATES</div>
        <div className="ticker-container">
          <div className="ticker-track">
            {[...announcements, ...announcements, ...announcements].map((item, idx) => (
              <span key={idx} className="ticker-item">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Semester Curriculum Grid with Interactive Accordions */}
      <div className="bca-section">
        <div className="bca-section-header">
          <span className="section-badge">🚀 ROADMAP</span>
          <h2>Semester-wise Curriculum & Notes</h2>
        </div>
        <div className="bca-sem-grid">
          {semesters.map((item, index) => {
            const isOpen = !!openSem[index];
            return (
              <div key={index} className="bca-sem-card-light">
                <div className="card-top">
                  <h3>{item.sem}</h3>
                  <span className="active-dot"></span>
                </div>
                <p className="sem-subjects">{item.summary}</p>

                {/* Hide / View Subjects Toggle Button with Smooth Hover */}
                <button
                  type="button"
                  className="toggle-subjects-btn"
                  onClick={() => toggleSemester(index)}
                >
                  <span>{isOpen ? 'Hide Subjects' : 'View Subjects'}</span>
                  <span>{isOpen ? '▲' : '▼'}</span>
                </button>

                {/* Expanded Subjects List with Individual Subject Action Buttons */}
                {isOpen && (
                  <div className="subjects-expanded-list">
                    {item.subjectList.map((subject, subIdx) => (
                      <div key={subIdx} className="subject-item-box">
                        <h4>{subject.name}</h4>
                        <div className="bca-links">
                          <a href={subject.notes} className="bca-btn notes-l">Notes</a>
                          <a href={subject.quickNotes} className="bca-btn quick-l">Quick Notes ✨</a>
                          <a href={subject.syllabus} target="_blank" rel="noopener noreferrer" className="bca-btn syllabus-l">Syllabus PDF</a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Hall of Fame Continuous Slider */}
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

      {/* HOD Profile Card */}
      <div className="bca-hod-card-light">
        <img src="/hod.jpg" className="hod-img-light" alt="HOD" />
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