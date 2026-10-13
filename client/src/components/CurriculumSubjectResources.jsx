import React from 'react';
import { getSubjectPdf } from '../utils/pdfRegistry';
import './CurriculumSubjectResources.css';

const syllabusPdf = '/assets/sample-syllabus.pdf';
const subjectSyllabusPdfs = {
  Geography: '/Geography.pdf',
  Sociology: '/Sociology.pdf',
  'English Literature': '/English.pdf',
  'Hindi Literature': '/U_hindi.pdf'
};

const CurriculumSubjectResources = ({
  subjects,
  syllabusPdf: courseSyllabusPdf,
  notesPdfs,
  courseKey,
  semesterNumber
}) => {
  const subjectNames = (Array.isArray(subjects) ? subjects : subjects.split(','))
    .map((subject) => (typeof subject === 'string' ? subject : subject.name))
    .filter(Boolean);

  return (
    <div className="curriculum-subject-list">
      {subjectNames.map((subject) => {
        const subjectName = subject.trim();
        const subjectSyllabusPdf = courseSyllabusPdf || subjectSyllabusPdfs[subjectName] || syllabusPdf;
        const subjectNotesPdf = getSubjectPdf({ notesPdfs }, subjectName, courseKey, semesterNumber);

        return (
          <article className="curriculum-subject-card" key={subject}>
            <h4>{subjectName}</h4>
            <div className="curriculum-resource-links">
              <a href={subjectSyllabusPdf} target="_blank" rel="noopener noreferrer" className="curriculum-resource-link syllabus-link">
                Syllabus
              </a>
              <a href={subjectNotesPdf} target="_blank" rel="noopener noreferrer" className="curriculum-resource-link notes-link">
                View notes
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default CurriculumSubjectResources;
