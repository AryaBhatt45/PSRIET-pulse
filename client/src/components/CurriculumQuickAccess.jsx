import React, { useId, useState } from 'react';
import './CurriculumQuickAccess.css';

const sampleNotesPdf = '/assets/sample-notes.pdf';

const CurriculumQuickAccess = ({ semesters }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const subjectsId = useId();
  const subjects = [...new Map(semesters.flatMap(({ subjects: semesterSubjects }) => {
    const subjectList = Array.isArray(semesterSubjects) ? semesterSubjects : semesterSubjects.split(',');
    return subjectList
      .map((subject) => (typeof subject === 'string' ? subject : subject.name))
      .filter(Boolean)
      .map((subject) => {
        const name = subject.trim();
        return [name.toLocaleLowerCase(), name];
      });
  }))].map(([, name]) => name);

  return (
    <section className="curriculum-quick-access" aria-labelledby="curriculum-quick-access-title">
      <div className="curriculum-quick-access-header">
        <div className="curriculum-quick-access-heading">
          <span className="curriculum-quick-access-tag">QUICK ACCESS</span>
          <h3 id="curriculum-quick-access-title">Master Cheatsheet Hub</h3>
          <p>{subjects.length} subject resources</p>
        </div>
        <button
          aria-controls={subjectsId}
          aria-expanded={isExpanded}
          className="curriculum-quick-access-toggle"
          onClick={() => setIsExpanded((current) => !current)}
          type="button"
        >
          <span>{isExpanded ? 'Hide Subjects' : 'View Subjects'}</span>
          <span aria-hidden="true">{isExpanded ? '−' : '+'}</span>
        </button>
      </div>
      {isExpanded && (
        <div className="curriculum-quick-access-list" id={subjectsId} role="region" aria-label="Course subject PDFs">
          {subjects.map((subject) => (
            <div className="curriculum-quick-access-row" key={subject}>
              <span className="curriculum-quick-access-subject">{subject}</span>
              <a
                className="curriculum-quick-access-link"
                href={sampleNotesPdf}
                rel="noopener noreferrer"
                target="_blank"
              >
                View PDF
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CurriculumQuickAccess;
