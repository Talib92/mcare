import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="about">
      <motion.p 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeIn}
      >
        Welcome to <strong>M-Care Diagnostics</strong>, Anantnag’s trusted diagnostic center, 
        dedicated to providing accurate and timely medical testing services.
      </motion.p>

      <motion.ul className="about-li">
        {[
          "Complete Blood Count (CBC)",
          "Liver Function Tests (LFT)",
          "Kidney Function Tests (KFT)",
          "Blood Sugar (Fasting & Random)",
          "Lipid Profile",
          "Thyroid Function Tests (T3, T4, TSH)",
          "Urine Routine & Microscopy",
          "Electrolyte Panel",
          "Dengue, Malaria, and Typhoid Tests",
          "Vitamin D & B12 Tests",
        ].map((test, index) => (
          <motion.li 
            key={index} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeIn}
          >
            {test}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div 
        className="more-info"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeIn}
      >
        <div>
          🕒 <strong>Working Hours:</strong>
          <p>Monday - Sunday: <strong>8am - 6pm</strong></p>
        </div>

        <div>
          🏠 <strong>Home Sample Collection:</strong>
          <p>We offer home sample collection services for your convenience.</p>
        </div>
      </motion.div>

      <motion.p 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeIn}
      >
        At M-Care Diagnostics, we prioritize patient care by delivering reliable 
        reports that assist doctors in making informed healthcare decisions.
      </motion.p>

      <motion.h3 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeIn}
      >
        Visit us today and experience accuracy you can trust!
      </motion.h3>
    </div>
  );
};

export default About;
