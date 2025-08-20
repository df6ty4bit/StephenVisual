// src/components/Navbar.jsx

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import logoPlaceholder from "../assets/teammembers/stephen.jpg";
import "./Navbar.css";

const Navbar = ({
  isMenuOpen,
  toggleMenu,
  closeMenu,
  toggleTheme,
  currentTheme,
}) => {
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      closeMenu();
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-brand">
        <a
          href="#home"
          onClick={() => {
            scrollToSection("home");
            closeMenu();
          }}
        >
          <img
            src={logoPlaceholder}
            alt="StephenVisual Logo"
            className="logo-img"
          />
          <p className="header-name">StephenVisual</p>
        </a>
      </div>
      <div className="navbar-controls">
        <button
          className="theme-toggle-button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <FontAwesomeIcon icon={currentTheme === "light" ? faMoon : faSun} />
        </button>
        <div
          className="menu-icon"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={() => scrollToSection("home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => scrollToSection("portfolio")}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#services" onClick={() => scrollToSection("services")}>
            Services
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => scrollToSection("about")}>
            About Us
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => scrollToSection("contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
