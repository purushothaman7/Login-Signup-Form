import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
     <a className="navbar-brand" href="#">
        <img src="https://i.ibb.co/yRb6wBX/20240222-172942.png" alt="" width="127" height="63" className="d-inline-block align-text-center shadow-lg p-7 mb-0 bg-white rounded" ></img>
       
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
          <a className="nav-link" href="/marks">Marks</a>
          <a className="nav-link" href="/profile">Profile</a>
          <a className="nav-link " href="/todos" >Todo</a>
          <a className="nav-link btn btn-danger start-100" href="/logout"> Logout</a>
        </div>
      </div>
      
       <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
     
    </div>
  </nav>
    )
}