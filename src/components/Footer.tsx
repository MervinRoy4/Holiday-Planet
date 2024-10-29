import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube  } from 'react-icons/fa'; // Icons from react-icons
import { MdArrowOutward } from "react-icons/md";
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
            <p>Discover the awe-inspiring beauty of Mount Bromo with our exclusive sunrise tours. Witness the breathtaking sunrise from the summit. embark on thrilling Jeep adventures, and immerse yourself in the rich local culture.</p>
            <a href="">More About Us<MdArrowOutward /></a>
          </div>
          <div className='company-info'>        
            <div className="location seperate">
              <h4>Location</h4>
              <p>Holiday Planet</p>
              <p>Address: Jl. Raya Bromo, East Java, Indonesia</p>
              <p>lfjhg;u;lkd;lkgj</p>
            </div>
            <div className='contact-us seperate'>
              <h4>Contact Us</h4>
              <p>+62 123 456 7890</p>
              <p>info@holidayplanettourism.com</p>
            </div>
            <div className='legals seperate'>
              <h4>Company & Legals</h4> 
              <p>About us</p>
              <p>Frequently Ask Question</p>
              <p>Term of Services</p>
              <p>License</p>
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
