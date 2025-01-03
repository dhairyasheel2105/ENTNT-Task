import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CommunicationMethodManagement() {
  const [methods, setMethods] = useState([]);
  const [methodData, setMethodData] = useState({
    name: '',
    description: '',
    sequence: 1,
    mandatoryFlag: false,
  });

  useEffect(() => {
    axios.get('http://localhost:5000/communication-methods')
      .then(response => setMethods(response.data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMethodData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSaveMethod = () => {
    axios.post('http://localhost:5000/communication-methods', methodData)
      .then(() => {
        setMethods([...methods, methodData]);
        setMethodData({
          name: '',
          description: '',
          sequence: 1,
          mandatoryFlag: false,
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="communication-methods-management">
      <h2>Manage Communication Methods</h2>
      <form className="method-form">
        <input
          type="text"
          name="name"
          value={methodData.name}
          placeholder="Method Name"
          onChange={handleChange}
        />
        <textarea
          name="description"
          value={methodData.description}
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          type="number"
          name="sequence"
          value={methodData.sequence}
          placeholder="Sequence"
          onChange={handleChange}
        />
        <label>
          Mandatory
          <input
            type="checkbox"
            name="mandatoryFlag"
            checked={methodData.mandatoryFlag}
            onChange={handleChange}
          />
        </label>

        <button type="button" onClick={handleSaveMethod}>Save Method</button>
      </form>

      <h3>Communication Methods</h3>
      <ul>
        {methods.map((method, index) => (
          <li key={index}>{method.name} - {method.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default CommunicationMethodManagement;
