import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; // Import the CSS file

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <p>Welcome to the Admin Dashboard!</p>
      <nav className="nav">
        <ul>
          <li><Link to="/admin/manage-companies">Manage Companies</Link></li>
          <li><Link to="/admin/communication-methods">Communication Methods</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;
