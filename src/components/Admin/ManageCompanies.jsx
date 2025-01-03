import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CompanyManagement() {
  const [companies, setCompanies] = useState([]);
  const [companyData, setCompanyData] = useState({
    name: '',
    location: '',
    linkedinProfile: '',
    emails: [''],
    phoneNumbers: [''],
    comments: '',
    communicationPeriodicity: 'Every 2 weeks',
  });

  useEffect(() => {
    axios.get('http://localhost:5000/companies')
      .then(response => setCompanies(response.data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddField = (field) => {
    setCompanyData(prevData => ({
      ...prevData,
      [field]: [...prevData[field], ''],
    }));
  };

  const handleSaveCompany = () => {
    axios.post('http://localhost:5000/companies', companyData)
      .then(() => {
        setCompanies([...companies, companyData]);
        setCompanyData({
          name: '',
          location: '',
          linkedinProfile: '',
          emails: [''],
          phoneNumbers: [''],
          comments: '',
          communicationPeriodicity: 'Every 2 weeks',
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="company-management">
      <h2>Manage Companies</h2>
      <form className="company-form">
        <input
          type="text"
          name="name"
          value={companyData.name}
          placeholder="Company Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          value={companyData.location}
          placeholder="Location"
          onChange={handleChange}
        />
        <input
          type="url"
          name="linkedinProfile"
          value={companyData.linkedinProfile}
          placeholder="LinkedIn Profile"
          onChange={handleChange}
        />
        {companyData.emails.map((email, index) => (
          <input
            key={index}
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => {
              const emails = [...companyData.emails];
              emails[index] = e.target.value;
              setCompanyData(prevData => ({ ...prevData, emails }));
            }}
          />
        ))}
        <button type="button" onClick={() => handleAddField('emails')}>Add Email</button>
        
        {companyData.phoneNumbers.map((phone, index) => (
          <input
            key={index}
            type="tel"
            value={phone}
            placeholder="Phone Number"
            onChange={(e) => {
              const phoneNumbers = [...companyData.phoneNumbers];
              phoneNumbers[index] = e.target.value;
              setCompanyData(prevData => ({ ...prevData, phoneNumbers }));
            }}
          />
        ))}
        <button type="button" onClick={() => handleAddField('phoneNumbers')}>Add Phone Number</button>

        <textarea
          name="comments"
          value={companyData.comments}
          placeholder="Comments"
          onChange={handleChange}
        />
        
        <select
          name="communicationPeriodicity"
          value={companyData.communicationPeriodicity}
          onChange={handleChange}
        >
          <option value="Every 2 weeks">Every 2 weeks</option>
          <option value="Every month">Every month</option>
          <option value="Quarterly">Quarterly</option>
        </select>

        <button type="button" onClick={handleSaveCompany}>Save Company</button>
      </form>

      <h3>Company List</h3>
      <ul>
        {companies.map((company, index) => (
          <li key={index}>{company.name} - {company.location}</li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyManagement;
