import React, { useEffect } from 'react'
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const history=useNavigate()
  useEffect(() => {
    
      try {
        const token = localStorage.getItem('token'); // Retrieve token from local storage
        if (!token) {
          history('/')
          
        }
      } catch (error) {
        console.error('Error fetching data:', error.response.data.error);
      
    };
    
  }, []);
  const location=useLocation();
  return (
    <div>
    <Navbar />
      <h2>home page da</h2>
  {/* <h2>Bye {location.state.id}</h2> */}
      
    </div>
  )
}
