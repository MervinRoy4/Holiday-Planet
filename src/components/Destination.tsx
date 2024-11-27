import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Destination.css';

interface CarouselItem {
  imageUrl: string;
  destination: string;
  price: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Destination: React.FC<CarouselProps> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default to 3 slides on desktop
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "48px", // Adds 40px padding to the sides of the center slide
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // For screens below 1024px
        settings: {
          centerMode: false,
          slidesToShow: 2, // Show 2 slides on medium screens
        },
      },
      {
        breakpoint: 768, // For screens below 768px
        settings: {
          centerMode: true,
          slidesToShow: 1, // Show 1 slide on small screens
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index} className="carousel-item">
          <div className="carousel-image" style={{ backgroundImage: `url(${item.imageUrl})` }}>
            <div className="carousel-overlay">
              <div className="carousel-info">
                <h2>{item.destination}</h2>
                <p>{item.price}</p>
              </div>
              <button className="carousel-button">Book Now</button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Destination;
