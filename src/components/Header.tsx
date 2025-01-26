import React, { useState } from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="src/assets/headerLogo.svg" alt="logo" />
        </div>
        
        <nav className="navigation">
          <a href="/">Home</a>
          <a href="#destination">Destination</a>          
          <a href="">Itinerary Details</a>
          <a href="#booking-steps">How to Book</a>
        </nav>

        <div className='cta'>
          <a href="tel:+97477575288" className="book-now">CONTACT US</a>
        </div>

        <button className="sidebar-toggle" onClick={toggleSidebar}>
          &#9776; {/* This is a hamburger icon */}
        </button>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <a href="/">Home</a>
          <a href="#destination">Destination</a>          
          <a href="">Itinerary Details</a>
          <a href="#booking-steps">How to Book</a>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Header;
