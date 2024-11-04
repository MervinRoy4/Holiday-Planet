import React from 'react';
import '../styles/HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Embark on your dream holiday adventure with<br /> Holiday planet</h2>
      </div>
      <div className="hero-image">
        <img src="src/assets/heroImages/high-angle-view-historic-ushguli-village-scenery-georgia.webp" alt="Mount Bromo" />
      </div>
    </section>
  );
}

export default HeroSection;
