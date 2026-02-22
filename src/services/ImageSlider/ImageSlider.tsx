import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { sliderData } from './sliderData'; // <--- Import the data here
import './ImageSlider.css';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  // Navigation Logic
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? sliderData.length - 1 : currentIndex - 1);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === sliderData.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  }, [currentIndex]);

  // Swipe Handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
  };

  // Auto-play Timer
  useEffect(() => {
    let sliderInterval;
    if (isPlaying) {
      sliderInterval = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(sliderInterval);
  }, [isPlaying, nextSlide]);

  return (
    <div className="slider-container">
      <div 
        className="slide-wrapper"
        style={{ backgroundImage: `url(${sliderData[currentIndex].url})` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="slide-overlay" />
        
        <div className="slide-content" key={currentIndex}>
          <h2 className="slide-title">{sliderData[currentIndex].title}</h2>
          <p className="slide-description">{sliderData[currentIndex].description}</p>
        </div>

        <div className="nav-arrow left-arrow" onClick={prevSlide} aria-label="Previous Slide">
          <ChevronLeft size={30} />
        </div>
        <div className="nav-arrow right-arrow" onClick={nextSlide} aria-label="Next Slide">
          <ChevronRight size={30} />
        </div>
      </div>

      <div className="controls-container">
        <button 
          onClick={() => setIsPlaying(!isPlaying)} 
          className="play-pause-btn"
          title={isPlaying ? "Pause Autoplay" : "Resume Autoplay"}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        
        <div className="dots-wrapper">
          {sliderData.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`dot ${currentIndex === index ? 'active' : 'inactive'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
