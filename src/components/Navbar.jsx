// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
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
        // ... existing scroll logic ...
    }, []);

    const scrollToSection = (id) => {
        // ... existing scroll logic ...
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            
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
                    <Link to="/marketplace" onClick={closeMenu}>
                        Marketplace
                    </Link>
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
