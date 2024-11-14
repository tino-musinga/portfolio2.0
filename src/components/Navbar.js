import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Resume from './Resume_Tinotenda_Musingarimi.pdf';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">TM</div>
      <ul className="nav-links">
        <li><Link to="/">Welcome</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/engagement">Engagement</Link></li>
        <li><Link to="/accomplishments">Accomplishments</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
        <li><a href={Resume} target="_blank" rel="noopener noreferrer">View Resume</a></li> {/* Updated button */}
      </ul>
    </nav>
  );
};

export default Navbar;


