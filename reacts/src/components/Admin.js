
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AddSubjectForm from './AddSubjectForm';
const Admin = ({ token }) => {
  const [data, setData] = useState([]);
  const history=useNavigate()
  useEffect(() => {
    
    try {
      const token = localStorage.getItem('token'); // Retrieve token from local storage
      if (!token) {
        history('/adminlogin')
        
      }
    } catch (error) {
      console.error('Error fetching data:', error.response.data.error);
    
  };
  
}, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.response.data.error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome Admin</h1>
      <ul>
        {data.map(item => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
      <AddSubjectForm />
    </div>
  );
};

export default Admin;

