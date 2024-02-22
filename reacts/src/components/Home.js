import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Home() {
  const location=useLocation();
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
     <a class="navbar-brand" href="#">
        <img src="https://play-lh.googleusercontent.com/mq690_v0n9an8BlYscH2i8CAdM58uFxHWPVnaooYMxABxmD9_xcoMl0vPFn_vrl7TDo=w240-h480-rw" alt="" width="50" height="50" class="d-inline-block align-text-center"></img>
        Student Portal
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#">Marks</a>
          <a class="nav-link" href="#">Profile</a>
          <a class="nav-link " href="#" >todo</a>
          <a class="nav-link btn btn-danger start-100" href="/logout"> Logout</a>
        </div>
      </div>
      
       <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
     
    </div>
  </nav>
      
  <h2>Bye {location.state.id}</h2>
      
    </div>
  )
}
