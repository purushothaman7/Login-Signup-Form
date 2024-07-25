import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import me from "../components/me.JPG";
import sai from "../components/sai.JPG";
import Navbar from './Navbar';

const TeamMember = ({ imgSrc, name, description, email, linkedin }) => (
  <div className="col-md-4 mb-4 d-flex justify-content-center">
    <div className="card" style={{ width: '24rem' }}>
      <img src={imgSrc} alt={name} className="card-img-top" />
      <div className="card-body text-center">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">Interests: {description}</p>
        <p className="card-text">{email}</p>
        <a href={`mailto:${email}`} className="btn btn-custom me-2">Contact</a>
        {linkedin && (
          <a href={linkedin} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        )}
      </div>
    </div>
  </div>
);

const AboutUs = () => {
  return (
   <> <Navbar />
    <h1>About Us</h1>
    <div className="container mt-5">
      {/* About Us Section */}
    
       

      
      <div className="row d-flex justify-content-center">
        <TeamMember
          imgSrc={sai}
          name="Sai Prasad R"
          description="Web Developing, Problem Solving"
          email="saidhoni@gmail.com"
          linkedin="https://www.linkedin.com/in/sai-prasad-3771a1249/"
        />
        <TeamMember
          imgSrc={me}
          name="Purushothaman M"
          description="Designing, Web Developing"
          email="purushothsolo@gmail.com"
          linkedin="https://www.linkedin.com/in/purushothaman-m-b4ba9122b/"
        />
      </div>
    </div>
    </>
  );
};

export default AboutUs;
