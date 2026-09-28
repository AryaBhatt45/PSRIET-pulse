import React from 'react';
import { Link } from 'react-router-dom';
import './style/bca.css';

const BcaPage = () => {
  const semesters = [
    { sem: 'Sem 1', subjects: 'C Programming, Computer Fundamentals, Basic Math', syllabusPdf: '/syllabus/sem1-syllabus.pdf' },
    { sem: 'Sem 2', subjects: 'C++, Web Designing (HTML/CSS/JS), Digital Electronics', syllabusPdf: '/syllabus/sem2-syllabus.pdf' },
    { sem: 'Sem 3', subjects: 'Data Structures (DSA), Python OOPs, DBMS & SQL', syllabusPdf: '/syllabus/sem3-syllabus.pdf' },
    { sem: 'Sem 4', subjects: 'Advanced Java, Software Engineering, Computer Networks', syllabusPdf: '/syllabus/sem4-syllabus.pdf' },
    { sem: 'Sem 5', subjects: 'Full-Stack Development (MERN), Cyber Security', syllabusPdf: '/syllabus/sem5-syllabus.pdf' },
    { sem: 'Sem 6', subjects: 'Cloud Computing, Major Live Project, AI Basics', syllabusPdf: '/syllabus/sem6-syllabus.pdf' }
  ];

  const gloryStudents = [
    { name: 'Rahul Sharma', achievement: 'Won State Level Hackathon 2025', image: '/student1.jpg' },
    { name: 'Priya Verma', achievement: 'Google DSC Lead & Full Stack Dev', image: '/student2.jpg' },
    { name: 'Aman Gupta', achievement: 'Secured 1st Rank in Major Project', image: '/student3.jpg' },
    { name: 'Neha Singh', achievement: 'AI Research Paper Published', image: '/student4.jpg' }
  ];
  const announcements = [
    "📢 BCA Admission Last Date: 15th July 2026",
    "💡 National Scholarship Portal (NSP) Form submission open - Apply Now!",
    "📝 Semester Back Exam Form filling started - Submit before 30th June",
    "🚀 New Practical Lab Sessions scheduled for odd semesters."
  ];

  return (
    <div className="bca-dashboard-theme">

      {/* Top Bar */}
      <div className="bca-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge-pill">Department of Computer Applications</span>
      </div>

      {/* Clean Dashboard-Style Hero Section */}
      <div className="bca-hero-dashboard">
        <div className="bca-hero-left">
          <span className="hero-tag">ACADEMIC EXCELLENCE</span>
          <h1>Bachelor of Computer Applications (BCA)</h1>
          <p>Master programming, full-stack software development, and modern technologies with a structured 3-year curriculum.</p>
          <div className="bca-meta-tags">
            <span>⏳ 3 Years</span>
            <span>🪑 60 Seats</span>
            <span>💰 ₹35,000 / Year</span>
          </div>
        </div>
        <div className="bca-hero-right">
          <img src="/logo.png" alt="BCA Logo" className="bca-hero-logo" />
        </div>
      </div>
      {/* Important Information Infinite Ticker */}
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
      {/* Semesters, Notes & Syllabus Section */}
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
                <a href="/result-dummy" className="bca-btn result-l">Result</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Glory Infinite Slider Section with Student Photos */}
      <div className="bca-section glory-wrapper">
        <div className="bca-section-header text-center">
          <span className="section-badge">🏆 GLORY & ACHIEVEMENTS</span>
          <h2>Student Hall of Fame</h2>
        </div>

        <div className="infinite-slider-container">
          <div className="infinite-track">
            {/* Loop 2 times for seamless infinite effect */}
            {[...gloryStudents, ...gloryStudents].map((student, idx) => (
              <div key={idx} className="glory-card-light">
                <img src={student.image} alt={student.name} className="glory-avatar" />
                <div className="glory-text">
                  <h3>{student.name}</h3>
                  <p>{student.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HOD Profile */}
      <div className="bca-hod-card-light">
        <img src="/nilesh.jpg" className="hod-img-light" alt="HOD" />
        <div>
          <h3>Pradeep Pandey</h3>
          <p className="hod-title-light">HOD - Computer Science Department</p>
          <p className="hod-desc-light">"Focus on practical lab coding, algorithmic logic, and consistent project building."</p>
        </div>
      </div>

    </div>
  );
};

export default BcaPage;