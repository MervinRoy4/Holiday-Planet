import React from "react";
import "../styles/Packages.css";

// Define types for the package data
interface PackageData {
  title: string;
  city: string;
  days: number;
  activityTags: string[];
  description: string;
  activities: string[];
}

// Main component to display package details
const Packages: React.FC<{ packageData: PackageData }> = ({ packageData }) => {
  const { title, city, days, activityTags, description, activities } = packageData;

  return (
    <div className="package-container">
      <h1 className="title">{title}</h1>
      <p className="city">City: {city}</p>
      <p className="days">Days: {days}</p>

      <div className="tag-container">
        {activityTags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="description-container">
        <h2>Description</h2>
        <p>{description}</p>
      </div>

      <div className="activities-container">
        <h3>Activities</h3>
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Packages;
