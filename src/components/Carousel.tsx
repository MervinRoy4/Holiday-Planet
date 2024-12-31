import React, { useRef, useState, useEffect } from 'react';
import styles from '../styles/Carousel.module.css'; // Import CSS module

const Carousel: React.FC = () => {
  const [sliderItems, setSliderItems] = useState<string[]>([
    'https://raw.githubusercontent.com/HoanghoDev/slider_1/main/image/img1.jpg',
    'https://raw.githubusercontent.com/HoanghoDev/slider_1/main/image/img2.jpg',
    'https://raw.githubusercontent.com/HoanghoDev/slider_1/main/image/img3.jpg',
    'https://raw.githubusercontent.com/HoanghoDev/slider_1/main/image/img4.jpg',
  ]);

  const carouselRef = useRef<HTMLDivElement>(null);
  const timeRunning = 3000;
  const timeAutoNext = 7000;

  const [autoNextTimeout, setAutoNextTimeout] = useState<NodeJS.Timeout | null>(null);
  const [animationTimeout, setAnimationTimeout] = useState<NodeJS.Timeout | null>(null);

  const showNext = () => {
    setSliderItems((prev) => [...prev.slice(1), prev[0]]);
    triggerAnimation(styles.next);
  };

  const showPrev = () => {
    setSliderItems((prev) => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
    triggerAnimation(styles.prev);
  };

  const triggerAnimation = (animation: string) => {
    if (carouselRef.current) {
      carouselRef.current.classList.add(animation);
    }

    if (animationTimeout) clearTimeout(animationTimeout);

    const timeout = setTimeout(() => {
      if (carouselRef.current) {
        carouselRef.current.classList.remove(styles.next);
        carouselRef.current.classList.remove(styles.prev);
      }
    }, timeRunning);

    setAnimationTimeout(timeout);
  };

  useEffect(() => {
    if (autoNextTimeout) clearTimeout(autoNextTimeout);

    const timeout = setTimeout(() => {
      showNext();
    }, timeAutoNext);

    setAutoNextTimeout(timeout);

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [sliderItems]);

  return (
    <div className={styles.carousel} ref={carouselRef}>
      {/* Slider */}
      <div className={styles.list}>
        {sliderItems.map((image, index) => (
          <div className={styles.item} key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Thumbnails */}
      <div className={styles.thumbnail}>
        {sliderItems.map((image, index) => (
          <div className={styles.thumbnailItem} key={index}>
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className={styles.arrows}>
        <button onClick={showPrev}>&lt;</button>
        <button onClick={showNext}>&gt;</button>
      </div>
    </div>
  );
};

export default Carousel;
