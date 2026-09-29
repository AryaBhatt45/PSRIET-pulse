import React from 'react';
import { Link } from 'react-router-dom';
import './style/bca.css';

const DeledPage = () => {
  const semesters = [
    { sem: 'Sem 1', subjects: 'Child Development & Learning Process, Teaching Learning Principles, Hindi, Social Science, Science & Math Teaching', syllabusPdf: '/syllabus/deled-sem1-syllabus.pdf' },
    { sem: 'Sem 2', subjects: 'Current Indian Society & Primary Education, Elementary Education Approaches, English Teaching, Social Studies', syllabusPdf: '/syllabus/deled-sem2-syllabus.pdf' },
    { sem: 'Sem 3', subjects: 'Educational Evaluation & School Management, Inclusive Education, Sanskrit/Urdu, Practical Teaching Internship', syllabusPdf: '/syllabus/deled-sem3-syllabus.pdf' },
    { sem: 'Sem 4', subjects: 'Development of Language & Math at Initial Level, Educational Management & Admin, Peace Education, Final Teaching Viva', syllabusPdf: '/syllabus/deled-sem4-syllabus.pdf' }
  ];

  const gloryStudents = [
    { name: 'Kavita Maurya', achievement: 'Cleared UPTET & CTET with High Merit Score', image: '/student1.jpg' },
    { name: 'Sanjay Rawat', achievement: 'Appointed Assistant Teacher in Basic Parishad', image: '/student2.jpg' },
    { name: 'Deepika Sen', achievement: 'District Topper in D.El.Ed Final Year Exams', image: '/student3.jpg' },
    { name: 'Gaurav Dubey', achievement: 'Special Recognition in Child Pedagogy Model', image: '/student4.jpg' }
  ];

  const announcements = [
    "📢 D.El.Ed Admission Open for Academic Session 2026-28",
    "🏫 Primary School Teaching Practice (Internship) starts from 1st of next month.",
    "💡 UP Scholarship / Fee Reimbursement form submission online.",
    "📝 Lesson Plan File & TLM Project submission deadline: 25th July."
  ];

  return (
    <div className="bca-dashboard-theme">

      {/* Top Bar */}
      <div className="bca-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge-pill">Department of Elementary Education</span>
      </div>

      {/* Clean Dashboard-Style Hero Section */}
      <div className="bca-hero-dashboard">
        <div className="bca-hero-left">
          <span className="hero-tag">ACADEMIC EXCELLENCE</span>
          <h1>Diploma in Elementary Education (D.El.Ed)</h1>
          <p>Professional training in child development psychology, foundational learning pedagogies, and primary education practice.</p>
          <div className="bca-meta-tags">
            <span>⏳ 2 Years</span>
            <span>🪑 50 Seats</span>
            <span>💰 ₹41,000 / Year</span>
          </div>
        </div>
        <div className="bca-hero-right">
          <img src="/logo.png" alt="D.El.Ed Logo" className="bca-hero-logo" />
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
          <h3>Prof. Vinay Kumar Pathak</h3>
          <p className="hod-title-light">HOD - Elementary Education</p>
          <p className="hod-desc-light">"Dedicated to nurturing empathetic educators with innovative classroom teaching methods."</p>
        </div>
      </div>

    </div>
  );
};

export default DeledPage;