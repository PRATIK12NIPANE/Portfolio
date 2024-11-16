// src/components/Home.js
import React from 'react';
import './css/Home.css';  // Ensure your custom styles are in Home.css
import profileImg from './myimg.png';  // Replace with your actual image path

const Home = () => {
  const handleDownload = () => {
    const resumeUrl = '/resume.pdf';  // Path to your resume
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'My_Resume.pdf';  // Set the filename for download
    link.click();
  };

  return (
    <section id="home" className="home-section">
      <div className="container text-center">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="profile-container">
              <img src={profileImg} alt="My Profile" className="profile-image" />
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="headline animate__animated animate__fadeIn animate__delay-1s">
              Hello, I'm Pratik Nipane
            </h1>
            <p className="subheadline animate__animated animate__fadeIn animate__delay-1s">
              A passionate software developer
            </p>
            <button
              className="btn btn-primary mt-4 animate__animated animate__zoomIn animate__delay-2s"
              onClick={handleDownload}
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
