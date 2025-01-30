import React, { useEffect } from 'react';
import { Link } from "react-router-dom"; 
import { FaPhone, FaMapMarkerAlt, FaFlask, FaStar, FaUsers } from "react-icons/fa";

const Home = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="home">
      <div className="hero">
        <h1>Your Trusted Partner in Diagnostics</h1>
        <p>Accurate Testing | Fast Reports | Trusted by Thousands</p>
        <div className="hero-buttons">
          <a 
            href="https://wa.me/6005313101?text=Hi,%20I%20would%20like%20to%20book%20a%20test." 
            className="btn primary" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Book a Test
          </a>
          
          <a 
            href="https://maps.app.goo.gl/7wGKRN83UsPQmgHM9" 
            className="btn secondary" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Locate Us
          </a>
        </div>
      </div>

      <div className="about">
        <h2>About M-Care Diagnostics</h2>
        <p>
          M-Care Diagnostics is a state-of-the-art diagnostic center in Anantnag,
          providing precise and timely medical testing services. Our advanced lab
          technology ensures reliable results to assist doctors in informed healthcare
          decisions.
        </p>
        
        <Link to="/about" className="btn primary">Learn More</Link>
      </div>

      <div className="services">
        <h2>Our Popular Tests</h2>
        <div className="services-grid">
          {[
            "Complete Blood Count (CBC)",
            "Liver Function Tests (LFT)",
            "Kidney Function Tests (KFT)",
            "Thyroid Function (T3, T4, TSH)",
            "Lipid Profile",
          ].map((test, index) => (
            <div key={index} className="service-card">
              <FaFlask className="service-icon" />
              <p>{test}</p>
            </div>
          ))}
        </div>
        <Link to="/services" className="view-more">View All Tests →</Link>
      </div>

      <div className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="why-grid">
          {[
            { icon: <FaFlask />, title: "Advanced Lab Equipment" },
            { icon: <FaUsers />, title: "Trusted by Thousands" },
            { icon: <FaStar />, title: "Fast & Accurate Reports" },
            { icon: <FaPhone />, title: "24/7 Customer Support" },
          ].map((item, index) => (
            <div key={index} className="why-card">
              <div className="why-icon">{item.icon}</div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials">
        <h2>What Our Patients Say</h2>
        <div className="testimonial-card">
          <p>"Excellent service! Quick and accurate test results. Highly recommend M-Care Diagnostics!"</p>
          <div className="testimonial-footer">
            <span>- A Happy Patient</span>
            <div className="stars">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
          </div>
        </div>
      </div>

      <div className="contact-home">
        <h2>Get in Touch</h2>
        <p>For inquiries or appointments, contact us:</p>
        <div className="contact-buttons">
          <a href="tel:+916005313101" className="btn primary">
            <FaPhone /> Call Us
          </a>
          <a href="https://maps.app.goo.gl/7wGKRN83UsPQmgHM9" target="_blank" rel="noopener noreferrer" className="btn primary">
            <FaMapMarkerAlt /> Find Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
