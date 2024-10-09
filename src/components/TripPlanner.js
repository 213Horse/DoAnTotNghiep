import React, { useState } from 'react';
import './TripPlanner.css';

const TripPlanner = () => {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState({
    startDate: '2024-11-07',
    endDate: '2024-11-13',
  });

  const handleStartDateChange = (e) => {
    setDates({ ...dates, startDate: e.target.value });
  };

  const handleEndDateChange = (e) => {
    setDates({ ...dates, endDate: e.target.value });
  };

  return (
    <section className="trip-planner">
      <h2>Trip Planner</h2>
      <input
        type="text"
        placeholder="Where to?"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <div className="date-inputs">
        <input
          type="date"
          value={dates.startDate}
          onChange={handleStartDateChange}
        />
        <input
          type="date"
          value={dates.endDate}
          onChange={handleEndDateChange}
        />
      </div>
      <label>
        <input type="checkbox" />
        Let AI create a first draft for you
      </label>
      <button className="start-planning-btn">Start Planning</button>
    </section>
  );
};

export default TripPlanner;
