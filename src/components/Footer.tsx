import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube  } from 'react-icons/fa'; // Icons from react-icons
import { Link } from 'react-router-dom';
import '../styles/Footer.css'

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribed with:', email);
      setEmail(''); // Clear input after subscribing
    } else {
      console.log('Please enter a valid email address.');
    }
  };

  return (
    <footer className="footer">
      <div className='horizontal'>
        <div className='footer-customer-engagement'>
          <h1>Book Your Tour Today!</h1>
          <h4>Join us for an Unforgettable Holiday Planet Experience.</h4>
        </div>

        <div className="subscription-section">
          <div className="subscribe-container">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleInputChange}
              className="subscribe-input"
            />
            <button onClick={handleSubscribe} className="subscribe-button">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr />
      
      <div className="footer-content">
        <div className='footer-company-info'>
          <div className='about-us'>
            <img src="src/assets/logo.png" alt="logo" />
            <p>Discover the wonders of the world with our exclusive tours. Experience the magic of sunrise views, embark on thrilling adventures, and immerse yourself in rich local cultures. Each destination offers unique experiences, promising an unforgettable journey. Ready to explore?</p>
          </div>
          <div className='company-info'>        
            <div className="location seperate">
              <h4>Location</h4>
              <p>Holiday Planet</p>
              <p>Doha,</p>
              <p>Qatar.</p>
            </div>
            <div className='contact-us seperate'>
              <h4>Contact Us</h4>
              <p>+974 XXXX XXXX</p>
              <p>info@holidayplanettourism.com</p>
            </div>
            <div className='legals seperate'>
              <h4>Company & Legals</h4> 
              <Link to="/about-us">About Us</Link>
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
        </div>

        <div className='social-copyright'>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>

          <div className='copyright'>
            <p>© 2024 Holiday Planet All Right Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
