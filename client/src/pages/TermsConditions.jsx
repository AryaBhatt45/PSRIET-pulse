import React from 'react';
import { Link } from 'react-router-dom';

const contentWidth = { maxWidth: '850px', margin: '0 auto', color: '#334155', lineHeight: 1.7 };
const sectionHeading = { color: '#1e293b', margin: '30px 0 10px', fontSize: '1.15rem', fontWeight: 700 };
const paragraph = { margin: '0 0 14px', fontSize: '0.95rem' };

const TermsConditions = () => (
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
        Terms &amp; Conditions
      </h1>
      <p style={{ color: '#64748b', fontSize: '0.85rem', margin: '0 0 26px', borderBottom: '1px solid #e2e8f0', paddingBottom: '16px' }}>
        Last updated: October 5, 2026
      </p>

      <p style={paragraph}>
        By accessing PTSRIET Pulse, you agree to use the website lawfully and in accordance with these terms. If you do not agree, please stop using the site.
      </p>

      <h2 style={sectionHeading}>Purpose and information accuracy</h2>
      <p style={paragraph}>
        The portal provides course information, campus updates, academic resources, results, scholarship links, and career-opportunity information for general student use. We aim to keep information useful and current, but notices, dates, eligibility requirements, fees, and external opportunities can change or contain errors.
      </p>
      <p style={paragraph}>
        Always verify admissions, examination, results, scholarship, and other official decisions with the institute or the responsible government or education service. Information on this portal does not replace official notices or individual academic advice.
      </p>

      <h2 style={sectionHeading}>Acceptable use</h2>
      <p style={paragraph}>
        Do not misuse the portal, attempt unauthorized access, interfere with its operation, submit false or unlawful material, or use its forms to provide sensitive information. You are responsible for the information you choose to enter and for protecting access to the browser where portal data is saved.
      </p>

      <h2 style={sectionHeading}>Resources and intellectual property</h2>
      <p style={paragraph}>
        Website text, branding, graphics, and learning materials may be owned by the institute or their respective authors and rights holders. Unless a resource states otherwise or permission is granted, do not reproduce, redistribute, or commercially use material in a way that infringes those rights. Third-party materials remain subject to their owners’ terms.
      </p>

      <h2 style={sectionHeading}>External links and opportunities</h2>
      <p style={paragraph}>
        Links to external services and job, internship, or scholarship opportunities are provided for convenience. We do not control those websites and cannot guarantee their availability, accuracy, eligibility rules, deadlines, or outcomes. Review the destination website and its terms before applying or sharing information.
      </p>

      <h2 style={sectionHeading}>Availability and limitation</h2>
      <p style={paragraph}>
        Features and content may be changed, interrupted, or removed without notice. The portal is provided for general informational use. To the extent permitted by applicable law, PTSRIET Pulse disclaims warranties regarding uninterrupted availability, completeness, and accuracy, and is not responsible for decisions made solely on the basis of portal content.
      </p>

      <h2 style={sectionHeading}>Changes and contact</h2>
      <p style={paragraph}>
        These terms may be revised as the portal changes. Continued use after an update means you accept the revised terms. For questions, contact the institute using its published contact details or call the portal support number at{' '}
        <a href="tel:+917398663942" style={{ color: '#1d4ed8' }}>+91 73986 63942</a>.
      </p>
    </article>
  </main>
);

export default TermsConditions;