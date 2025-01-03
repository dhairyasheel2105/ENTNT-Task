import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const OverdueCommunicationTrends = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Overdue Communications',
        data: [5, 10, 7, 8, 3],
        fill: false,
        borderColor: '#ff5733',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="trend-container">
      <h2>Overdue Communication Trends</h2>
      <Line data={data} />
    </div>
  );
};

export default OverdueCommunicationTrends;
