import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar.tsx';
import HeroSection from './components/HeroSection';
import TourCarousel from './components/TourCarousel';
import BookingSteps from './components/BookingSteps';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs.tsx';
import Terms from './pages/Terms.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import Contact from './pages/Contact.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">

        <Routes>
          {/* Home Route - Your main sections */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <HeroSection />
                <TourCarousel />
                <BookingSteps />
              </>
            }
          />

          {/* About Us Route */}
          <Route path="/about-us" element={
            <>
            <Navbar />
            <AboutUs />            
            </>
            } />

          {/* Privacy Policy Route */}
          <Route path="/privacy-policy" element={
            <>
            <Navbar />
            <PrivacyPolicy />            
            </>
            } />


          <Route path="/terms-and-conditions" element={
            <>
            <Navbar />
            <Terms />            
            </>
            } />

          {/* Contact Page Route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
