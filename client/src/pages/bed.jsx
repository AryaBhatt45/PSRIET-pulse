import React from 'react';
import { Link } from 'react-router-dom';
import './style/bca.css';

const BedPage = () => {
  const semesters = [
    { sem: 'Sem 1', subjects: 'Childhood and Growing Up, Contemporary India and Education, Language Across Curriculum, EPC-1', syllabusPdf: '/syllabus/bed-sem1-syllabus.pdf' },
    { sem: 'Sem 2', subjects: 'Learning and Teaching, Pedagogy of School Subjects (Part I & II), Knowledge and Curriculum, EPC-2', syllabusPdf: '/syllabus/bed-sem2-syllabus.pdf' },
    { sem: 'Sem 3', subjects: 'School Internship (16 Weeks Field Work), Practical Teaching Competency, Lesson Planning Viva', syllabusPdf: '/syllabus/bed-sem3-syllabus.pdf' },
    { sem: 'Sem 4', subjects: 'Gender School and Society, Creating an Inclusive School, Assessment for Learning, Environmental Education', syllabusPdf: '/syllabus/bed-sem4-syllabus.pdf' }
  ];

  const gloryStudents = [
    { name: 'Ritu Tiwari', achievement: 'Cleared CTET with 128 Marks in 1st Attempt', image: '/student1.jpg' },
    { name: 'Alok Nath', achievement: 'Selected as Primary Teacher (UP Govt)', image: '/student2.jpg' },
    { name: 'Sunita Yadav', achievement: 'Gold Medalist in B.Ed University Exams', image: '/student3.jpg' },
    { name: 'Mohit Mishra', achievement: 'Best Student Teacher Award 2025', image: '/student4.jpg' }
  ];

  const announcements = [
    "📢 B.Ed Admission Open for Session 2026-28",
    "🏫 16-Week School Teaching Internship begins next month for Sem 3.",
    "💡 National Scholarship Portal (NSP) Form submission open - Apply Now!",
    "📝 Practical File and Lesson Plan submission date announced."
  ];

  return (
    <div className="bca-dashboard-theme">

      {/* Top Bar */}
      <div className="bca-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge-pill">Department of Teacher Education</span>
      </div>

      {/* Clean Dashboard-Style Hero Section */}
      <div className="bca-hero-dashboard">
        <div className="bca-hero-left">
          <span className="hero-tag">ACADEMIC EXCELLENCE</span>
          <h1>Bachelor of Education (B.Ed)</h1>
          <p>Master modern pedagogical techniques, educational psychology, and classroom leadership with a professional 2-year NCTE curriculum.</p>
          <div className="bca-meta-tags">
            <span>⏳ 2 Years</span>
            <span>🪑 100 Seats</span>
            <span>💰 ₹35,000 / Year</span>
          </div>
        </div>
        <div className="bca-hero-right">
          <img src="/logo.png" alt="B.Ed Logo" className="bca-hero-logo" />
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
          <h3>Dr. Anupama Srivastava</h3>
          <p className="hod-title-light">HOD - Department of Education</p>
          <p className="hod-desc-light">"Shaping future nation builders with ethics, practical micro-teaching, and holistic child development."</p>
        </div>
      </div>

    </div>
  );
};

export default BedPage;