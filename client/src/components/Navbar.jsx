import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <header className="site-header">
    <div className="nav-shell">
      <Link className="brand" to="/"><span className="brand-mark">P</span><span>PTSRIET <b>Pulse</b></span></Link>
      <nav aria-label="Main navigation">
        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/">Dashboard</NavLink>
        <span className="institution-label">Pt. Sukhraj Raghunath Institute</span>
      </nav>
    </div>
  </header>
);

export default Navbar;
