import React from 'react';

const EngagementEffectivenessDashboard = () => {
  const engagementData = [
    { method: 'Email', successRate: 70 },
    { method: 'Phone Call', successRate: 85 },
    { method: 'LinkedIn Message', successRate: 55 },
  ];

  return (
    <div className="dashboard-container">
      <h2>Engagement Effectiveness Dashboard</h2>
      <table className="engagement-table">
        <thead>
          <tr>
            <th>Communication Method</th>
            <th>Success Rate (%)</th>
          </tr>
        </thead>
        <tbody>
          {engagementData.map((data, index) => (
            <tr key={index}>
              <td>{data.method}</td>
              <td>{data.successRate}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EngagementEffectivenessDashboard;
