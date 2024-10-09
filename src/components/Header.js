import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Hol<i>icay</i></h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#itineraries">Travel Itineraries</a></li>
          <li><a href="#planner">Find a planner</a></li>
        </ul>
      </nav>
      <div className="header-buttons">
        <button className="btn">Plan a trip</button>
      </div>
    </header>
  );
};

export default Header;
