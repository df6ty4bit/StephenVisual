import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

// Import ONLY global styles here. Each component now imports its own CSS.
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes here if you have specific pages like /portfolio/item-detail */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
