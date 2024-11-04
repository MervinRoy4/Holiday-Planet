import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import '../styles/BookingSteps.css';

const BookingSteps: React.FC = () => {
  return (
    <section className="booking-steps" id='booking-steps'>
      <h1>How to Book Your Tour</h1>

      <div className='table'>
        <div className='instruction'>
          <h3>4 Easy Steps</h3>
          <p>Booking your Holiday Planet Adventure is easy and straightforward. Follow these four simple steps to secure your unforgettable experience.</p>
          <a href="" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              Book Your Tour
              <MdArrowOutward className='icon'/>
          </a>
        </div>
        <div className="steps">
          <div className="step step-one">
            <h3>01.</h3>
            <h4>Choose Package</h4>
            <p>Visit our website and explore the various tour packages we offer. Select the one tat best suits your interests and make appointment.</p>
          </div>
          <div className="step step-two">
            <h3>02.</h3>
            <h4>Confirm Availability</h4>
            <p>Check the availability for your preferred tour dates. Contact us and our customer service team will assist you with any questions and confirm the available slots.</p>
          </div>
          <div className="step step-three">
            <h3>03.</h3>
            <h4>Make a Reservation</h4>
            <p>Once you've confirmed availability. fill out our online reservation form, including the chosen package, date. Number of participants. and any special requests.</p>
          </div>
          <div className="step step-four">
            <h3>04.</h3>
            <h4>Receive Confirmation</h4>
            <p>After your payments is processed. you'll receive a booking Confirmation via email. Include all the necessary details of your tour. Includiog meeting points and itineraries.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingSteps;
