import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/bca.css';

const BaPage = () => {
  const [activeSem, setActiveSem] = useState(null);

  const toggleAccordion = (index) => {
    setActiveSem(activeSem === index ? null : index);
  };

  const semesters = [
    { 
      sem: 'Sem 1', 
      subjects: [
        { name: 'History of Ancient India', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem1-history.pdf' },
        { name: 'Hindi Literature (Kavya)', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem1-hindi.pdf' },
        { name: 'Political Theory', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem1-pol.pdf' },
        { name: 'Sociology Basics', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem1-soc.pdf' }
      ] 
    },
    { 
      sem: 'Sem 2', 
      subjects: [
        { name: 'Medieval Indian History', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem2-history.pdf' },
        { name: 'Hindi Prose & Fiction', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem2-hindi.pdf' },
        { name: 'Western Political Thought', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem2-pol.pdf' },
        { name: 'Society in India', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem2-soc.pdf' }
      ] 
    },
    { 
      sem: 'Sem 3', 
      subjects: [
        { name: 'Modern Indian History (1757-1947)', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem3-history.pdf' },
        { name: 'Modern Hindi Poetry', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem3-hindi.pdf' },
        { name: 'Indian Government & Politics', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem3-pol.pdf' },
        { name: 'Social Change', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem3-soc.pdf' }
      ] 
    },
    { 
      sem: 'Sem 4', 
      subjects: [
        { name: 'World History (1453-1950)', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem4-history.pdf' },
        { name: 'Functional & Media Hindi', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem4-hindi.pdf' },
        { name: 'Public Administration', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem4-pub.pdf' },
        { name: 'Social Research Methods', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem4-soc.pdf' }
      ] 
    },
    { 
      sem: 'Sem 5', 
      subjects: [
        { name: 'Indian National Movement', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem5-history.pdf' },
        { name: 'Hindi Drama & Linguistics', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem5-hindi.pdf' },
        { name: 'International Relations', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem5-ir.pdf' },
        { name: 'Classical Sociological Thinkers', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem5-soc.pdf' }
      ] 
    },
    { 
      sem: 'Sem 6', 
      subjects: [
        { name: 'Contemporary World History', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem6-history.pdf' },
        { name: 'Literary Criticism & Essays', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem6-hindi.pdf' },
        { name: 'Comparative Politics', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem6-pol.pdf' },
        { name: 'Indian Sociological Thought', notesUrl: '#', quickUrl: '#', pdfUrl: '/syllabus/ba-sem6-soc.pdf' }
      ] 
    }
  ];

  const gloryStudents = [
    { name: 'Vandana Shukla', achievement: 'Cleared UPPSC Pre Examination 2025', image: '/student1.jpg' },
    { name: 'Anurag Yadav', achievement: 'Published Poetry Anthology in National Forum', image: '/student2.jpg' },
    { name: 'Pooja Pandey', achievement: 'Rank 1 in University B.A Merit List', image: '/student3.jpg' },
    { name: 'Kishan Mishra', achievement: 'Selected for National Debate Championship', image: '/student4.jpg' }
  ];

  const announcements = [
    "📢 B.A Admission Open for Academic Session 2026-27",
    "📚 Annual Seminar on Indian History & Literature scheduled for next month.",
    "💡 National Scholarship Portal (NSP) Form submission open - Apply Now!",
    "📝 Even Semester Mid-Term Assignment submission last date: 20th July."
  ];

  return (
    <div style={{ backgroundColor: '#f8fafc', color: '#1e293b', minHeight: '100vh', padding: '30px 40px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>

      {/* Top Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
        <Link to="/" style={{ background: '#ffffff', color: '#2563eb', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none', border: '1px solid #e2e8f0', fontWeight: '600', boxShadow: '0 2px 5px rgba(0,0,0,0.02)' }}>← Back to Dashboard</Link>
        <span style={{ background: '#eff6ff', color: '#2563eb', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', border: '1px solid #bfdbfe', fontWeight: '600' }}>Faculty of Arts & Humanities</span>
      </div>

      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)', padding: '40px', borderRadius: '16px', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', boxShadow: '0 10px 25px rgba(30, 64, 175, 0.15)' }}>
        <div>
          <span style={{ background: 'rgba(255, 255, 255, 0.15)', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1px' }}>ACADEMIC EXCELLENCE</span>
          <h1 style={{ fontSize: '2.2rem', margin: '10px 0' }}>Bachelor of Arts (B.A)</h1>
          <p style={{ color: '#cbd5e1', fontSize: '0.95rem', maxWidth: '600px', marginBottom: '20px' }}>Gain comprehensive critical thinking, social insights, and literary appreciation through a structured 3-year multidisciplinary curriculum.</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '6px 12px', borderRadius: '6px', fontSize: '0.85rem', border: '1px solid rgba(255, 255, 255, 0.2)' }}>⏳ 3 Years</span>
            <span style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '6px 12px', borderRadius: '6px', fontSize: '0.85rem', border: '1px solid rgba(255, 255, 255, 0.2)' }}>🪑 150 Seats</span>
            <span style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '6px 12px', borderRadius: '6px', fontSize: '0.85rem', border: '1px solid rgba(255, 255, 255, 0.2)' }}>💰 ₹10,000 / Year</span>
          </div>
        </div>
        <div>
          <img src="/logo.png" alt="BA Logo" style={{ width: '90px', height: '90px', objectFit: 'contain' }} />
        </div>
      </div>

      {/* Ticker */}
      <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', display: 'flex', alignItems: 'center', overflow: 'hidden', marginBottom: '35px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
        <div style={{ background: '#ef4444', color: '#ffffff', padding: '12px 18px', fontSize: '0.8rem', fontWeight: '700', whiteSpace: 'nowrap', zIndex: '2' }}>🚨 IMPORTANT UPDATES</div>
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <div style={{ display: 'flex', gap: '40px', whiteSpace: 'nowrap' }}>
            {announcements.map((item, idx) => (
              <span key={idx} style={{ fontSize: '0.85rem', color: '#475569', fontWeight: '500' }}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Curriculum Section */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ marginBottom: '20px' }}>
          <span style={{ background: '#f1f5f9', color: '#475569', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: '700' }}>🚀 ROADMAP</span>
          <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginTop: '5px' }}>Semester-wise Curriculum & Notes</h2>
        </div>
        
        {/* Flex container with cards properly boxed */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'flex-start' }}>
          {semesters.map((item, index) => {
            const isOpen = activeSem === index;
            return (
              <div key={index} style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '20px', borderRadius: '14px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', width: 'calc(33.333% - 14px)', minWidth: '280px', boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 style={{ margin: 0, color: '#0f172a', fontSize: '1.15rem', fontWeight: '700' }}>{item.sem}</h3>
                  <span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 6px rgba(16, 185, 129, 0.5)' }}></span>
                </div>
                
                <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: '1.4', marginBottom: '12px' }}>
                  {item.subjects.map(s => s.name).join(', ')}
                </p>

                <button 
                  onClick={() => toggleAccordion(index)}
                  style={{ width: '100%', border: '1px solid #cbd5e1', padding: '8px 12px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', background: isOpen ? '#eff6ff' : '#f8fafc', color: isOpen ? '#2563eb' : '#334155' }}
                >
                  <span>{isOpen ? 'Hide Subjects' : 'View Subjects & Resources'}</span>
                  <span>{isOpen ? '▲' : '▼'}</span>
                </button>

                {isOpen && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px dashed #cbd5e1', paddingTop: '10px', marginTop: '10px', maxHeight: '260px', overflowY: 'auto' }}>
                    {item.subjects.map((sub, subIdx) => (
                      <div key={subIdx} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 10px' }}>
                        <h4 style={{ margin: '0 0 6px 0', fontSize: '0.82rem', color: '#1e293b', fontWeight: '700' }}>{sub.name}</h4>
                        <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                          <a href={sub.notesUrl} style={{ flex: 1, textAlign: 'center', padding: '5px 4px', borderRadius: '5px', textDecoration: 'none', fontSize: '0.72rem', fontWeight: '600', background: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe' }}>Notes</a>
                          <a href={sub.quickUrl} style={{ flex: 1, textAlign: 'center', padding: '5px 4px', borderRadius: '5px', textDecoration: 'none', fontSize: '0.72rem', fontWeight: '600', background: '#fffbeb', color: '#b45309', border: '1px solid #fde68a' }}>Quick Notes ✨</a>
                          <a href={sub.pdfUrl} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textAlign: 'center', padding: '5px 4px', borderRadius: '5px', textDecoration: 'none', fontSize: '0.72rem', fontWeight: '600', background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0' }}>Syllabus PDF</a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* HOD Profile */}
      <div style={{ display: 'flex', alignItems: 'center', background: '#ffffff', border: '1px solid #e2e8f0', padding: '20px', borderRadius: '14px', gap: '20px', marginTop: '30px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
        <img src="/nilesh.jpg" style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover' }} alt="HOD" />
        <div>
          <h3 style={{ margin: '0 0 4px 0', color: '#0f172a', fontSize: '1.1rem' }}>Prof. Ramakant Dwivedi</h3>
          <p style={{ color: '#2563eb', fontSize: '0.85rem', margin: '0 0 6px 0', fontWeight: '600' }}>HOD - Faculty of Arts & Humanities</p>
          <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0, fontStyle: 'italic' }}>"Empowering students through historical perspectives, social conscience, and linguistic excellence."</p>
        </div>
      </div>

    </div>
  );
};

export default BaPage;