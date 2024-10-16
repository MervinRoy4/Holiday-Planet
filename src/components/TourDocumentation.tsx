import React from 'react';

const TourDocumentation: React.FC = () => {
  return (
    <section className="tour-documentation">
      <h3>Capture Your Unforgettable Moments With Us</h3>
      <div className="documentation-content">
        <div className="review">
          <p>"Mount Bromo's beauty is indescribable. The tour was fantastic!"</p>
          <span>- Muhammad Ali</span>
        </div>
        <div className="video-highlights">
          <h4>Video Highlights</h4>
          <video controls>
            <source src="path-to-video" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default TourDocumentation;
