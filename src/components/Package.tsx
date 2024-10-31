import '../styles/Package.css';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import HotelIcon from '@mui/icons-material/Hotel';
import FlightIcon from '@mui/icons-material/Flight';
import CabIcon from '@mui/icons-material/LocalTaxi';

interface ProductProps {
    image: string;
    title: string;
    city: string;
    days: number;
    description: string;
 }

export default function Product(props: ProductProps) {
    return (
        <div className="package-card">
            <img
                className="package-image"
                src={props.image}
                alt="product"
            />
            <h2>{props.title}</h2>

            <div className="city">
                <LocationOnRoundedIcon />
                <h4>{props.city}</h4>
            </div>

            <div className="days">
                <CalendarTodayRoundedIcon />
                <h4>{props.days} Days</h4>
            </div>

            <p>
            {props.description}
            </p>

            <div className="includes">
                <h4>Includes:</h4>
                <div className="include-item">
                    <HotelIcon />
                    <span>Hotel</span>
                </div>
                <div className="include-item">
                    <FlightIcon />
                    <span>Flights</span>
                </div>
                <div className="include-item">
                    <CabIcon />
                    <span>Cab</span>
                </div>
            </div>
        </div>
    );
}