// frontend/src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export default function Todo(){
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:5000/todos');
    setTodos(response.data);
  };

  const addTodo = async () => {
    if (text.trim() !== '') {
      const response = await axios.post('http://localhost:5000/todos', { text });
      setTodos([...todos, response.data]);
      setText('');
    }
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
   <>
    <Navbar />
   
    <div className="container mt-5">
    <h1 className="text-center mb-4">To-Do List</h1>
    <div className="input-group mb-3">
      <input 
        type="text" 
        className="form-control" 
        placeholder="Add new todo" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button" onClick={addTodo}>Add Todo</button>
      </div>
    </div>
    <ul className="list-group">
      {todos.map(todo => (
        <li className="list-group-item d-flex justify-content-between align-items-center" key={todo.id}>
          {todo.text}
          <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
  </>
  );
}


