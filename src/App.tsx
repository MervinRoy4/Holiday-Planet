import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Packages from './components/Packages';
import TourCarousel from './components/TourCarousel';
import BookingSteps from './components/BookingSteps';
import Footer from './components/Footer';


const packagesList = [
  {
    title: "Tropical Paradise Adventure",
    city: "Bali",
    days: 7,
    activityTags: ["Hiking", "Surfing", "Beach", "Culture"],
    description: "Experience the ultimate tropical getaway with activities ranging from surfing to hiking.",
    activities: ["Mount Batur Sunrise Hike", "Surfing at Kuta Beach", "Visit to Uluwatu Temple"],
  },
  {
    title: "European Escape",
    city: "Paris",
    days: 5,
    activityTags: ["Museum", "Sightseeing", "Cultural"],
    description: "A romantic getaway exploring the art and culture of Paris.",
    activities: ["Eiffel Tower visit", "Louvre Museum Tour", "Seine River Cruise"],
  },
  {
    title: "Safari Expedition",
    city: "Nairobi",
    days: 10,
    activityTags: ["Wildlife", "Adventure", "Photography"],
    description: "Explore the wild landscapes and stunning wildlife of Kenya.",
    activities: ["Maasai Mara Safari", "Nairobi National Park", "Giraffe Center Visit"],
  },
  {
    title: "Mountain Trek",
    city: "Nepal",
    days: 14,
    activityTags: ["Hiking", "Camping", "Adventure"],
    description: "A challenging trek through the stunning Himalayan mountains.",
    activities: ["Everest Base Camp Trek", "Annapurna Circuit", "Poon Hill Hike"],
  },
  {
    title: "Island Escape",
    city: "Maldives",
    days: 6,
    activityTags: ["Beach", "Relaxation", "Snorkeling"],
    description: "A peaceful retreat on the beautiful islands of the Maldives.",
    activities: ["Snorkeling in Coral Reefs", "Sunset Cruise", "Spa Day"],
  }
];

const tourPackagesData = [
  {
      title: "Affordable 5 Days 4 Nights Turkey Family Tour Package",
      city: "Istanbul (2N), Cappadocia (2N)",
      days: 5,
      services: ["Hotel", "Flights", "Guide"],
      description: "Get ready to immerse yourself in the rich history, stunning landscapes, and vibrant culture of Turkey with our exclusive affordable 5 days 4 nights Turkey family tour package. Pack your bags and join us on a journey that promises unforgettable memories, all at an unbeatable price.",
      image: "src/assets/packageImages/georgia.jpg"
  },
  {
      title: "Beach Relaxation",
      city: "Maldives",
      days: 5,
      services: ["Hotel", "Meals", "Snorkeling"],
      description: "Relax on the beautiful beaches of Maldives.",
      image: "path_to_image2.jpg"
  },
  {
      title: "Cultural Exploration",
      city: "Rome",
      days: 6,
      services: ["Hotel", "Tours", "Meals"],
      description: "Explore the rich history and culture of Rome.",
      image: "path_to_image3.jpg"
  }
];


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <div className="carousel-container">
      <div className="carousel">
        {packagesList.map((pkg, index) => (
          <Packages key={index} packageData={pkg} />
        ))}
      </div>
      </div>
      <TourCarousel />
      <BookingSteps />
      <Footer />
    </div>
  );
}

export default App;
