import React from 'react';
import './UpdatesList.css';

const updates = [
  ['01', 'Admissions open for 2026-27 academic session', 'Apply now'],
  ['02', 'Semester examination and practical timetable released', 'View timetable'],
  ['03', 'Notes and previous year question papers available', 'Open resources']
];

const UpdatesList = () => (
  <section className="updates-section" aria-labelledby="updates-heading">
    <div className="section-heading compact-heading">
      <div>
        <p className="eyebrow">Stay in the loop</p>
        <h2 id="updates-heading">Important updates</h2>
      </div>
      <span className="live-indicator"><i /> Live notices</span>
    </div>
    <div className="updates-list">
      {updates.map(([number, title, action]) => (
        <a className="update-item" href={`#notice-${number}`} key={number}>
          <span className="update-number">{number}</span>
          <span className="update-title">{title}</span>
          <span className="update-action">{action} <b>↗</b></span>
        </a>
      ))}
    </div>
  </section>
);

export default UpdatesList;