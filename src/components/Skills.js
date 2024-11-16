// src/components/Skills.js
import React from 'react';
import './css/Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faBootstrap, faJs, faJava, faPython, faGithub, faAws } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const skills = [
  {
    category: "Frontend",
    skillsList: [
      { name: "HTML5", level: "Expert", icon: faHtml5 },
      { name: "CSS3", level: "Expert", icon: faCss3 },
      { name: "Bootstrap", level: "Intermediate", icon: faBootstrap },
      { name: "JavaScript", level: "Advanced", icon: faJs },
    ],
  },
  {
    category: "Backend",
    skillsList: [
      { name: "Java", level: "Intermediate", icon: faJava },
      { name: "PHP", level: "Intermediate", icon: faJs },
      { name: "Python", level: "Intermediate", icon: faPython },
    ],
  },
  {
    category: "Databases",
    skillsList: [
      { name: "MySQL", level: "Intermediate", icon: faDatabase },
      { name: "SQL", level: "Intermediate", icon: faDatabase },
    ],
  },
  {
    category: "Tools & Platforms",
    skillsList: [
      { name: "Git & GitHub", level: "Advanced", icon: faGithub },
      { name: "AWS Route 53", level: "Intermediate", icon: faAws },
      { name: "S3 Bucket (Serverless Website)", level: "Intermediate", icon: faAws },
    ],
  },
  {
    category: "Testing",
    skillsList: [
      { name: "Manual Software Testing", level: "Basic", icon: faJs }, // Using JS icon as placeholder
    ],
  },
  // Add more categories and skills as needed
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
       <h1 className="about-h1">Skills</h1>
      <div className="skills-container">
        {skills.map((category, index) => (
          <div className="skills-category" key={index}>
            <h3 className="skills-category-title">{category.category}</h3>
            <ul className="skills-list">
              {category.skillsList.map((skill, idx) => (
                <li className="skill-item" key={idx}>
                  <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                  <span className="skill-name">{skill.name}</span>
                  {skill.level && <span className="skill-level">{skill.level}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
