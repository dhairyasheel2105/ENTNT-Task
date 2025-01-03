import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Your Profile</h1>
        <p>Manage your personal information and settings</p>
      </div>
      <div className="profile-info">
        <div className="profile-picture">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="profile-img"
          />
          <button className="change-pic-btn">Change Picture</button>
        </div>
        <div className="profile-details">
          <h2>Dhairyasheel Balasaheb Ingale</h2>
          <p>Email: dhairyasheel@example.com</p>
          <p>Location: Kolhapur, India</p>
          <button className="edit-btn">Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
