import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Unforgettable Mount Bromo Sunrise Tour</h2>
        <p>Magic of East Java Tour</p>
        <p>Date: 24 July 2024</p>
        <button className="book-button">Book Now</button>
      </div>
      <div className="hero-image">
        <img src="src/assets/hero_image.jpg" alt="Mount Bromo" />
      </div>
    </section>
  );
}

export default HeroSection;
