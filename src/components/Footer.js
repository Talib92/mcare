import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-details">
        <h2>M-Care Diagnostics</h2>
      </div>
      <div className="social-icons">
        <a 
          href="https://www.facebook.com/mcarediagnostics?mibextid=wwXIfr&rdid=33pGqgGlq5rUuT09&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1XT4Cfyg99%2F%3Fmibextid%3DwwXIfr#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fa fa-facebook"></i> 
        </a>
        <a 
          href="https://www.instagram.com/mcare.diagnostics?igsh=MTdkOHR4ZGh6bTZjdg%3D%3D&utm_source=qr" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fa fa-instagram"></i> 
        </a>
        <a 
          href="https://wa.me/6005313101" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fa fa-whatsapp"></i> 
        </a>
        <a 
          href="mailto:mcarediagnostics@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fa fa-envelope"></i>
        </a>
        <a 
          href="https://www.youtube.com/@Mcarediagnostics" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fa fa-youtube"></i> 
        </a>
        <a 
          href="https://maps.app.goo.gl/7wGKRN83UsPQmgHM9" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fa fa-map-marker"></i> 
        </a>
      </div>
      <div className="copyright">
        &copy; Copyright {new Date().getFullYear()}, All rights reserved | M-Care Diagnostics.
      </div>
      <div className='footer-end'>
        <p>Crafted with ❤ in Anantnag,Kashmir</p>
      </div>
    </div>
  );
}

export default Footer;
