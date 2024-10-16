import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="company-info">
          <h4>Mount Bromo Sunrise Tour</h4>
          <p>Address: Jl. Raya Bromo, East Java, Indonesia</p>
          <p>Phone: +62 345 789 456</p>
        </div>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
