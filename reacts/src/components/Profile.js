import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import studentImage from '../lethal.jpg'; 
import Navbar from './Navbar';

export default function Profile () {
 
  const student = {
    id: 1,
    name: 'Raajan',
    email: 'Lethal@example.com',
    grade: '4th',
    subjects: ['Math', 'Science', 'English'],
    address: 'mannadi metri',
    phone: '+44444444'
  };

  return (
    <>
    <Navbar />
    <div className="container mt-4">
      <div className="card">
        <h5 className="card-header bg-primary text-white">Student Profile</h5>
        <div className="card-body">
         
          <img src={studentImage} className="img-fluid rounded-circle mb-3" alt="Student" style={{ width: '150px' }} />
          <h5 className="card-title">Name: {student.name}</h5>
          <p className="card-text">Email: {student.email}</p>
          <p className="card-text">Grade: {student.grade}</p>
          <p className="card-text">Subjects: {student.subjects.join(', ')}</p>
          <p className="card-text">Address: {student.address}</p>
          <p className="card-text">Phone: {student.phone}</p>
         
        </div>
      </div>
    </div>
    </>
  );
};


