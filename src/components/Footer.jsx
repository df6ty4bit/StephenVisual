import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} StephenVisual. All rights reserved.</p>
        <ul className="footer-links">
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms of Service</Link></li>
        </ul>
        <div className="social-icons">
          <a href="https://facebook.com/stephenvisual" target="_blank" rel="noopener noreferrer">Facebook</a> |
          <a href="https://instagram.com/stephenvisual" target="_blank" rel="noopener noreferrer">Instagram</a> |
          <a href="https://twitter.com/stephenvisual" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
