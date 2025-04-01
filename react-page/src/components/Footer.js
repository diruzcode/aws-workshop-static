import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Workshop AWS</h3>
            <p>Aprende a desplegar sitios web en AWS usando S3 y CloudFront</p>
          </div>
          
          <div className="footer-links">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="https://aws.amazon.com/es/s3/" target="_blank" rel="noopener noreferrer">Amazon S3</a></li>
              <li><a href="https://aws.amazon.com/es/cloudfront/" target="_blank" rel="noopener noreferrer">Amazon CloudFront</a></li>
              <li><a href="https://aws.amazon.com/es/route53/" target="_blank" rel="noopener noreferrer">Amazon Route 53</a></li>
              <li><a href="https://aws.amazon.com/es/certificate-manager/" target="_blank" rel="noopener noreferrer">AWS Certificate Manager</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Workshop AWS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;