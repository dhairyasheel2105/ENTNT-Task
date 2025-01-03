import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Company APIs
export const fetchCompanies = () => axios.get(`${API_BASE_URL}/companies`);
export const addCompany = (companyData) => axios.post(`${API_BASE_URL}/companies`, companyData);
export const updateCompany = (id, companyData) => axios.put(`${API_BASE_URL}/companies/${id}`, companyData);
export const deleteCompany = (id) => axios.delete(`${API_BASE_URL}/companies/${id}`);

// Communication APIs
export const fetchCommunications = () => axios.get(`${API_BASE_URL}/communications`);
export const addCommunication = (communicationData) => axios.post(`${API_BASE_URL}/communications`, communicationData);
export const fetchCompanyCommunications = (companyId) =>
  axios.get(`${API_BASE_URL}/communications/company/${companyId}`);
