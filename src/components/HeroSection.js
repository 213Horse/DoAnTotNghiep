import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Plan & book your next vacations <span>with 1 all-in price</span></h1>
        <p>Say goodbye to individual bookings on websites, get an all-in price for your private vacations today</p>
        <div className="stats">
          <div>100+ Trips Planned</div>
          <div>80+ Booked Trips</div>
          <div>20+ Hours saved per trip</div>
        </div>
      </div>
      <button className="video-btn">See how holicay works</button>
    </section>
  );
};

export default HeroSection;
