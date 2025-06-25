// src/App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Keep BrowserRouter for navbar links

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home'; // We will mount all content within Home.jsx

import './index.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <Navbar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        toggleTheme={toggleTheme}
        currentTheme={theme}
      />
      <main>
        {/* Only the Home component is rendered here.
            It will internally render Portfolio, Services, About, and Contact. */}
        <Home />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
