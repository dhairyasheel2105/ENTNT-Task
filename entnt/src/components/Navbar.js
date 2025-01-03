import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h2>ENTNT APP</h2>
        </div>
        <nav className="nav-links">
          <ul>
            <li><Link to="/">User Dashboard</Link></li>
            <li><Link to="/admin">Admin Dashboard</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
            <li><Link to="/notifications">Notifications</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            {/* Add the Report Link */}
            <li><Link to="/report">Report</Link></li>
          </ul>
        </nav>
        <div className="user-profile">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User Profile" className="profile-pic"/>
          <span className="username">Dhairyasheel</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
