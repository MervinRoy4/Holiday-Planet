import React, { useState, useEffect } from 'react';
import '../styles/HeroSlider.css';

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["src/assets/packageImages/japan-tour-banner.jpg.webp", "src/assets/packageImages/georgia.jpg", "src/assets/packageImages/DNc9l9gUQAA3Azg  - Tokyo Japan.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide})` }}>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
