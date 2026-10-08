import React, { useState } from 'react';
import CurriculumSubjectResources from './CurriculumSubjectResources';
import './CurriculumSemesterCards.css';

const CurriculumSemesterCards = ({ semesters, syllabusPdf }) => {
  const [openSemester, setOpenSemester] = useState(null);

  const toggleSemester = (semesterId) => {
    setOpenSemester((currentOpenSemester) => currentOpenSemester === semesterId ? null : semesterId);
  };

  return (
    <div className="curriculum-semester-grid">
      {semesters.map((semester, index) => {
        const semesterId = `${semester.sem}-${index}`;
        const contentId = `curriculum-content-${index}`;
        const isOpen = openSemester === semesterId;

        return (
          <article className={`curriculum-semester-card${isOpen ? ' is-open' : ''}`} key={semesterId}>
            <div className="curriculum-semester-heading">
              <h3>{semester.sem}</h3>
              <span className="curriculum-semester-dot" aria-hidden="true" />
            </div>
            <button
              aria-expanded={isOpen}
              aria-controls={contentId}
              className="curriculum-semester-toggle"
              onClick={() => toggleSemester(semesterId)}
              type="button"
            >
              <span>{isOpen ? 'Hide Subjects' : 'View Subjects & Resources'}</span>
              <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
              <div className="curriculum-semester-content" id={contentId} role="region" aria-label={`${semester.sem} subjects`}>
                <CurriculumSubjectResources
                  subjects={semester.subjects}
                  syllabusPdf={syllabusPdf}
                  notesPdfs={semester.notesPdfs}
                />
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
};

export default CurriculumSemesterCards;
