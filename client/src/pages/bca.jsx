import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/bca.css'; // agar CSS file hai toh

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
  const [jobList, setJobList] = useState([
    {
      id: 1,
      title: "Junior Software Engineer",
      company: "Tata Consultancy Services (TCS)",
      package: "3.6 - 4.5 LPA",
      location: "Noida / Remote",
      deadline: "15 July 2026",
      applyLink: "https://www.tcs.com/careers"
    },
    {
      id: 2,
      title: "React Developer Intern",
      company: "Tech Mahindra",
      package: "25,000 / month",
      location: "Bangalore",
      deadline: "20 July 2026",
      applyLink: "https://www.techmahindra.com/careers"
    },
    {
      id: 3,
      title: "Associate System Engineer",
      company: "Wipro",
      package: "3.5 LPA",
      location: "Hyderabad",
      deadline: "25 July 2026",
      applyLink: "https://careers.wipro.com"
    }
  ]);

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
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* --- LIVE JOB OPPORTUNITIES TICKER SECTION --- */}
      <div style={{ background: '#ffffff', borderRadius: '16px', padding: '25px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid #e2e8f0', marginBottom: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h3 style={{ margin: 0, color: '#0f172a', fontSize: '1.2rem', fontWeight: '700' }}>🚀 Live Job & Internship Openings</h3>
          <span style={{ background: '#dcfce7', color: '#15803d', fontSize: '0.75rem', fontWeight: '700', padding: '4px 10px', borderRadius: '20px' }}>Updated Daily</span>
        </div>
        <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '20px' }}>Exclusive placement and internship opportunities for final year and passed-out BCA students.</p>

        {/* Moving / Scrolling Container */}
        <div className="job-ticker-wrapper" style={{ overflow: 'hidden', height: '220px', position: 'relative' }}>
          <div className="job-ticker-track">
            {jobList.map((job) => (
              <div key={job.id} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px 20px', marginBottom: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.3s' }}>
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: '700', color: '#2563eb', background: '#eff6ff', padding: '2px 8px', borderRadius: '4px' }}>{job.company}</span>
                  <h4 style={{ margin: '6px 0 4px 0', color: '#0f172a', fontSize: '1.05rem' }}>{job.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>💰 {job.package} &nbsp;|&nbsp; 📍 {job.location} &nbsp;|&nbsp; ⏳ Apply by: {job.deadline}</p>
                </div>
                <div>
                  <a
                    href={job.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: '#2563eb', color: '#ffffff', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '650', display: 'inline-block', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)' }}
                  >
                    Apply Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* --- END JOB TICKER --- */}


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
          <h3>Pradeep Pandey</h3>
          <p className="hod-title-light">HOD - Computer Science Department</p>
          <p className="hod-desc-light">"Focus on practical lab coding, algorithmic logic, and consistent project building."</p>
        </div>
      </div>

    </div>
  );
};

export default BcaPage;