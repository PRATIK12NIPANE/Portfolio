// src/components/Experience.js
import React from 'react';
import './css/Experience.css';

// Example certificate images
import CloudTechInternshipIMG from '../images/Experience/ColudTechInternship.png';
import InvoTechInternshipImg from '../images/Experience/InvotechInternship.png';

const experiences = [
  {
    company: "i-Connectresources Inc",
    title: "Internship Trainee",
    duration: "February 2024 - Present",
    description: "At I-Connectresources Inc., I’m diving into the world of ServiceNow, learning the fundamentals of workflows, application creation, and platform administration. Alongside this, I’ve been sharpening my skills in JavaScript, data structures, and algorithms, while building responsive web applications with React and Node.js. I’m currently expanding my knowledge of Express.js and MongoDB to create scalable, server-side applications. This blend of hands-on ServiceNow experience and full-stack development is helping me build a solid technical foundation and positioning me to contribute effectively in any development team",
    certificate: "",
  },
  {
    company: "Innovixion Tech",
    title: "Full Stack Development",
    duration: "December 2023 - January 2024",
    description: "As a Virtual Full-Stack Development Intern at Innovixion Tech, I had the opportunity to work on five exciting projects, including creating a dynamic Todo List app with React and MongoDB, and building a responsive portfolio website. This internship allowed me to deepen my skills in both front-end and back-end development, working with technologies like React, MongoDB, and JavaScript. I also enhanced my problem-solving abilities while contributing to meaningful projects that improved user experience and client engagement.",
    certificate: InvoTechInternshipImg,
  },
  {
    company: "Cloud Technology Consulting",
    title: "Cloud Operations Trainee (AWS)",
    duration: "June 2023 - August 2023",
    description: "During my internship as a Cloud Operations Trainee (AWS) at Cloud Technology Consulting, I had the opportunity to work hands-on with AWS infrastructure, learning how to set up and manage services like EC2, S3, and VPC. Guided by our CTO, I focused on enhancing cloud performance, strengthening security through IAM management, and gaining experience with Infrastructure as Code using Terraform. This role helped me build practical skills in troubleshooting and optimizing cloud environments, giving me a strong foundation in cloud computing and operations.",
    certificate: CloudTechInternshipIMG,
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h1 className="about-h1">Experience</h1>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-info">
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-duration">{exp.duration}</p>
              <p className="experience-description">{exp.description}</p>
            </div>
            <div className="certificate-thumbnail">
              {exp.certificate ? (
                <img src={exp.certificate} alt={`${exp.title} Certificate`} />
              ) : (
                <div className="no-certificate">No Certificate Available</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
