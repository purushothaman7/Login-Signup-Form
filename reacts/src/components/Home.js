import React from 'react'
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom'

export default function Home() {
  const location=useLocation();
  return (
    <div>
    <Navbar />
      <h2>home page da</h2>
  {/* <h2>Bye {location.state.id}</h2> */}
      
    </div>
  )
}
