import React from 'react';
import { Link } from 'react-router-dom';
import './style/bca.css';

const LlbPage = () => {
  const semesters = [
    { sem: 'Sem 1', subjects: 'Constitutional Law I, Law of Contract I, Law of Torts & Consumer Protection, Jurisprudence I', syllabusPdf: '/syllabus/llb-sem1-syllabus.pdf' },
    { sem: 'Sem 2', subjects: 'Constitutional Law II, Special Contract, Family Law I (Hindu Law), Law of Crimes I (IPC)', syllabusPdf: '/syllabus/llb-sem2-syllabus.pdf' },
    { sem: 'Sem 3', subjects: 'Family Law II (Muslim Law), Criminal Procedure Code (CrPC), Property Law & Easements, Public International Law', syllabusPdf: '/syllabus/llb-sem3-syllabus.pdf' },
    { sem: 'Sem 4', subjects: 'Civil Procedure Code (CPC) & Limitation Act, Law of Evidence, Administrative Law, Labour Laws I', syllabusPdf: '/syllabus/llb-sem4-syllabus.pdf' },
    { sem: 'Sem 5', subjects: 'Company Law, Environmental Law, Professional Ethics & Bar-Bench Relations, Intellectual Property Laws (IPR)', syllabusPdf: '/syllabus/llb-sem5-syllabus.pdf' },
    { sem: 'Sem 6', subjects: 'Moot Court Exercise & Internship, Drafting Pleading & Conveyance, Alternative Dispute Resolution (ADR), Human Rights Law', syllabusPdf: '/syllabus/llb-sem6-syllabus.pdf' }
  ];

  const gloryStudents = [
    { name: 'Aditi Mishra', achievement: 'Cleared UP Judicial Services (PCS-J) Prelims', image: '/student1.jpg' },
    { name: 'Rohan Srivastava', achievement: 'Winner - National Inter-College Moot Court Trial', image: '/student2.jpg' },
    { name: 'Harshit Saxena', achievement: 'Advocate Trainee at High Court Bar Association', image: '/student3.jpg' },
    { name: 'Priya Bajpai', achievement: 'Published Research Paper on Cyber Jurisprudence', image: '/student4.jpg' }
  ];

  const announcements = [
    "📢 LL.B 3-Year Admission Open for Session 2026-29",
    "⚖️ Inter-College National Moot Court Competition registrations are live.",
    "💡 Bar Council of India (BCI) student verification portal active.",
    "📝 Back Exam Form & Practical File submission deadline: 15th July."
  ];

  return (
    <div className="bca-dashboard-theme">

      {/* Top Bar */}
      <div className="bca-top-bar">
        <Link to="/" className="back-dash-btn">← Back to Dashboard</Link>
        <span className="badge-pill">Faculty of Law</span>
      </div>

      {/* Clean Dashboard-Style Hero Section */}
      <div className="bca-hero-dashboard">
        <div className="bca-hero-left">
          <span className="hero-tag">ACADEMIC EXCELLENCE</span>
          <h1>Bachelor of Laws (LL.B)</h1>
          <p>Gain comprehensive legal expertise in constitutional justice, corporate litigation, criminal procedures, and courtroom advocacy.</p>
          <div className="bca-meta-tags">
            <span>⏳ 3 Years</span>
            <span>🪑 60 Seats</span>
            <span>💰 ₹30,000 / Year</span>
          </div>
        </div>
        <div className="bca-hero-right">
          <img src="/logo.png" alt="LLB Logo" className="bca-hero-logo" />
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
          <h3>Prof. Om Prakash Upadhyay</h3>
          <p className="hod-title-light">Dean & HOD - Faculty of Law</p>
          <p className="hod-desc-light">"Instilling constitutional values, critical legal reasoning, and ethical advocacy in our future jurists."</p>
        </div>
      </div>

    </div>
  );
};

export default LlbPage;