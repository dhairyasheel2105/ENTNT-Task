import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar component
import AdminDashboard from './components/Admin/AdminDashboard';
import ManageCompanies from './components/Admin/ManageCompanies';
import CommunicationMethods from './components/Admin/CommunicationMethods';
import UserDashboard from './components/User/UserDashboard';
import CalendarView from './components/User/CalendarView';
import Notifications from './components/User/Notifications';
import CommunicationFrequencyChart from './components/Reports/CommunicationFrequencyChart';
import Profile from './components/Profile';
import ReportPage from './components/Reports/ReportPage';
import './App.css';

const App = () => {
  return (
    <Router>
      {/* Include Navbar at the top of all pages */}
      <Navbar />

      {/* Ensure content is not hidden behind the Navbar */}
      <div style={{ marginTop: '80px' }}>
        <Routes>
          <Route path="/" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/manage-companies" element={<ManageCompanies />} />
          <Route path="/admin/communication-methods" element={<CommunicationMethods />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/reports" element={<CommunicationFrequencyChart />} />
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
