import React, { useState, useEffect } from 'react'; // Re-added useEffect
import portfolioItems from '../data/portfolioData';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  // State to track the current index for each portfolio item's slideshow
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [zoomedImage, setZoomedImage] = useState(null);

  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

  const filteredItems = filter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  // useEffect to manage the slideshow intervals
  useEffect(() => {
    const intervalIds = {};

    filteredItems.forEach(item => {
      // Only set up a slideshow if there are multiple images
      if (item.images && item.images.length > 1) {
        intervalIds[`item-${item.id}`] = setInterval(() => {
          setCurrentImageIndex(prevIndexes => ({
            ...prevIndexes,
            [`item-${item.id}`]: (prevIndexes[`item-${item.id}`] || 0) + 1 >= item.images.length
              ? 0 // Reset to 0 if it's the last image
              : (prevIndexes[`item-${item.id}`] || 0) + 1,
          }));
        }, 1000); // Change image every 1 second (1000 milliseconds)
      }
    });

    // Cleanup function: Clear all intervals when component unmounts or dependencies change
    return () => {
      Object.values(intervalIds).forEach(clearInterval);
    };
  }, [filteredItems]); // Dependency array: re-run this effect if filteredItems changes

  // Helper function to get the currently displayed image for an item
  const getCurrentImage = (item) => {
    if (item.images && item.images.length > 0) {
      // If item has multiple images, use the tracked index
      return item.images[(currentImageIndex[`item-${item.id}`] || 0)];
    }
    // Otherwise, use the single 'image' property
    return item.image;
  };

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
            <div
              className="portfolio-image-container"
              onClick={() => setZoomedImage(getCurrentImage(item))} // Click to zoom
            >
              <img
                src={getCurrentImage(item)}
                alt={item.title}
              />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Modal for zoomed image */}
      {zoomedImage && (
        <div className="modal" onClick={() => setZoomedImage(null)}>
          <img src={zoomedImage} alt="Zoomed" className="modal-image" />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
