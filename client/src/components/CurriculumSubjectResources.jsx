import React from 'react';
import './CurriculumSubjectResources.css';

const syllabusPdf = '/assets/sample-syllabus.pdf';
const notesPdf = '/assets/sample-notes.pdf';

const CurriculumSubjectResources = ({ subjects }) => {
  const subjectNames = (Array.isArray(subjects) ? subjects : subjects.split(','))
    .map((subject) => (typeof subject === 'string' ? subject : subject.name))
    .filter(Boolean);

  return (
    <div className="curriculum-subject-list">
      {subjectNames.map((subject) => (
        <article className="curriculum-subject-card" key={subject}>
          <h4>{subject.trim()}</h4>
          <div className="curriculum-resource-links">
            <a href={syllabusPdf} target="_blank" rel="noopener noreferrer" className="curriculum-resource-link syllabus-link">
              Syllabus
            </a>
            <a href={notesPdf} target="_blank" rel="noopener noreferrer" className="curriculum-resource-link notes-link">
              Notes
            </a>
          </div>
        </article>
      ))}
    </div>
  );
};

export default CurriculumSubjectResources;
