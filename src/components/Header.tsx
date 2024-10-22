import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="src/assets/logo_color.png" alt="logo" />
      </div>
      <nav className="navigation">
        <a href="index.html">Home</a>
        <a href="#tour-details">Tour Details</a>
        <a href="#travel-plan">Travel Plan</a>
        <a href="#packages">Packages</a>
        <a href="#testimonials">Testimonials</a>
      </nav>
      <div className='cta'>
        <button className="book-now">CONTACT US</button>
      </div>
    </header>
  );
}

export default Header;
