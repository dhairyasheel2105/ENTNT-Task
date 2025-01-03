import React from 'react';
import CommunicationFrequencyReport from './CommunicationFrequencyReport';
import EngagementEffectivenessDashboard from './EngagementEffectivenessDashboard';
import OverdueCommunicationTrends from './OverdueCommunicationTrends';
import DownloadableReport from './DownloadableReport';
import RealTimeActivityLog from './RealTimeActivityLog';
import './ReportPage.css';

const ReportPage = () => {
  return (
    <div className="report-page">
      <h1 className="report-title">Reporting and Analytics</h1>

      <div className="section">
        <h2>Communication Frequency Report</h2>
        {/* <CommunicationFrequencyReport /> */}
      </div>

      <div className="section">
        <h2>Engagement Effectiveness Dashboard</h2>
        {/* <EngagementEffectivenessDashboard /> */}
      </div>

      <div className="section">
        <h2>Overdue Communication Trends</h2>
        {/* <OverdueCommunicationTrends /> */}
      </div>

      <div className="section">
        <h2>Downloadable Report</h2>
        {/* <DownloadableReport /> */}
      </div>

      <div className="section">
        <h2>Real-Time Activity Log</h2>
        {/* <RealTimeActivityLog /> */}
      </div>
    </div>
  );
};

export default ReportPage;
