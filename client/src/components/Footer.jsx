import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="college-main-footer">
    <div className="footer-container">
      <div className="footer-top-row">
        <div className="footer-brand-col">
          <h3>PTSRIET College</h3>
          <p>Pt. Sukhraj Raghunath Institute of Education & Technology, Pratapgarh, Uttar Pradesh</p>
        </div>
        <div className="footer-contact-col">
          <h4>Contact Us</h4>
          <p>📧 Email: <strong>info@ptsriet.ac.in</strong></p>
          <p>📞 Phone: <strong>+91 98765 43210 / 05342-xxxxxx</strong></p>
        </div>
      </div>

      <div className="footer-bottom-row">
        <p className="developer-credit">
          Designed & Developed with ❤️ by <strong>Aapka Naam</strong> & Team
        </p>
        <p className="copyright-text">
          &copy; 2026 PTSRIET. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;