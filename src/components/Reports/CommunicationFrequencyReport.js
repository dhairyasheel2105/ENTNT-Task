import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CommunicationFrequencyReport = () => {
  const [dateRange, setDateRange] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');

  const handleDateChange = (e) => setDateRange(e.target.value);
  const handleCompanyChange = (e) => setCompanyFilter(e.target.value);

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

  return (
    <div className="report-container">
      <h2>Communication Frequency Report</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Filter by company"
          value={companyFilter}
          onChange={handleCompanyChange}
          className="filter-input"
        />
        <input
          type="date"
          value={dateRange}
          onChange={handleDateChange}
          className="filter-input"
        />
      </div>
      <Bar data={data} />
    </div>
  );
};

export default CommunicationFrequencyReport;
