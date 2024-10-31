import React from 'react';
import "../styles/TourCarousel.css";
import Package from './Package.tsx';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TourCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
        };

    return (
        <div className="tour-packages">
            <Carousel responsive={responsive}>
            <Package />
            <Package />
            <Package />
            <Package />
            <Package />
            </Carousel>;
        </div>
    );
};

export default TourCarousel;
