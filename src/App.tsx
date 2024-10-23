import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BookingSteps from './components/BookingSteps';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <BookingSteps />
      <Footer />
    </div>
  );
}

export default App;
