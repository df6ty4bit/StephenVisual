import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faTimes,
    faSun,
    faMoon
} from "@fortawesome/free-solid-svg-icons";
import logoPlaceholder from "../assets/logo.png";
import "./Navbar.css";

const Navbar = ({
    isMenuOpen,
    toggleMenu,
    closeMenu,
    toggleTheme,
    currentTheme
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

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-brand">
                <Link to="/" onClick={closeMenu}>
                    <img src={logoPlaceholder} alt="StephenVisual Logo" />
                    StephenVisual
                </Link>
            </div>

            <div className="navbar-controls">
                {" "}
                {/* New container for menu icon and theme toggle */}
                <button
                    className="theme-toggle-button"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    <FontAwesomeIcon
                        icon={currentTheme === "light" ? faMoon : faSun}
                    />
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
                    <Link to="/" onClick={closeMenu}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio" onClick={closeMenu}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="/services" onClick={closeMenu}>
                        Services
                    </Link>
                </li>
                <li>
                    <Link to="/about" onClick={closeMenu}>
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="/contact" onClick={closeMenu}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
