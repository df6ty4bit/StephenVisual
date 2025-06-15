import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // <--- UPDATED IMPORT

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">StephenVisual</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
        <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
