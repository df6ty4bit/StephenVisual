// src/components/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Keep Link if you use it for internal navigation within Home
import './Home.css';

// Import all other main components
import Portfolio from './Portfolio';
import Services from './Services';
import About from './About';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      {/* Hero Section (Existing) */}
      <section className="hero-section" id="home"> {/* Add ID for potential internal linking */}
        <h1>Welcome to StephenVisual</h1>
        <p>Capturing Moments, Crafting Memories</p>
        {/* You can change this button to scroll down or directly link if needed,
            but if portfolio is below, maybe just remove or re-purpose it */}
        <Link to="/portfolio" className="btn">View Our Portfolio</Link>
      </section>

      {/* Intro Section (Existing) */}
      <section className="intro-section">
        <h2>Your Vision, Our Expertise</h2>
        <p>
          At StephenVisual, we are passionate about transforming your moments into timeless visual stories.
          From dynamic event coverage to meticulous photo editing, our team of skilled professionals ensures every detail is perfect.
          We pride ourselves on delivering exceptional quality and a personalized experience.
        </p>
        <p>Let us help you bring your visual dreams to life.</p>
      </section>

      {/* --- NEW: Mount all other components here --- */}

      {/* Portfolio Section */}
      <div id="portfolio"> {/* Add ID for internal linking */}
        <Portfolio />
      </div>

      {/* Services Section */}
      <div id="services"> {/* Add ID for internal linking */}
        <Services />
      </div>

      {/* About Section */}
      <div id="about"> {/* Add ID for internal linking */}
        <About />
      </div>

      {/* Contact Section */}
      <div id="contact"> {/* Add ID for internal linking */}
        <Contact />
      </div>

      {/* --- END NEW COMPONENTS --- */}
    </>
  );
};

export default Home;
