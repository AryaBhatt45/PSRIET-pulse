import React from 'react';
import { Link } from 'react-router-dom';
import './style/bca.css';

const BscPage = () => {
  const semesters = [
    { sem: 'Sem 1', subjects: 'Mechanics & Wave Motion, Calculus, Fundamentals of Chemistry', syllabusPdf: '/syllabus/bsc-sem1-syllabus.pdf' },
    { sem: 'Sem 2', subjects: 'Thermal Physics & Semiconductors, Matrices & Differential Equations, Bio-organic Chemistry', syllabusPdf: '/syllabus/bsc-sem2-syllabus.pdf' },
    { sem: 'Sem 3', subjects: 'Electromagnetic Theory & Optics, Algebra, Chemical Dynamics', syllabusPdf: '/syllabus/bsc-sem3-syllabus.pdf' },
    { sem: 'Sem 4', subjects: 'Modern Physics, Differential Equations & Mechanics, Analytical Techniques', syllabusPdf: '/syllabus/bsc-sem4-syllabus.pdf' },
    { sem: 'Sem 5', subjects: 'Quantum Mechanics & Spectroscopy, Real Analysis, Organic Synthesis', syllabusPdf: '/syllabus/bsc-sem5-syllabus.pdf' },
    { sem: 'Sem 6', subjects: 'Solid State & Nuclear Physics, Numerical Analysis, Instrumental Chemical Analysis', syllabusPdf: '/syllabus/bsc-sem6-syllabus.pdf' }
  ];

  const gloryStudents = [
    { name: 'Kavita Joshi', achievement: 'IIT JAM Qualified AIR 312', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Suraj Tiwari', achievement: 'University Gold Medalist in Physics', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Ananya Bajpai', achievement: 'Selected for BARC Summer Internship', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80' },
    { name: 'Deepak Shukla', achievement: 'State Science Fair 1st Prize Winner', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80' }
  ];

  const announcements = [
    "📢 B.Sc Admission 2026: Online Registrations Open",
    "🔬 Physics & Chemistry practical batches schedule announced",
    "📝 Back Paper examination dates released for 2nd & 4th semesters",
    "💡 Inter-college Science Model competition on 22nd October."
  ];

  return (
    <div className="bca-dashboard-theme">
      <div className="bca-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge-pill">Faculty of Science</span>
      </div>

      <div className="bca-hero-dashboard">
        <div className="bca-hero-left">
          <span className="hero-tag">ACADEMIC EXCELLENCE</span>
          <h1>Bachelor of Science (B.Sc - PCM)</h1>
          <p>Explore empirical experimentation, pure physics, advanced calculus, and experimental chemical laboratories.</p>
          <div className="bca-meta-tags">
            <span>⏳ 3 Years</span>
            <span>🪑 120 Seats</span>
            <span>💰 ₹18,000 / Year</span>
          </div>
        </div>
        <div className="bca-hero-right">
          <img src="/logo.png" alt="B.Sc Logo" className="bca-hero-logo" />
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
          <h3>Dr. Rajesh K. Pathak</h3>
          <p className="hod-title-light">Dean & HOD - Science Department</p>
          <p className="hod-desc-light">"Nurturing analytical intuition through rigorous lab investigations and fundamental science."</p>
        </div>
      </div>
    </div>
  );
};

export default BscPage;