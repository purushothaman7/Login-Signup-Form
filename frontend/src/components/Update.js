import React from 'react'
import AddSubjectForm from './AddSubjectForm'
import Navbar from './Navbar'

export default function Update() {
  return (
    <div>
    <Navbar />
    <a href="/admin">
          <button className="btn btn-light position-absolute top-5 start-0 m-3" >
          <img width="30" height="30" src="https://img.icons8.com/ios/50/circled-left-2.png" alt="circled-left-2"></img>
      
      </button>
          </a>
    <br></br>
     
   
    <AddSubjectForm />
    
    </div>
  )
}
