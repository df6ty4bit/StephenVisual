import React, { useState, useEffect } from 'react';
import portfolioItems from '../data/portfolioData';
import './Portfolio.css';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [zoomedImage, setZoomedImage] = useState(null);

  // Initialize loadingStates only for items that are *single images*.
  // For items with 'images' array, we'll assume they don't need a spinner
  // as the initial load might be handled differently or we just want to skip it.
  const [loadingStates, setLoadingStates] = useState(() => {
    return portfolioItems.reduce((acc, item) => {
      // Only set initial loading state to true if it's a single image item
      if (item.image && (!item.images || item.images.length <= 1)) {
        acc[`item-${item.id}`] = true;
      } else {
        acc[`item-${item.id}`] = false; // Mark slideshows/multi-image items as not loading initially for spinner purpose
      }
      return acc;
    }, {});
  });

  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

  const filteredItems = filter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  // Effect for image slideshow (only changes currentImageIndex, no loading state reset for slideshows)
  useEffect(() => {
    const intervalIds = {};

    filteredItems.forEach(item => {
      // Only set up a slideshow if there are multiple images
      if (item.images && item.images.length > 1) {
        intervalIds[`item-${item.id}`] = setInterval(() => {
          setCurrentImageIndex(prevIndexes => {
            const nextIndex = (prevIndexes[`item-${item.id}`] || 0) + 1 >= item.images.length
              ? 0
              : (prevIndexes[`item-${item.id}`] || 0) + 1;

            // IMPORTANT: Removed `setLoadingStates` here for slideshows.
            // Slideshows will not show a spinner on image change.

            return {
              ...prevIndexes,
              [`item-${item.id}`]: nextIndex,
            };
          });
        }, 1000); // Change image every 1 second
      }
    });

    // Cleanup function: Clear all intervals when component unmounts or dependencies change
    return () => {
      Object.values(intervalIds).forEach(clearInterval);
    };
  }, [filteredItems]);

  // Helper function to get the current image URL for an item
  const getCurrentImage = (item) => {
    if (item.images && item.images.length > 0) {
      // If item has multiple images, use the tracked index
      return item.images[(currentImageIndex[`item-${item.id}`] || 0)];
    }
    // Otherwise, use the single 'image' property
    return item.image;
  };

  // Handler for when an image successfully loads (only relevant for single images displaying spinner)
  const handleImageLoad = (itemId) => {
    // Only update loading state if the item is a single image item
    const item = portfolioItems.find(i => i.id === itemId);
    if (item && item.image && (!item.images || item.images.length <= 1)) {
      setLoadingStates(prevStates => ({ ...prevStates, [`item-${itemId}`]: false }));
    }
  };

  // Handler for when an image fails to load (only relevant for single images displaying spinner)
  const handleImageError = (itemId) => {
    // Only update loading state if the item is a single image item
    const item = portfolioItems.find(i => i.id === itemId);
    if (item && item.image && (!item.images || item.images.length <= 1)) {
      setLoadingStates(prevStates => ({ ...prevStates, [`item-${itemId}`]: 'error' }));
    }
    console.error(`Error loading image for item ${itemId}`);
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
        {filteredItems.map(item => {
          // Determine if this item is a single image item (not a slideshow)
          const isSingleImageItem = item.image && (!item.images || item.images.length <= 1);

          return (
            <div key={item.id} className="portfolio-item">
              <div
                className="portfolio-image-container"
                // Only allow click-to-zoom if image is not currently loading or in error state for single images
                // For slideshows, always allow click
                onClick={() => {
                  if (isSingleImageItem && loadingStates[`item-${item.id}`]) return; // Prevent click if single image is loading/error
                  setZoomedImage(getCurrentImage(item));
                }}
              >
                {/* Show spinner ONLY if it's a single image item and it's loading */}
                {isSingleImageItem && loadingStates[`item-${item.id}`] === true && (
                  <div className="loading-spinner">
                    <FontAwesomeIcon icon={faSpinner} spin size="3x" />
                  </div>
                )}
                {/* Show error message ONLY if it's a single image item and it errored */}
                {isSingleImageItem && loadingStates[`item-${item.id}`] === 'error' && (
                  <div className="loading-error">
                    <span>Image failed to load.</span>
                  </div>
                )}
                {/* The actual image tag */}
                <img
                  src={getCurrentImage(item)}
                  alt={item.title}
                  // Hide image ONLY if it's a single image item and it's loading/errored
                  style={{ display: (isSingleImageItem && loadingStates[`item-${item.id}`]) ? 'none' : 'block' }}
                  onLoad={() => handleImageLoad(item.id)}
                  onError={() => handleImageError(item.id)}
                />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>

      {zoomedImage && (
        <div className="modal" onClick={() => setZoomedImage(null)}>
          <img src={zoomedImage} alt="Zoomed" className="modal-image" />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
