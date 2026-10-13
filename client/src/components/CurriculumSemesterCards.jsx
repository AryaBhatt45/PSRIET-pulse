import React, { useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import CurriculumSubjectResources from './CurriculumSubjectResources';
import './CurriculumSemesterCards.css';

const CurriculumSemesterCard = ({
  semester,
  syllabusPdf,
  courseKey,
  semesterNumber,
  contentId,
  onOpenChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [panelPosition, setPanelPosition] = useState(null);
  const cardRef = useRef(null);

  const togglePanel = () => {
    const nextOpen = !isOpen;
    setIsOpen(nextOpen);
    onOpenChange(contentId, nextOpen);
  };

  useLayoutEffect(() => {
    if (!isOpen || !cardRef.current) {
      setPanelPosition(null);
      return undefined;
    }

    const updatePosition = () => {
      const card = cardRef.current;
      if (!card) return;

      const bounds = card.getBoundingClientRect();
      setPanelPosition({
        top: bounds.top + window.scrollY,
        left: bounds.left + window.scrollX,
        width: bounds.width,
        height: bounds.height
      });
    };

    updatePosition();
    const track = cardRef.current.closest('.curriculum-semester-grid');
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    track?.addEventListener('scroll', updatePosition, { passive: true });

    const observer = typeof ResizeObserver === 'undefined'
      ? null
      : new ResizeObserver(updatePosition);
    observer?.observe(cardRef.current);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
      track?.removeEventListener('scroll', updatePosition);
      observer?.disconnect();
    };
  }, [isOpen]);

  return (
    <article ref={cardRef} className={`curriculum-semester-card${isOpen ? ' is-open' : ''}`}>
      <div className="curriculum-semester-heading">
        <h3>{semester.sem}</h3>
        <span className="curriculum-semester-dot" aria-hidden="true" />
      </div>
      <button
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="curriculum-semester-toggle"
        onClick={togglePanel}
        type="button"
      >
        <span>{isOpen ? 'Hide Subjects' : 'View Subjects & Resources'}</span>
        <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && panelPosition && createPortal(
        <div
          className="curriculum-semester-panel-anchor"
          style={{
            top: `${panelPosition.top}px`,
            left: `${panelPosition.left}px`,
            width: `${panelPosition.width}px`,
            '--semester-card-height': `${panelPosition.height}px`
          }}
        >
          <div
            className="curriculum-semester-panel"
            id={contentId}
            role="region"
            aria-label={`${semester.sem} subjects`}
            tabIndex={0}
          >
            <CurriculumSubjectResources
              subjects={semester.subjects}
              syllabusPdf={syllabusPdf}
              notesPdfs={semester.notesPdfs}
              courseKey={courseKey}
              semesterNumber={semesterNumber}
            />
          </div>
        </div>,
        document.body
      )}
    </article>
  );
};

const CurriculumSemesterCards = ({ semesters, syllabusPdf, courseKey }) => {
  const cardsId = useId();
  const sliderId = `${cardsId}-slider`;
  const sliderRef = useRef(null);
  const [openPanels, setOpenPanels] = useState(() => new Set());

  const handlePanelOpenChange = (panelId, isOpen) => {
    setOpenPanels((current) => {
      const next = new Set(current);
      if (isOpen) next.add(panelId);
      else next.delete(panelId);
      return next;
    });
  };

  const scrollSemesters = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollBy({
      left: direction * slider.clientWidth * 0.85,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`curriculum-semester-slider${openPanels.size ? ' has-open-panel' : ''}`}>
      <div className="curriculum-semester-slider-controls" aria-label="Semester slider controls">
        <button
          type="button"
          aria-controls={sliderId}
          aria-label="Scroll to previous semesters"
          onClick={() => scrollSemesters(-1)}
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          aria-controls={sliderId}
          aria-label="Scroll to next semesters"
          onClick={() => scrollSemesters(1)}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <div
        ref={sliderRef}
        className="curriculum-semester-grid"
        id={sliderId}
        role="region"
        aria-label="Semester curriculum cards"
        tabIndex={0}
      >
        {semesters.map((semester, index) => {
          const semesterId = semester.id ?? semester.sem ?? `semester-${index}`;
          return (
            <CurriculumSemesterCard
              key={`${semesterId}-${index}`}
              semester={semester}
              syllabusPdf={syllabusPdf}
              courseKey={courseKey}
              semesterNumber={index + 1}
              contentId={`${cardsId}-content-${index}`}
              onOpenChange={handlePanelOpenChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CurriculumSemesterCards;
