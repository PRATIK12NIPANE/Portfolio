// src/components/Projects.js
import React, { useState } from 'react';
import './css/Projects.css';

// Images
import StockMarketHome from '../images/Projects/StockMarketHomepage.png';
import StockMarketAbout from '../images/Projects/StockMarketAbout.png';
import StockMarketStocks from '../images/Projects/StockMarketSkockpage.png';
import StockMarketIndex from '../images/Projects/StockMarketIndex.png';
import StockMarketNews from '../images/Projects/StockMarketNews.png';

const projects = [
  {
    title: "Stock Market Advisor",
    description: "Stock Market Advisor is a comprehensive platform designed to help users track and analyze stock market data. Users can view detailed information about various stocks, stay updated with the latest market news, and enhance their knowledge through educational resources.",
    technologies: ["PHP", "Bootstrap 5", "HTML"],
    learned: "I learned about leadership, PHP development, API integration, frontend development, and project management.",
    media: [
      StockMarketHome,
      StockMarketStocks,
      StockMarketNews,
      StockMarketAbout,
      StockMarketIndex,
    ],
    liveLink: "https://www.live-link-for-project.com",
    githubLink: "https://github.com/yourusername/project"
  },
  // Add more projects as needed
];

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Navigate to previous and next slides
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects[0].media.length) % projects[0].media.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects[0].media.length);
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="about">Projects</h2>
      
      <div className="projects-container-wrapper">
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-slider">
                <div className="project-slider-content">
                  {project.media[currentSlide].endsWith('.mp4') ? (
                    <video autoPlay muted loop>
                      <source src={project.media[currentSlide]} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={project.media[currentSlide]} alt={`Project media ${currentSlide + 1}`} />
                  )}
                </div>
                <button className="slider-button left" onClick={prevSlide}>❮</button>
                <button className="slider-button right" onClick={nextSlide}>❯</button>
              </div>
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <p className="project-learned">{project.learned}</p>
                <div className="project-buttons">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-button live">View Live</a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-button github">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
