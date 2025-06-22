import React, { useState, useEffect } from 'react'; // Import useEffect
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logoPlaceholder from '../assets/logo.png'; // Assuming your logo is here
import './Navbar.css';

const Navbar = ({ isMenuOpen, toggleMenu, closeMenu }) => {
  const [scrolled, setScrolled] = useState(false); // New state to track scroll

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled past 50px (you can adjust this threshold)
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}> {/* Apply 'scrolled' class conditionally */}
      <div className="navbar-brand">
        <Link to="/" onClick={closeMenu}>
          <img src={logoPlaceholder} alt="StephenVisual Logo" />
          StephenVisual
        </Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
        <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
