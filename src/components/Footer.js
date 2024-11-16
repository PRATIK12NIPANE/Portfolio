// src/components/Footer.js
import React from 'react';
import './css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Created by Pratik Nipane</p>
        <div className="contact-info">
          <a href="mailto:nipanepratik12@gmail.com" className="contact-link">
            <FontAwesomeIcon icon={faEnvelope} /> nipanepratik12@gmail.com
          </a>
          <a href="https://wa.me/+918010835008" className="contact-link">
            <FontAwesomeIcon icon={faPhone} /> +91-8010835008
          </a>
          <a href="https://www.linkedin.com/in/pratiknipane" className="contact-link">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
