// AddSubjectForm.js
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
const AddSubjectForm = () => {
  const [roll, setroll] = useState('');
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');

  const handleAddSubject = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/addSubject', { roll, subject })
      .then(res=>{
        if(res.data=="success"){
          alert('Subject added successfully');
        }
        else{
          alert('Subject not added successfully');
        }
      })
      setroll('');
      setSubject('');
      setMarks('');
    } catch (error) {
      console.error(error);
      alert('Error adding subject');
    }
  };

  const handleUpdateMarks = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/updateMarks', { roll,subject, marks })
      .then(res=>{
        if(res.data=="success"){
          alert('Marks updated successfully');
        }
        else{
          alert('Marks not updated successfully');
        }
      })
      
      setroll('');
      setMarks('');
    } catch (error) {
      console.error(error);
      alert('Error updating marks');
    }
  };

  return (
    <div>
      <center className='display-flex'>
        <div className='row'>
<div className='col-md-6'>


      <h2>Add Subject</h2>
      <form onSubmit={handleAddSubject} className="col-sm-2 col-form-label">
        <br></br>
        <input type="text" placeholder="Roll Number" name="roll" onChange={(e) => setroll(e.target.value)} className="form-control" />
        <br></br>
        <input type="text" placeholder="Subject" name="subject" onChange={(e) => setSubject(e.target.value)} className="form-control" />
        <br></br>
        <button type="submit" className="btn btn-primary">Add Subject</button>
      </form>
      </div>
      <div className='col-md-6'>
    
      <h2>Update Marks</h2>
      <form onSubmit={handleUpdateMarks} className="col-sm-2 col-form-label">
      <br></br>
        <input type="text" placeholder="Roll Number" name="roll" onChange={(e) => setroll(e.target.value)} className="form-control"/>
        <br></br>
        <input type="text" placeholder="Subject" name="subject" onChange={(e) => setSubject(e.target.value)} className="form-control" />
        <br></br>
        <input type="text" placeholder="Marks" name="marks" onChange={(e) => setMarks(e.target.value)} className="form-control" />
        <br></br>
        <button type="submit" className="btn btn-primary">Update Marks</button>
      </form>

      </div>
      </div>
      </center>
    </div>
  );
};

export default AddSubjectForm;
