import React, { useState } from 'react';
import './Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Task 1 Due', dueDate: '2025-01-04', status: 'due' },
    { id: 2, title: 'Task 2 Overdue', dueDate: '2024-12-30', status: 'overdue' },
    { id: 3, title: 'Task 3 Due', dueDate: '2025-01-05', status: 'due' },
    { id: 4, title: 'Task 4 Overdue', dueDate: '2024-12-28', status: 'overdue' },
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, status: 'read' } : notification
    ));
  };

  const filteredNotifications = notifications.filter(notification =>
    notification.status !== 'read'
  );

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      <p>Stay up-to-date with your overdue and due communications.</p>

      <div className="notification-list">
        {filteredNotifications.length === 0 ? (
          <p>No new notifications</p>
        ) : (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`notification-card ${notification.status === 'overdue' ? 'overdue' : ''}`}
            >
              <h3>{notification.title}</h3>
              <p>Due Date: {notification.dueDate}</p>
              <button
                className="mark-read-btn"
                onClick={() => markAsRead(notification.id)}
              >
                Mark as Read
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;
