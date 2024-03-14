import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Marks(){
  let [currentRoll, setCurrentRoll] = useState("");
   let [curName,setCurrentName] =useState("")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/marks');
       console.log(response.data)
        // setCurrentRoll(response.data.roll);
        // setCurrentName(response.data.name);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
   
    };
    fetchData();
    
  }, []);
    return( <>
        <Navbar />
       
      </>
    )
}