import React from 'react';
import { Link } from 'react-router-dom';
import './UserDashboard.css';

const UserDashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>User Dashboard</h1>
        <p>Welcome back! Explore your calendar, notifications, and more.</p>
      </header>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <Link to="/calendar" className="dashboard-link">
            <div className="card-content">
              <h2>Calendar</h2>
              <p>View your events and schedule.</p>
            </div>
          </Link>
        </div>
        <div className="dashboard-card">
          <Link to="/notifications" className="dashboard-link">
            <div className="card-content">
              <h2>Notifications</h2>
              <p>Check your latest notifications.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
