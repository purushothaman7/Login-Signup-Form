import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import logo from "../components/home.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // For Bootstrap JS components

const LandingPage = () => {

  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      easing: 'ease-in-out',
      interval: 200,
    });
  }, []);

  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="row justify-content-center reveal">
        <div className="col-md-10">
          <div className="card mb-4">
            <div className="row g-0">
              <div className="col-md-12">
                <div className="card-body">
                  <h1 className="card-title">Welcome to the Student Portal</h1>
                  <p className="card-text">
                    Your gateway to academic success. This portal helps you manage your academic life efficiently.
                  </p>
                  <a href="/about" className="btn btn-primary">Created By</a>
                </div>
              </div>
              <div className="col-md-12">
                <img src={logo} className="img-fluid rounded-end" alt="Student Portal" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="row text-center mt-5 reveal">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Manage Your Profile</h2>
              <p className="card-text">
                Update your personal information and view your academic records.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">View Marks</h2>
              <p className="card-text">
                Check your marks and track your academic performance.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">To-Do List</h2>
              <p className="card-text">
                Keep track of your tasks and stay organized by using TODO List.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div id="testimonialsCarousel" className="carousel slide mt-5 reveal" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-block w-100 text-center p-4 bg-primary text-white">
              <p className="h5">"This portal has transformed the way I manage my studies. It's incredibly user-friendly and efficient!"</p>
              <h5 className="mt-3">SHARVESH R</h5>
              <p className="text-light">Student</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-block w-100 text-center p-4 bg-success text-white">
              <p className="h5">"The features are exactly what I need to keep track of my academic performance and stay organized."</p>
              <h5 className="mt-3">RAMANUJAN NR</h5>
              <p className="text-light">Student</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-block w-100 text-center p-4 bg-warning text-dark">
              <p className="h5">"An excellent tool for students. The interface is intuitive, and the support is fantastic."</p>
              <h5 className="mt-3">RUPESH L</h5>
              <p className="text-dark">Student</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <footer className="text-center mt-5 reveal">
        <p>&copy; 2024 Student Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
