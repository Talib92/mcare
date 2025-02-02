import React, { useEffect } from 'react';
import { Link } from "react-router-dom"; 
import { FaPhone, FaMapMarkerAlt, FaFlask, FaStar, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="home">
      
      {/* Hero Section */}
      <motion.div variants={fadeInUp} className="hero">
        <h1>Your Trusted Partner in Diagnostics</h1>
        <p>Accurate Testing | Fast Reports | Trusted by Thousands</p>
        <div className="hero-buttons">
          <a href="https://wa.me/916005313101?text=Hi,%20I%20would%20like%20to%20book%20a%20test." className="btn primary" target="_blank" rel="noopener noreferrer">
            Book a Test
          </a>
          <a href="https://maps.app.goo.gl/7wGKRN83UsPQmgHM9" className="btn secondary" target="_blank" rel="noopener noreferrer">
            Locate Us
          </a>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div whileInView="visible" variants={fadeInUp} initial="hidden" className="about">
        <h2>About M-Care Diagnostics</h2>
        <p>M-Care Diagnostics is a state-of-the-art diagnostic center in Anantnag, providing precise and timely medical testing services.</p>
        <Link to="/about" className="btn primary">Learn More</Link>
      </motion.div>

      {/* Services Section */}
      <motion.div whileInView="visible" variants={fadeInUp} initial="hidden" className="services">
        <h2>Our Popular Tests</h2>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" className="services-grid">
          {["Complete Blood Count (CBC)", "Liver Function Tests (LFT)", "Kidney Function Tests (KFT)", "Thyroid Function (T3, T4, TSH)", "Lipid Profile", "Vitamin D & B12 Tests", "Blood Sugar (Fasting & Random)"].map((test, index) => (
            <motion.div key={index} variants={fadeInUp} className="service-card">
              <FaFlask className="service-icon" />
              <p>{test}</p>
            </motion.div>
          ))}
        </motion.div>
        <Link to="/services" className="view-more">View All Tests →</Link>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div whileInView="visible" variants={fadeInUp} initial="hidden" className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" className="why-grid">
          {[
            { icon: <FaFlask />, title: "Advanced Lab Equipment" },
            { icon: <FaUsers />, title: "Trusted by Thousands" },
            { icon: <FaStar />, title: "Fast & Accurate Reports" },
            { icon: <FaPhone />, title: "24/7 Customer Support" },
          ].map((item, index) => (
            <motion.div key={index} variants={fadeInUp} className="why-card">
              <div className="why-icon">{item.icon}</div>
              <p>{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.section whileInView="visible" variants={fadeInUp} initial="hidden" className="testimonials">
        <h2>What Our Patients Say</h2>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" className="testimonials-grid">
          {[
            { text: "Great service and very professional!", name: "Muhammad Talib" },
            { text: "The staff is friendly and efficient.", name: "Muneeb Ahmad" },
            { text: "Highly recommended for accurate results!", name: "Asrar Ahmad" },
            { text: "Affordable and reliable diagnostic services.", name: "Tawheed Khan" },
          ].map((review, index) => (
            <motion.div key={index} variants={fadeInUp} className="testimonial-card">
              <p>"{review.text}"</p>
              <div className="testimonial-footer">
                <span>- {review.name}</span>
                <span className="stars">⭐⭐⭐⭐⭐</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.div whileInView="visible" variants={fadeInUp} initial="hidden" className="contact-home">
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
      </motion.div>

    </motion.div>
  );
};

export default Home;
