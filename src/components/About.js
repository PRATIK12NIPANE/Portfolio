// src/components/About.js
import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./css/About.css"; // Assuming the CSS file for styling

const About = () => {
  return (
    <div>
      <h2 className="about">About Me</h2>

      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-left">
            {/* Personal Information Section */}
            <div className="personal-info">
              <p>
                <i className="fa fa-user"></i> <strong>Name:</strong> Pratik
                Nipane
              </p>
              <p>
                <i className="fa fa-id-badge"></i> <strong>Profile:</strong>{" "}
                Software developer
              </p>
              <p>
                <i className="fa fa-envelope"></i> <strong>Email:</strong>{" "}
                nipanepratik12@gmail.com
              </p>
              <p>
                <i className="fa fa-phone"></i> <strong>Mobile:</strong> +91
                8010835008
              </p>
            </div>
          </div>

          {/* Right Section - About Me */}
          <div className="about-right">
            <div className="bio-section">
              <p>
                I'm a developer gaining hands-on experience with ServiceNow at
                I-Connectresources Inc., where I’m learning workflows,
                application creation, and platform administration. I’m also
                expanding my expertise in full-stack development, working with
                JavaScript, React, Node.js, Express.js, and MongoDB to build
                responsive web applications and scalable back-end solutions.
                <br />
                <br />
                Passionate about cloud technologies and web development, I'm
                excited to contribute to impactful projects. Additionally, I
                have strong leadership experience as a Student Counselor and IT
                Admin at ARD Foundation, where I supported rural girls'
                education through technology and mentorship.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
