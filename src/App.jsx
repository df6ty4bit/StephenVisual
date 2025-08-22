// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Marketplace from "./components/Marketplace";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        document.body.className = currentTheme;
        localStorage.setItem("theme", currentTheme);
    }, [currentTheme]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleTheme = () => {
        setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <Router>
            <div className={`App ${currentTheme}`}>
                <Navbar
                    isMenuOpen={isMenuOpen}
                    toggleMenu={toggleMenu}
                    closeMenu={closeMenu}
                    toggleTheme={toggleTheme}
                    currentTheme={currentTheme}
                />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/marketplace" element={<Marketplace />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
