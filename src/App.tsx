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
import Destination from './components/Destination.tsx';

const App: React.FC = () => {
  const carouselItems = [
    { imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/07/a8/2c/caption.jpg?w=1400&h=500&s=1', destination: 'Paris', price: '$500' },
    { imageUrl: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', destination: 'Tokyo', price: '$700' },
    { imageUrl: 'https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg', destination: 'New York', price: '$450' },
    { imageUrl: 'https://2017-2021.state.gov/wp-content/uploads/2020/11/georgia_tbilisi_skyline-2560x1300.jpg', destination: 'Georgia', price: '4150 QAR' },
    { imageUrl: 'https://media.cntraveller.com/photos/63eb5a36b515236831979f64/16:9/w_1920%2Cc_limit/GettyImages-1145042281.jpeg  ', destination: 'Bali', price: '2450 QAR' },
  ];

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
                <Destination items={carouselItems}/>
                <h1 className='title'>Itinerary Details</h1>              
                <TourCarousel />
                <BookingSteps/>
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
