import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TourCarousel from './components/TourCarousel';
import BookingSteps from './components/BookingSteps';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <TourCarousel />
      <BookingSteps />5a
      <Footer />
    </div>
  );
}

export default App;
