import React, { useState } from 'react';
import '../styles/Subscribe.css';

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribed with:', email);
      setEmail(''); // Clear the input after subscribing
    } else {
      console.log('Please enter a valid email address.');
    }
  };

  return (
    <div className="subscribe-container">
      <input 
        type="email" 
        placeholder="Enter your email" 
        value={email}
        onChange={handleInputChange}
        className="subscribe-input"
      />
      <button 
        onClick={handleSubscribe}
        className="subscribe-button"
      >
        Subscribe
      </button>
    </div>
  );
};

export default Subscribe;
