// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // You can remove this import if not needed elsewhere
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import logoPlaceholder from '../assets/teammembers/stephen.jpg';
import './Navbar.css';

const Navbar = ({ isMenuOpen, toggleMenu, closeMenu, toggleTheme, currentTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset by navbar height if it's fixed
      const offset = 70; // Adjust this value based on your navbar's actual height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      closeMenu(); // Close mobile menu after clicking
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-brand">
        {/* Link to home section if you have an ID on it */}
        <a href="#home" onClick={() => { scrollToSection('home'); closeMenu(); }}>
          <img src={logoPlaceholder} alt="StephenVisual Logo" />
          StephenVisual
        </a>
      </div>

      <div className="navbar-controls">
        <button className="theme-toggle-button" onClick={toggleTheme} aria-label="Toggle theme">
          <FontAwesomeIcon icon={currentTheme === 'light' ? faMoon : faSun} />
        </button>
        <div className="menu-icon" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>
      </div>

      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        {/* Update links to use onClick for scrolling */}
        <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
        <li><a href="#portfolio" onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
        <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
        <li><a href="#about" onClick={() => scrollToSection('about')}>About Us</a></li>
        <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
