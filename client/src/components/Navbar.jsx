import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <header className="site-header">
    <div className="nav-shell">
      <Link className="brand" to="/">
        {/* Sirf logo image rahegi, text hata diya gaya hai */}
        <img src="/logo.png" alt="PTSRIET Pulse" className="brand-logo" />
      </Link>
      <nav aria-label="Main navigation">
        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/">Dashboard</NavLink>
        <span className="institution-label">Pt. Sukhraj Raghunath Institute</span>
      </nav>
    </div>
  </header>
);

export default Navbar;