import React from 'react';
import { Link } from 'react-router-dom';
import CurriculumQuickAccess from '../components/CurriculumQuickAccess';
import CurriculumSemesterCards from '../components/CurriculumSemesterCards';
import './style/bca.css';

const DeledPage = () => {
  const semesters = [
    { sem: 'Sem 1', subjects: 'Bal Vikas evam Seekhne ki Prakriya, Shikshan Adhigam Siddhant, Vigyan, Ganit, Hindi', syllabusPdf: '/syllabus/deled-sem1-syllabus.pdf' },
    { sem: 'Sem 2', subjects: 'Vartaman Bhartiya Samaj aur Prathmik Shiksha, Naveen Prayas, English, Samajik Adhyayan', syllabusPdf: '/syllabus/deled-sem2-syllabus.pdf' },
    { sem: 'Sem 3', subjects: 'Shaikshik Mulyankan, Samaveshi Shiksha, Sanskrit/Urdu, Computer Shiksha, Internship', syllabusPdf: '/syllabus/deled-sem3-syllabus.pdf' },
    { sem: 'Sem 4', subjects: 'Aarambhik Shtar Bhasha evam Ganit Pathan, Shaikshik Prabandhan, Shanti Shiksha', syllabusPdf: '/syllabus/deled-sem4-syllabus.pdf' }
  ];

  const gloryStudents = [
    { name: 'Pooja Vishwakarma', achievement: '1st Rank in DIET District Elementary Exam', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Vinay Kumar Maurya', achievement: 'Selected as Primary Shikshak (69k Recruitment)', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Sadhana Pal', achievement: 'Awarded Best Interactive TLM Maker 2025', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Satyam Dwivedi', achievement: 'Qualified UPTET Primary Level with 128 Marks', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&h=200&q=80' }
  ];

  const announcements = [
    "📢 D.El.Ed (BTC) Session 2026 State Merit List & Admission Open",
    "🏫 30-Day Primary School Teaching Training starts next week",
    "📝 Internal Viva-voce and Action Research submission deadline",
    "💡 UPTET Primary Paper Crash Course batch announced."
  ];

  return (
    <div className="bca-dashboard-theme">
      <div className="bca-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge-pill">Department of Elementary Education</span>
      </div>

      <div className="bca-hero-dashboard">
        <div className="bca-hero-left">
          <span className="hero-tag">ACADEMIC EXCELLENCE</span>
          <h1>Diploma in Elementary Education (D.El.Ed / BTC)</h1>
          <p>Master primary childhood psychology, creative activity-based pedagogical techniques, and foundational literacy.</p>
          <div className="bca-meta-tags">
            <span>⏳ 2 Years</span>
            <span>🪑 50 Seats</span>
            <span>💰 ₹41,000 / Year</span>
          </div>
        </div>
        <div className="bca-hero-right">
          <img src="/logo.png" alt="DELED Logo" className="bca-hero-logo" />
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
        <CurriculumSemesterCards semesters={semesters} />
      </div>
      <CurriculumQuickAccess semesters={semesters} />

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
          <h3>Dr. Virendra Kumar Shukla</h3>
          <p className="hod-title-light">HOD - Elementary Education</p>
          <p className="hod-desc-light">"Building solid primary education foundations through interactive and loving pedagogy."</p>
        </div>
      </div>
    </div>
  );
};

export default DeledPage;