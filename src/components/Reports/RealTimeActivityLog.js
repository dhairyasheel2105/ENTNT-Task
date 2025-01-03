import React from 'react';

const RealTimeActivityLog = () => {
  const activities = [
    { date: '2025-01-01', company: 'Company A', method: 'Email', status: 'Sent' },
    { date: '2025-01-02', company: 'Company B', method: 'LinkedIn Post', status: 'Scheduled' },
  ];

  return (
    <div className="log-container">
      <h2>Real-Time Activity Log</h2>
      <table className="activity-log-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Company</th>
            <th>Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index}>
              <td>{activity.date}</td>
              <td>{activity.company}</td>
              <td>{activity.method}</td>
              <td>{activity.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RealTimeActivityLog;
