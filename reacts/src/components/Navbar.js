import React from "react";

export default function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
     {/* <a class="navbar-brand" href="#">
        <img src="https://i.ibb.co/yRb6wBX/20240222-172942.png" alt="" width="127" height="63" class="d-inline-block align-text-center shadow-lg p-7 mb-0 bg-white rounded" ></img>
       
      </a> */}
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
          <a class="nav-link" href="/marks">Marks</a>
          <a class="nav-link" href="/profile">Profile</a>
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
    )
}