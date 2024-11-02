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
          title: "Scenic Tokyo 5 Nights 6 Days Tour Package from Qatar",
          city: "Tokyo",
          days: 5,
          services: ["Hotel", "Meals", "Snorkeling"],
          description: "Explore the vibrant city of Tokyo with Tokyo 5 nights 6 days tour package from Qatar. You can enjoy visit at iconic landmarks, including the historic Senso-ji Temple, the lively streets of Shibuya, and the peaceful gardens of the Imperial Palace. Enjoy a day trip to Mount Fuji, indulge in delicious sushi, and experience the unique culture of Akihabara. With comfortable accommodation and guided tours, this package ensures an unforgettable blend of culture and history. This astonishing destination has something for everyone, be it a big-time foodie or a nature enthusiast. Plan your Tokyo trip today! ",
          image: "src/assets/packageImages/georgia.jpg"
      },
      {
          title: "5 Nights 6 Days Mtskheta Tour package",
          city: "Mtskheta",
          days: 6,
          services: ["Hotel", "Tours", "Meals"],
          description: "Uncover the hidden gems of Georgia and delve into the historical wonders that await you. Explore some top attractions such as  Nekresi Monastery complex, Marani, Alaverdi Cathedral and Ski resort Gudauri as well as enjoy activities like hiking and nature walk.",
          image: "src/assets/packageImages/georgia.jpg"
      }
    ];


    const packagex = tourPackagesData.map(item => (
      <Package
        title={item.title}
        image={item.image}
        city={item.city}
        days={item.days}
        description={item.description}
      />
    ))

    return (
        <div className="tour-packages" id="packages">
            <Carousel responsive={responsive}>{packagex}</Carousel>
        </div>
    );
};

export default TourCarousel;
