import React from 'react'
import axios from 'axios';
export default function Protected() {
    const handleProtectedRequest = async () => {
        const token = localStorage.getItem('token'); // Retrieve token from local storage
        if (!token) {
          console.error('Token not found in local storage');
          return;
        }
    
        try {
          const response = await axios.get('http://localhost:5000/protected', {
            headers: {
              Authorization: token,
            },
          });
          console.log('Protected endpoint response:', response.data);
        } catch (error) {
          console.error('Protected endpoint request failed:', error.message);
        }
      };
  return (
    <div>
    <button onClick={handleProtectedRequest}>Test Protected Endpoint</button>
    </div>
  )
}
