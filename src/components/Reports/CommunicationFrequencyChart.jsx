import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CommunicationFrequencyChart = () => {
  const data = {
    labels: ['LinkedIn Post', 'Email', 'Phone Call'],
    datasets: [
      {
        label: 'Frequency',
        data: [12, 19, 3],
        backgroundColor: ['#4caf50', '#2196f3', '#ff9800'],
      },
    ],
  };

  useEffect(() => {
    // Cleanup the chart when the component is unmounted
    return () => {
      const chartInstances = ChartJS.getChartInstances();
      chartInstances.forEach((chart) => chart.destroy());
    };
  }, []);

  return <Bar data={data} />;
};

export default CommunicationFrequencyChart;
