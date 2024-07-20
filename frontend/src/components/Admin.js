
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AddSubjectForm from './AddSubjectForm';
import Navbar from './Navbar';
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
      <Navbar />
      <h1>Welcome Admin</h1>
      
     

        
      <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Roll Number</th>
            <th>Marks</th>
           
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item._id}>
              <td>{item.subject}</td>
              <td>{item.roll}</td>
              <td>{item.marks}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        
    <a href='/update'>
      <button className='btn btn-primary'>Update Marks</button>
      </a>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Admin;

