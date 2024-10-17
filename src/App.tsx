import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TourActivities from './components/TourActivities';
import Packages from './components/Packages';
import TourDocumentation from './components/TourDocumentation';
import BookingSteps from './components/BookingSteps';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <TourActivities />
      <Packages />
      <TourDocumentation />
      <BookingSteps />
      <Footer />
    </div>
  );
}

export default App;
