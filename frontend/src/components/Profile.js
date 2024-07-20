import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Profile() {

  const student = {
    id: 1,
    name: 'Raajan',
    email: 'Lethal@example.com',
    grade: '4th',
    subjects: ['Math', 'Science', 'English'],
    address: 'mannadi metri',
    phone: '+44444444'
  };



   let [currentRoll, setCurrentRoll] = useState("");
   let [curName,setCurrentName] =useState("")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/profile');
       console.log(response.data.name)
       console.log(response.data.roll)
        setCurrentRoll(response.data.roll);
        setCurrentName(response.data.name);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
   
    };
    fetchData();
    
  }, []);
  
const imageUrl = `https://www.rajalakshmi.org/QRCode/img/${currentRoll}.jpg`;
  return (
    <>
 
      <Navbar />
     
      <div className="container mt-4">
        <div className="card">
          <h5 className="card-header bg-primary text-white">Student Profile</h5>
          <div className="card-body">
            <div > 
            <img class="img-fluid" src={imageUrl} alt="IDCARDPhoto" style={{"width":"130px"}}></img></div> 
            <br></br>
            <h5 className="card-title">Name: {curName}</h5>
           <a > <p className="card-text" >Email: {currentRoll}@rajalakshmi.edu.in</p></a>
            <p className="card-text">Grade: {student.marks}</p>
            <p className="card-text">Subjects: {student.subjects.join(', ')}</p>
            <p className="card-text">Address: {student.password}</p>
            <p className="card-text">Phone: {student.phone}</p>

          </div>
        </div>
      </div>
    </>
  );
};


