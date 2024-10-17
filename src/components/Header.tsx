import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Mount Bromo Sunrise Tour</h1>
      </div>
      <nav className="navigation">
        <a href="#tour-details">Tour Details</a>
        <a href="#travel-plan">Travel Plan</a>
        <a href="#packages">Packages</a>
        <a href="#testimonials">Testimonials</a>
        <button className="book-now">Book Now</button>
      </nav>
    </header>
  );
}

export default Header;
