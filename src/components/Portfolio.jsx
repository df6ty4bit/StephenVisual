import React, { useState } from 'react';
import portfolioItems from '../data/portfolioData';
import './Portfolio.css'; // <--- UPDATED IMPORT

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  // Dynamically get unique categories from your data
  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

  const filteredItems = filter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section className="portfolio-section">
      <h2>Our Latest Work</h2>
      <div className="filter-buttons">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={filter === cat ? 'active' : ''}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="portfolio-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="portfolio-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {/* You could add a 'View Project' button here */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
