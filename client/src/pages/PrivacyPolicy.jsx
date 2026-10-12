import React from 'react';
import { Link } from 'react-router-dom';

const contentWidth = { maxWidth: '850px', margin: '0 auto', color: '#334155', lineHeight: 1.7 };
const sectionHeading = { color: '#1e293b', margin: '30px 0 10px', fontSize: '1.15rem', fontWeight: 700 };
const paragraph = { margin: '0 0 14px', fontSize: '0.95rem' };

const PrivacyPolicy = () => (
  <main style={{ background: '#f1f5f9', minHeight: '100vh', padding: 'clamp(24px, 5vw, 50px) 16px' }}>
    <article style={{
      ...contentWidth,
      background: '#fff',
      borderRadius: '18px',
      padding: 'clamp(24px, 5vw, 44px)',
      boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)',
      border: '1px solid #e2e8f0'
    }}>
      <Link to="/" style={{
        display: 'inline-block',
        marginBottom: '24px',
        color: '#1d4ed8',
        textDecoration: 'none',
        fontWeight: 600,
        background: '#eff6ff',
        padding: '8px 14px',
        borderRadius: '8px'
      }}>
        ← Back to Dashboard
      </Link>

      <h1 style={{ color: '#0f172a', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', margin: '0 0 8px' }}>
        Privacy Policy
      </h1>
      <p style={{ color: '#64748b', fontSize: '0.85rem', margin: '0 0 26px', borderBottom: '1px solid #e2e8f0', paddingBottom: '16px' }}>
        Last updated: October 9, 2026
      </p>

      <p style={paragraph}>
        This policy explains how PTSRIET Pulse handles information when you use this website. Portal content and form submissions are stored in the institute's Supabase PostgreSQL database.
      </p>

      <h2 style={sectionHeading}>Information you enter</h2>
      <p style={paragraph}>
        The admissions enquiry form submits your name, phone number, selected course, and submission date to the shared portal database so the admissions team can follow up. The result lookup uses the roll number you enter to retrieve the matching result and does not save the search input.
      </p>
      <p style={paragraph}>
        Administrators can manage notices, events, job and internship listings, student details, results, enquiries, and certification claims through the Admin Dashboard. Certification claim photos submitted by signed-in users are included with their claim. Row-level security restricts administrative records to authorized administrators and claim details to their submitter and administrators.
      </p>

      <h2 style={sectionHeading}>How information is used and retained</h2>
      <p style={paragraph}>
        Submitted information is used to provide and operate the relevant portal features and is retained in the shared database until removed by an authorized administrator. Submitting an enquiry does not guarantee a callback.
      </p>
      <p style={paragraph}>
        Do not enter passwords, payment details, government identity numbers, health information, or other sensitive information into the portal. Use a private device when possible and sign out when you finish using the portal.
      </p>

      <h2 style={sectionHeading}>Cookies, analytics, and advertising</h2>
      <p style={paragraph}>
        The current frontend does not implement its own analytics or advertising cookies. Google AdSense is not currently integrated into this frontend. If third-party analytics or advertising services are added later, those providers may use cookies or similar technologies, and this policy and any required consent controls should be updated before they are enabled.
      </p>

      <h2 style={sectionHeading}>External websites</h2>
      <p style={paragraph}>
        The portal may link to scholarship services, educational resources, and other third-party websites. Those websites operate under their own privacy policies and practices. Review their policies before sharing information with them; PTSRIET Pulse does not control their content or data handling.
      </p>

      <h2 style={sectionHeading}>Your choices</h2>
      <p style={paragraph}>
        Contact the institute to request access to or deletion of information submitted through the portal. Clearing browser data does not delete information stored in the shared database.
      </p>

      <h2 style={sectionHeading}>Changes and contact</h2>
      <p style={paragraph}>
        This policy may be updated when the site’s features or data practices change. For questions about this policy, contact the institute using its published contact details or call the portal support number at{' '}
        <a href="tel:+917398663942" style={{ color: '#1d4ed8' }}>+91 73986 63942</a>.
      </p>
    </article>
  </main>
);

export default PrivacyPolicy;
