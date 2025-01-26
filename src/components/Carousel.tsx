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
      title: 'Heart of Tbilisi, Georgia',
      description: 'Through cobblestone streets illuminated by the warm glow of evening lights, the perfect blend of ancient history and modern charm',
    },
    {
      image: '/assets/heroImages/pexels-belle-co-99483-402028.jpg',
      title: 'Kiyomizu-dera Temple',
      description: "Kyoto's iconic Kiyomizu-dera Temple, a true masterpiece of Japanese beauty.",
    },
    {
      image: 'src/assets/heroImages/turkey.jpg',
      title: 'Istanbul city, Turkey',
      description: 'Where East meets West, history whispers through ancient streets, and vibrant culture dances along the Bosphorus.',
    },
    {
      image: '/assets/heroImages/photo-1565967511849-76a60a516170.jpg',
      title: 'Majestic Merlion',
      description: 'At the vibrant heart of Singapore, epitomizes the city’s blend of culture and innovation.',
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
        {sliderItems.map((item, index) => {
          // Calculate next image index for thumbnails
          const nextIndex = (index + 1) % sliderItems.length;
          return (
            <div
              className={`${styles.thumbnailItem} ${
                index === 1 ? styles.activeThumbnail : ''
              }`}
              key={nextIndex}
            >
              <img src={sliderItems[nextIndex].image} alt={sliderItems[nextIndex].title} />
            </div>
          );
        })}
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
