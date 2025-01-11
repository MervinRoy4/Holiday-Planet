import React from "react";
import "./Slider.css"; // Make sure to create and link the CSS file

const Slider: React.FC = () => {
  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slides">
          {/* Slide 1 */}
          <input type="radio" name="radio-btn" id="radio1" />
          {/* Slide 2 */}
          <input type="radio" name="radio-btn" id="radio2" />
          {/* Slide 3 */}
          <input type="radio" name="radio-btn" id="radio3" />
          {/* Slide 4 */}
          <input type="radio" name="radio-btn" id="radio4" />

          <div className="slide first">
            <img src="/images/image1.jpg" alt="Slide 1" />
          </div>
          <div className="slide">
            <img src="/images/image2.jpg" alt="Slide 2" />
          </div>
          <div className="slide">
            <img src="/images/image3.jpg" alt="Slide 3" />
          </div>
          <div className="slide">
            <img src="/images/image4.jpg" alt="Slide 4" />
          </div>

          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
        </div>

        <div className="manual-navigation">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
        </div>
      </div>
    </div>
  );
};

export default Slider;
