// AddSubjectForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddSubjectForm = () => {
  const [roll, setroll] = useState('');
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');

  const handleAddSubject = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/addSubject', { roll, subject, marks });
      alert('Subject added successfully');
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
      await axios.post('http://localhost:5000/updateMarks', { roll, marks });
      alert('Marks updated successfully');
      setroll('');
      setMarks('');
    } catch (error) {
      console.error(error);
      alert('Error updating marks');
    }
  };

  return (
    <div>
      <h2>Add Subject</h2>
      <form onSubmit={handleAddSubject}>
        <input type="text" placeholder="Roll Number" name="roll" onChange={(e) => setroll(e.target.value)} />
        <input type="text" placeholder="Subject" name="subject" onChange={(e) => setSubject(e.target.value)} />
       
        <button type="submit">Add Subject</button>
      </form>
      
      <h2>Update Marks</h2>
      <form onSubmit={handleUpdateMarks}>
        <input type="text" placeholder="Roll Number" name="roll" onChange={(e) => setroll(e.target.value)} />
        <input type="text" placeholder="Subject" name="subject" onChange={(e) => setSubject(e.target.value)} />
        <input type="text" placeholder="Marks" name="marks" onChange={(e) => setMarks(e.target.value)} />
        <button type="submit">Update Marks</button>
      </form>
    </div>
  );
};

export default AddSubjectForm;
