import React, { useState } from 'react';
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
        <div className='about-us'>
          <img src="src/assets/logo.png" alt="logo" />
          <p>Discover the awe-inspiring beauty of Mount Bromo with our exclusive sunrise tours. Witness the breathtaking sunrise from the summit. embark on thrilling Jeep adventures, and immerse yourself in the rich local culture.</p>
          <a href="">More About Us</a>
        </div>
        <div className="company-info">
          <h4>Location</h4>
          <p>Holiday Planet</p>
          <p>Address: Jl. Raya Bromo, East Java, Indonesia</p>
          <p>lfjhg;u;lkd;lkgj</p>
        </div>
        <div>
          <h4>Contact Us</h4>
          <p>+62 123 456 7890</p>
          <p>info@holiday-planet.com</p>
        </div>
        <div>
          <h4>Company & Legals</h4> 
          <p>About us</p>
          <p>Frequently Ask Question</p>
          <p>Term of Services</p>
          <p>License</p>
        </div>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
        <div className='copyright'>
          <p>© 2024 Holiday Planet All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
