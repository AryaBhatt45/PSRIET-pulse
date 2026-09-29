import React from 'react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  return (
    <div style={{ background: '#d0dfef', minHeight: '100vh', padding: '50px 20px' }}>
      <div style={{ maxWidth: '850px', margin: '0 auto', background: '#f7d8d8', borderRadius: '20px', padding: '45px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)', border: '1px solid #e2e8f0' }}>
        
        <Link to="/" style={{ display: 'inline-block', marginBottom: '25px', color: '#2563eb', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem', background: '#eff6ff', padding: '8px 16px', borderRadius: '8px' }}>
          ← Back to Dashboard
        </Link>

        <h1 style={{ color: '#0f172a', fontWeight: '800', fontSize: '2.2rem', marginBottom: '8px' }}>Terms & Conditions</h1>
        <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '30px', borderBottom: '1px solid #f1f5f9', paddingBottom: '15px' }}>
          Last updated: July 2026
        </p>

        <p style={{ color: '#334155', lineHeight: '1.7', marginBottom: '20px', fontSize: '0.95rem' }}>
          Welcome to PTSRIET Pulse. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions.
        </p>
        
        <h3 style={{ color: '#1e293b', marginTop: '35px', marginBottom: '12px', fontSize: '1.25rem', fontWeight: '700' }}>1. Intellectual Property</h3>
        <p style={{ color: '#334155', lineHeight: '1.7', marginBottom: '20px', fontSize: '0.95rem' }}>
          All academic notes, syllabi, graphics, layout designs, and text content hosted on this portal are for the educational use of PTSRIET students and visitors. Unauthorized copying or commercial misuse is strictly prohibited.
        </p>

        <h3 style={{ color: '#1e293b', marginTop: '35px', marginBottom: '12px', fontSize: '1.25rem', fontWeight: '700' }}>2. Accuracy of Information</h3>
        <p style={{ color: '#334155', lineHeight: '1.7', marginBottom: '10px', fontSize: '0.95rem' }}>
          While we strive to keep notices, exam dates, and course structures accurate and up-to-date, students are advised to cross-verify official updates with the respective college department heads or the Samarth portal.
        </p>

      </div>
    </div>
  );
};

export default TermsConditions;