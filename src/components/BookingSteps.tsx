import React from 'react';

const BookingSteps: React.FC = () => {
  return (
    <section className="booking-steps">
      <h3>How to Book Your Tour</h3>
      <div className="steps">
        <div className="step">
          <h4>01. Choose Package</h4>
          <p>Select the best package for you.</p>
        </div>
        <div className="step">
          <h4>02. Confirm Availability</h4>
          <p>Check availability for your desired dates.</p>
        </div>
        <div className="step">
          <h4>03. Make a Reservation</h4>
          <p>Fill out the form and book.</p>
        </div>
        <div className="step">
          <h4>04. Receive Confirmation</h4>
          <p>Get your booking confirmation via email.</p>
        </div>
      </div>
    </section>
  );
}

export default BookingSteps;
