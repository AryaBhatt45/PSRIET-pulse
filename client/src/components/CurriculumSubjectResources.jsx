import React from 'react';
import './CurriculumSubjectResources.css';

const syllabusPdf = '/assets/sample-syllabus.pdf';
const notesPdf = '/assets/sample-notes.pdf';
const subjectSyllabusPdfs = {
  Geography: '/Geography.pdf',
  Sociology: '/Sociology.pdf',
  'English Literature': '/English.pdf',
  'Hindi Literature': '/U_hindi.pdf'
};

const CurriculumSubjectResources = ({ subjects, syllabusPdf: courseSyllabusPdf, notesPdfs }) => {
  const subjectNames = (Array.isArray(subjects) ? subjects : subjects.split(','))
    .map((subject) => (typeof subject === 'string' ? subject : subject.name))
    .filter(Boolean);

  return (
    <div className="curriculum-subject-list">
      {subjectNames.map((subject) => {
        const subjectName = subject.trim();
        const subjectSyllabusPdf = courseSyllabusPdf || subjectSyllabusPdfs[subjectName] || syllabusPdf;

        return (
          <article className="curriculum-subject-card" key={subject}>
            <h4>{subjectName}</h4>
            <div className="curriculum-resource-links">
              <a href={subjectSyllabusPdf} target="_blank" rel="noopener noreferrer" className="curriculum-resource-link syllabus-link">
                Syllabus
              </a>
              <a href={notesPdfs?.[subjectName] || notesPdf} target="_blank" rel="noopener noreferrer" className="curriculum-resource-link notes-link">
                Notes
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default CurriculumSubjectResources;
