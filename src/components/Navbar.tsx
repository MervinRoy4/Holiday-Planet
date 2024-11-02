import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src="src/assets/logo_color.png" alt="logo" />
        </div>
        
        <nav className="navigation">
          <a href="/">Home</a>
          <a href="#tour-details">Tour Details</a>
          <a href="#travel-plan">Travel Plan</a>
          <a href="#packages">Packages</a>
        </nav>

        <div className='cta'>
          <button className="book-now">CONTACT US</button>
        </div>

        <button className="sidebar-toggle" onClick={toggleSidebar}>
          &#9776; {/* This is a hamburger icon */}
        </button>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="#tour-details">Tour Details</a>
        <a href="#travel-plan">Travel Plan</a>
        <a href="#packages">Packages</a>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Navbar;
