import React from 'react';

const activities = [
  { title: "Jeep Exploration", description: "Explore the vast caldera" },
  { title: "Sunrise View", description: "View from the summit" },
  { title: "Cultural Insights Tour", description: "Learn about the culture" },
];

const TourActivities: React.FC = () => {
  return (
    <section className="tour-activities">
      <h3>Our Tour Package Ensures A Seamless And Memorable Adventure</h3>
      <div className="activity-cards">
        {activities.map((activity, index) => (
          <div key={index} className="activity-card">
            <h4>{activity.title}</h4>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TourActivities;
