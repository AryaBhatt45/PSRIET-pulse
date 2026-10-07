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
        Last updated: October 5, 2026
      </p>

      <p style={paragraph}>
        This policy explains how PTSRIET Pulse handles information when you use this website. The site currently keeps its interactive data in your browser using local storage; it does not send form submissions to a shared application server.
      </p>

      <h2 style={sectionHeading}>Information you enter</h2>
      <p style={paragraph}>
        If you use the admissions enquiry form, the name, phone number, selected course, and submission date are saved in local storage in the browser where you submit the form. The result lookup page uses the roll number you enter to search result records already saved in that browser; it does not save the search input.
      </p>
      <p style={paragraph}>
        The Admin Dashboard can also store notices, events, job and internship listings, student details, results, and enquiry records in local storage. This storage is specific to that browser profile and device. It is not a shared or encrypted database, and information may be accessible to other people who can use the same browser profile.
      </p>

      <h2 style={sectionHeading}>How information is used and retained</h2>
      <p style={paragraph}>
        Information stored in local storage is used to display and manage the relevant portal features in that browser. It remains there until it is removed by the site’s available controls or you clear the browser’s site data. Because data is not synchronized to a shared server, submitting an enquiry through this version of the site does not itself deliver it to the admissions team or guarantee a callback.
      </p>
      <p style={paragraph}>
        Do not enter passwords, payment details, government identity numbers, health information, or other sensitive information into the portal. Use a private device when possible, and clear its site data if you no longer want locally saved information on it.
      </p>

      <h2 style={sectionHeading}>Cookies, analytics, and advertising</h2>
      <p style={paragraph}>
        The current frontend uses browser local storage for the features described above and does not implement its own analytics or advertising cookies. Google AdSense is not currently integrated into this frontend. If third-party analytics or advertising services are added later, those providers may use cookies or similar technologies, and this policy and any required consent controls should be updated before they are enabled.
      </p>

      <h2 style={sectionHeading}>External websites</h2>
      <p style={paragraph}>
        The portal may link to scholarship services, educational resources, and other third-party websites. Those websites operate under their own privacy policies and practices. Review their policies before sharing information with them; PTSRIET Pulse does not control their content or data handling.
      </p>

      <h2 style={sectionHeading}>Your choices</h2>
      <p style={paragraph}>
        You can remove locally stored information by using the browser’s site-data or storage controls. Clearing that data may also remove saved notices, opportunities, results, and other portal content from that browser. There is no account-based request or server-side deletion process in the current frontend.
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
