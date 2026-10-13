import React, { useId, useState } from 'react';
import { useCurriculumLocks } from '../context/CurriculumLockContext';
import { buildPdfRegistry } from '../utils/pdfRegistry';
import './CurriculumQuickAccess.css';

const CurriculumQuickAccess = ({ semesters, courseKey }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const subjectsId = useId();
  const titleId = `${subjectsId}-title`;
  const { error, isLocked, loading } = useCurriculumLocks();
  const pdfRegistry = buildPdfRegistry(semesters, courseKey);

  const semesterResources = semesters.map((semester, semesterIndex) => {
    const semesterId = `${courseKey}::${semesterIndex}`;
    const semesterNumber = semesterIndex + 1;
    const semesterName = semester.sem || `Semester ${semesterNumber}`;
    return {
      id: semesterId,
      semester: semesterName,
      resources: pdfRegistry
        .filter((subject) => subject.semesterId === semesterId)
        .map((subject) => {
          const subjectName = subject.subject;
          const locked = !loading && !error && (() => {
            console.log('[CurriculumQuickAccess] Lock lookup:', {
              courseKey,
              semesterNumber,
              subjectName
            });
            return isLocked(courseKey, semesterNumber, subjectName);
          })();
          const accessStatus = loading
            ? 'loading'
            : error
              ? 'error'
              : !courseKey
                ? 'unavailable'
                : locked
                  ? 'locked'
                  : 'available';
          return {
            ...subject,
            name: subjectName,
            locked,
            accessStatus,
            accessBlocked: accessStatus !== 'available'
          };
        })
    };
  });
  const resourcesCount = semesterResources.reduce((count, group) => count + group.resources.length, 0);

  return (
    <section className="curriculum-quick-access" aria-labelledby={titleId}>
      <div className="curriculum-quick-access-header">
        <div className="curriculum-quick-access-heading">
          <span className="curriculum-quick-access-tag">QUICK ACCESS</span>
          <h3 id={titleId}>Master Cheatsheet Hub</h3>
          <p>{resourcesCount} subject notes available</p>
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
        <div
          className="curriculum-quick-access-list"
          id={subjectsId}
          role="region"
          aria-label="Course subject PDFs"
          tabIndex={0}
        >
          {resourcesCount > 0 ? semesterResources.map(({ id, semester, resources }) => resources.length > 0 && (
            <section className="curriculum-quick-access-semester" key={id} aria-label={semester}>
              <h4>{semester}</h4>
              {resources.map(({ name, pdfUrl, locked, accessBlocked, accessStatus }) => {
                return (
                  <div className="curriculum-quick-access-row" key={`${id}-${name}`}>
                    <span className="curriculum-quick-access-subject">{name}</span>
                    {accessBlocked ? (
                      <button
                        className={`curriculum-quick-access-link${locked ? ' is-locked' : ' is-unavailable'}`}
                        type="button"
                        disabled
                        title={accessStatus === 'locked' ? 'Access Restricted by Admin' : undefined}
                        aria-label={accessStatus === 'locked' ? `Locked by admin: ${name}` : `Notes unavailable: ${name}`}
                      >
                        {locked
                          ? <><span aria-hidden="true">🔒</span> View notes</>
                          : loading
                            ? 'Checking access…'
                            : 'View notes unavailable'}
                      </button>
                    ) : (
                      <button
                        className="curriculum-quick-access-link"
                        type="button"
                        onClick={() => window.open(pdfUrl, '_blank', 'noopener,noreferrer')}
                      >
                        View notes
                      </button>
                    )}
                  </div>
                );
              })}
            </section>
          )) : <p>No subject notes are mapped yet.</p>}
        </div>
      )}
    </section>
  );
};

export default CurriculumQuickAccess;