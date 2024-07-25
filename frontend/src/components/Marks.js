import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Marks() {
  const [marks, setMarks] = useState([]);
  const [subject, setSubject] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/marks");
        console.log("Response data:", response.data);
        if (Array.isArray(response.data.mark)) {
          const allSubjects = response.data.mark.map((item) => item.subject);
          console.log(allSubjects);
          setSubject(allSubjects);
          const allMarks = response.data.mark.map((item) => item.marks);
          setMarks(allMarks);
        } else {
          console.error(
            "response.data.mark is not an array:",
            response.data.mark
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="my-4">Marks from Various Subjects</h1>
        {marks.length === 1 ? (
          <p className="alert alert-warning">
            No marks available for this student.
          </p>
        ) : (
          <ul className="list-group p-2 ">
            {subject.map((subject, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between"
              >
                <span>Subject: {subject}</span>

                <span>Marks: {marks[index]}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
