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

            <div className="includes">
                <div className="icon-wrapper">
                    <HotelIcon />
                </div>
                <div className="icon-wrapper">
                    <FlightIcon />
                </div>
                <div className="icon-wrapper">
                    <CabIcon />
                </div>
            </div>
        </div>
    );
}