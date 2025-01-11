import React, { useRef, useState, useEffect } from 'react';
import styles from '../styles/Carousel.module.css'; // Import CSS module

interface SliderItem {
  image: string;
  title: string;
  description: string;
}

const Carousel: React.FC = () => {
  const [sliderItems, setSliderItems] = useState<SliderItem[]>([
    {
      image: '/assets/heroImages/pexels-timrael-2474690.jpg',
      title: 'Mountain Sunrise',
      description: 'Experience the serene beauty of mountain sunrises.',
    },
    {
      image: '/assets/heroImages/denis-arslanbekov-b-eGDk5_gPo-unsplash.jpg',
      title: 'Urban Landscape',
      description: 'Discover the charm of bustling cityscapes.',
    },
    {
      image: '/assets/heroImages/pexels-belle-co-99483-402028.jpg',
      title: 'Peaceful Beach',
      description: 'Relax by the calming waves of the ocean.',
    },
    {
      image: '/assets/heroImages/amazing-autumn-scenery-santa-maddalena-village-with-church-colorful-trees-meadows-rising-sun-rays-dolomite-alps-italy.jpg',
      title: 'Autumn Vibes',
      description: 'Enjoy the vibrant colors of autumn in the Dolomites.',
    },
    {
      image: '/assets/heroImages/photo-1565967511849-76a60a516170.jpg',
      title: 'Singapore',
      description: 'Enjoy the vibrant colors of Singapore.',
    },
  ]);

  const carouselRef = useRef<HTMLDivElement>(null);
  const timeRunning = 3000;
  const timeAutoNext = 17000;

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
        {sliderItems.map((item, index) => (
          <div className={styles.item} key={index}>
            <img src={item.image} alt={item.title} />
            <div className={styles.content}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Thumbnails */}
      <div className={styles.thumbnail}>
        {sliderItems.map((item, index) => (
          <div
            className={`${styles.thumbnailItem} ${
              index === 0 ? styles.activeThumbnail : ''
            }`}
            key={index}
          >
            <img src={item.image} alt={item.title} />
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
