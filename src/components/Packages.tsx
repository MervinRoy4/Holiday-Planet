import React from 'react';

const packages = [
  { name: 'Sunrise Spectacle', price: 35, description: 'A guided tour with a sunrise view.' },
  { name: 'Adventure Track', price: 58, description: 'For the adventurous souls.' },
  { name: 'Stargazing Escape', price: 99, description: 'A stargazing experience.' },
];

const Packages: React.FC = () => {
  return (
    <section className="packages">
      <h3>Choose Your Perfect Package</h3>
      <div className="package-cards">
        {packages.map((pkg, index) => (
          <div key={index} className="package-card">
            <h4>{pkg.name}</h4>
            <p>{pkg.description}</p>
            <p>${pkg.price}/person</p>
            <button>Get Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Packages;
