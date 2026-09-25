import React from 'react';
import './UpdatesList.css';

// 8 Important Updates data with dummy links/actions
const updates = [
  { id: '01', title: 'Admissions open for 2026-27 academic session', action: 'Apply now', link: '#admissions' },
  { id: '02', title: 'National Scholarship Scheme 2026 application window open', action: 'Apply now', link: '#scholarship' },
  { id: '03', title: 'Even Semester Exam Result 2025-26 declared', action: 'Check result', link: '#result-even' },
  { id: '04', title: 'Odd Semester Regular & Carry Over Result live', action: 'Check result', link: '#result-odd' },
  { id: '05', title: 'Semester examination and practical timetable released', action: 'View timetable', link: '#timetable' },
  { id: '06', title: 'Notes and previous year question papers available in portal', action: 'Open resources', link: '#resources' },
  { id: '07', title: 'Annual Sports Meet 2026 registration starting soon', action: 'Register', link: '#sports' },
  { id: '08', title: 'Campus Placement Drive by top tech companies next week', action: 'View details', link: '#placement' }
];

const UpdatesList = () => (
  <div className="updates-wrapper">
    {/* Updates Section */}
    <section className="updates-section" aria-labelledby="updates-heading">
      <div className="section-heading compact-heading">
        <div>
          <p className="eyebrow">Stay in the loop</p>
          <h2 id="updates-heading">Important updates & Notices</h2>
        </div>
        <span className="live-indicator"><i /> Live notices</span>
      </div>

      {/* Vertical Infinite Scrolling Ticker Container */}
      <div className="updates-ticker-container">
        <div className="updates-ticker-track">
          {[...updates, ...updates].map((item, index) => (
            <a className="update-item" href={item.link} key={`${item.id}-${index}`}>
              <span className="update-number">{item.id}</span>
              <span className="update-title">{item.title}</span>
              <span className="update-action">{item.action} <b>↗</b></span>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Manager's Desk Card Section */}
    <section className="manager-desk-section" aria-labelledby="manager-heading">
      <div className="manager-card">
        <div className="manager-img-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60" 
            alt="Manager / Director" 
            className="manager-img" 
          />
          <div className="manager-badge">
            <span>Leadership</span>
          </div>
        </div>

        <div className="manager-content">
          <p className="eyebrow">From the Manager's Desk</p>
          <h2 id="manager-heading">Shri Raghunath Prasad</h2>
          <p className="manager-designation">Managing Director, PTSRIET</p>
          
          <blockquote className="manager-quote">
            "Education is not merely about acquiring degrees; it is about building character, igniting curiosity, and empowering the youth of Pratapgarh to lead the world with confidence and integrity."
          </blockquote>

          <p className="manager-motive-desc">
            Our vision at Pt. Sukhraj Raghunath Institute of Education & Technology is to provide world-class resources, practical exposure, and unwavering support to every student on their journey to success.
          </p>

          <div className="manager-footer">
            <span className="signature-font">Raghunath Prasad</span>
            <span className="motive-tag">#BuildingFutures2026</span>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default UpdatesList;