import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div style={{ background: '#d9e9f9', minHeight: '100vh', padding: '50px 20px' }}>
      <div style={{ maxWidth: '850px', margin: '0 auto', background: '#f4d4d4', borderRadius: '20px', padding: '45px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)', border: '1px solid #e2e8f0' }}>
        
        <Link to="/" style={{ display: 'inline-block', marginBottom: '25px', color: '#2563eb', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem', background: '#eff6ff', padding: '8px 16px', borderRadius: '8px' }}>
          ← Back to Dashboard
        </Link>

        <h1 style={{ color: '#0f172a', fontWeight: '800', fontSize: '2.2rem', marginBottom: '8px' }}>Privacy Policy</h1>
        <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '30px', borderBottom: '1px solid #f1f5f9', paddingBottom: '15px' }}>
          Last updated: July 2026
        </p>

        <p style={{ color: '#334155', lineHeight: '1.7', marginBottom: '20px', fontSize: '0.95rem' }}>
          Welcome to PTSRIET Pulse. We respect your privacy and are committed to protecting any personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
        </p>
        
        <h3 style={{ color: '#1e293b', marginTop: '35px', marginBottom: '12px', fontSize: '1.25rem', fontWeight: '700' }}>1. Information We Collect</h3>
        <p style={{ color: '#334155', lineHeight: '1.7', marginBottom: '20px', fontSize: '0.95rem' }}>
          When you use our admission enquiry form, we may collect your name, phone number, and selected course details solely for the purpose of assisting you with admissions. We do not sell or share your personal data with third parties.
        </p>

        <h3 style={{ color: '#1e293b', marginTop: '35px', marginBottom: '12px', fontSize: '1.25rem', fontWeight: '700' }}>2. Cookies and Google AdSense</h3>
        <p style={{ color: '#334155', lineHeight: '1.7', marginBottom: '20px', fontSize: '0.95rem' }}>
          We may use third-party advertising companies (such as Google AdSense) to serve ads when you visit our website. These companies may use cookies to serve ads based on your prior visits to our website or other websites.
        </p>

        <h3 style={{ color: '#1e293b', marginTop: '35px', marginBottom: '12px', fontSize: '1.25rem', fontWeight: '700' }}>3. Contact Us</h3>
        <p style={{ color: '#334155', lineHeight: '1.7', marginBottom: '10px', fontSize: '0.95rem' }}>
          If you have any questions regarding this Privacy Policy, you can reach out to our administration cell through the contact section on the dashboard.
        </p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;