// src/components/Education.js
import React from 'react';
import './css/Education.css';

const educationData = [
  {
    institution: "Shivaji University Kolhapur",
    degree: "B.Voc (Software Development)",
    duration: "2021 - 2024",
    description: "Focused on software development, programming languages, and web development.",
    cgpa: "Average CGPA: 8.42 / 10"
  },
  {
    institution: "Chh. Shahu Science, Commerce Junior College, Satara",
    degree: "Higher Secondary School Certificate",
    duration: "2017 - 2019",
    description: "Studied in the science stream with a focus on general studies.",
    cgpa: "73.17%"
  },
  {
    institution: "Lokmangal High School, Satara",
    degree: "Secondary School Certificate",
    duration: "2015 - 2017",
    description: "Completed high school with a focus on general education.",
    cgpa: "68.60%"
  },
  // Add more education entries as needed
];

const Education = () => {
  return (
    <div>
      <h2 className="about">Certificates</h2>
     
    <section id="education" className="education-section">
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3 className="institution">{edu.institution}</h3>
            <p className="degree">{edu.degree}</p>
            <p className="duration">{edu.duration}</p>
            <p className="description">{edu.description}</p>
            {edu.cgpa && <p className="cgpa">{edu.cgpa}</p>}
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Education;
