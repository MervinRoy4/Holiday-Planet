import React from "react";
import '../styles/Package.css';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';

export default function Product() {
    return (
        <div className="package-card">
            <img 
                className="package-image"
                src="src/assets/packageImages/georgia.jpg"
                alt="product">
            </img>
            <h2>Tour Title</h2>
            <h3><LocationOnRoundedIcon />City</h3>
            <h4><CalendarTodayRoundedIcon /> Days</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, odio ipsam est debitis, dolorem nam praesentium aperiam recusandae blanditiis cum consequuntur consequatur, assumenda dolorum ducimus sunt fugit qui adipisci modi!</p>
        </div>
    )
}