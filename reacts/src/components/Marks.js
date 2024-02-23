import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
export default function Marks(){
    return( <>
        <Navbar />
        <br>
        </br>
        <div className="container mb-1 p-5 border border-3 border-dark">
        <h2>Marks Page</h2>
        <ul className="list-group border border-3 border-dark">
          <li className="list-group-item border border-3 border-dark">
          <h3>Mark 2 </h3>
          </li>
          <li className="list-group-item border border-3 border-dark row-3">
            <h3>Mark 2 </h3>
          </li>
          <li className="list-group-item border border-3 border-dark">
          <h3>Mark 2 </h3>
          </li>
        </ul>
      </div>
      </>
    )
}