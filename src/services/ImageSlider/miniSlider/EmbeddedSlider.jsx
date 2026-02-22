import React, { useState } from 'react';
import { miniSliderData } from './miniSliderData'; // Import the new data file
import './EmbeddedSlider.css';

const EmbeddedSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  // Swipe logic
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    
    if (distance > minSwipeDistance && currentIndex < miniSliderData.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else if (distance < -minSwipeDistance && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  /**
   * THE MATH:
   * To center a 60% wide card:
   * We need to offset the track by (index * width)
   * Plus an adjustment to account for the "margins" (20% on each side)
   */
  const calculateOffset = () => {
    const cardWidth = 60; // matching CSS min-width
    const gap = 16; // 1rem gap
    const centerAdjustment = (100 - cardWidth) / 2;
    return `calc(${centerAdjustment}% - ${currentIndex * cardWidth}% - ${currentIndex * gap}px)`;
  };

  return (
    <div className="embedded-slider-root">
      <div className="slider-viewport">
        <div 
          className="slide-track"
          style={{ transform: `translateX(${calculateOffset()})` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {miniSliderData.map((item, index) => (
            <div
              key={index}
              className={`mini-card ${index === currentIndex ? 'active' : 'inactive'}`}
              style={{ backgroundImage: `url(${item.url})` }}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="glass-info">
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Pagination Dots */}
      <div className="mini-dots">
        {miniSliderData.map((_, i) => (
          <div 
            key={i}
            className={`mini-dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default EmbeddedSlider;
