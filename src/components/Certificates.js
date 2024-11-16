// src/components/Certificates.js
import React, { useState } from 'react';
import './css/Certificates.css'; // Assuming the CSS file for styling
import ServiceNow from '../images/Certificates/Micro-Certification-serviceNow.pdf'; // Importing the ServiceNow PDF
import IBMSkill from '../images/Certificates/SkillsBuildaicertificate.pdf'; // Importing the IBMSkill PDF
import UdemyPython from '../images/Certificates/pratiknipaneudemypythonceritificate.pdf'; // Importing the IBMSkill PDF
import UdemyPHPMYSQL from '../images/Certificates/pratiknipaneudemybloginphpmysqlboostrap.pdf'; // Importing the IBMSkill PDF


import ServiceNowImg from '../images/CertificatesImages/ServiceNowMicroCertificate.png';
import IBMSkillImg from '../images/CertificatesImages/IBMSkillBuilding.png';
import UdemyPythonImg from '../images/CertificatesImages/Udemypythoncertificate.png';
import UdemyPHPMYSQLImg from '../images/CertificatesImages/UdemySQLCertificate.png';



const certificates = [
  {
    title: "React Developer Certification",
    description: "A certification on React.js, demonstrating the completion of advanced React concepts.",
    certificatePDF: ServiceNow, // Reference the imported PDF
    certificateLink: "https://www.certificate-link1.com", // Link to certificate
    thumbnail: ServiceNowImg, // Add a thumbnail image here
  },
  {
    title: "Node.js Developer Certification",
    description: "A certificate showcasing proficiency in backend development using Node.js.",
    certificatePDF: IBMSkill, // Path to another PDF
    certificateLink: "https://www.certificate-link2.com", // Link to certificate
    thumbnail: IBMSkillImg, // Add a thumbnail image here
  },
  {
    title: "Node.js Developer Certification",
    description: "A certificate showcasing proficiency in backend development using Node.js.",
    certificatePDF: UdemyPython, // Path to another PDF
    certificateLink: "https://www.certificate-link2.com", // Link to certificate
    thumbnail: UdemyPythonImg, // Add a thumbnail image here
  },
  {
    title: "Node.js Developer Certification",
    description: "A certificate showcasing proficiency in backend development using Node.js.",
    certificatePDF: UdemyPHPMYSQL, // Path to another PDF
    certificateLink: "https://www.certificate-link2.com", // Link to certificate
    thumbnail: UdemyPHPMYSQLImg, // Add a thumbnail image here
  },
  // Add more certificates as needed
];

const Certificates = () => {
  const [fullSizePDF, setFullSizePDF] = useState(null);

  const handleViewFullSize = (pdf) => {
    setFullSizePDF(pdf);
  };

  const handleCloseFullSize = () => {
    setFullSizePDF(null);
  };

  return (
    <div>
      <h2 className="about-h1">Certificates</h2>
   
    <section id="certificates" className="certificates-section">
      <div className="certificates-container">
        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={index}>
            {/* Certificate PDF Thumbnail */}
            <div className="certificate-pdf-container">
              <img
                src={certificate.thumbnail} // Display thumbnail image
                className="certificate-thumbnail"
                alt={`Thumbnail of ${certificate.title}`}
              />
              <div
                className="view-icon"
                onClick={() => handleViewFullSize(certificate.certificatePDF)}
              >
                &#128065; {/* Eye icon */}
              </div>
            </div>

            {/* Certificate Details */}
            <div className="certificate-details">
              <h3 className="certificate-title">{certificate.title}</h3>
              <p className="certificate-description">{certificate.description}</p>
              <a href={certificate.certificateLink} target="_blank" rel="noopener noreferrer" className="certificate-button">
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
      {fullSizePDF && (
        <div className="full-size-overlay" onClick={handleCloseFullSize}>
          <div className="full-size-container">
            <div className="close-icon" onClick={handleCloseFullSize}>
              &times; {/* Close icon */}
            </div>
            <iframe
              src={fullSizePDF}
              className="full-size-iframe"
              title="Full Size PDF"
            ></iframe>
          </div>
        </div>
      )}
    </section>
    </div>
  );
};

export default Certificates;
