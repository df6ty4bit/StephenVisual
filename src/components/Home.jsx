import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <h1>Welcome to StephenVisual</h1>
        <p>Capturing Moments, Crafting Memories</p>
        <Link to="/portfolio" className="btn">View Our Portfolio</Link>
      </section>

      <section className="intro-section">
        <h2>Your Vision, Our Expertise</h2>
        <p>
          At StephenVisual, we are passionate about transforming your moments into timeless visual stories.
          From dynamic event coverage to meticulous photo editing, our team of skilled professionals ensures every detail is perfect.
          We pride ourselves on delivering exceptional quality and a personalized experience.
        </p>
        <p>Let us help you bring your visual dreams to life.</p>
      </section>

      {/* You can add more sections here, e.g., Featured Services, Testimonials preview */}
    </>
  );
};

export default Home;
