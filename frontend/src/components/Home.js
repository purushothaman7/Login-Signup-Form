import React, { useEffect } from 'react'
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Chart from 'chart.js/auto';
import Marks from './Marks';
import Component from './LandingPage.js';
export default function Home() {
  const history=useNavigate()
  useEffect(() => {
    
      try {
        const token = localStorage.getItem('token'); // Retrieve token from local storage
        if (!token) {
          history('/login')
          
        }
      } catch (error) {
        console.error('Error fetching data:', error.response.data.error);
      
    };
    
  }, []);

  return (
    <div>
    <Navbar />
   
      <Component/>
     
  
    </div>
  )
}
