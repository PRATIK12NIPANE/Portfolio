// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'; // Ensure FontAwesome is included
import './css/Navbar.css'; // Import custom styles for the navbar

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="#">My Portfolio</Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`} /> {/* Toggle icon */}
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/"><i className="fa fa-home"></i> Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about"><i className="fa fa-user"></i> About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects"><i className="fa fa-folder-open"></i> Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experience"><i className="fa fa-briefcase"></i> Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/education"><i className="fa fa-graduation-cap"></i> Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills"><i className="fa fa-cogs"></i> Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/certificate"><i className="fa fa-certificate"></i> Certificate</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
