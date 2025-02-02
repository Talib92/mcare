import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="contact">
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        At <strong>M-Care Diagnostics</strong>, we are committed to providing you with convenient and reliable healthcare services. Whether you need information about our tests, reports, or services, feel free to reach out to us.
      </motion.p>

      <motion.div
        className="contact-info"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <motion.div variants={fadeIn}>
          📍 <strong>Our Location:</strong>
          <a href="https://maps.app.goo.gl/7wGKRN83UsPQmgHM9" target="_blank" rel="noopener noreferrer">
            M-Care Diagnostics, Anantnag, Kashmir
          </a>
        </motion.div>

        <motion.div variants={fadeIn}>
          📞 <strong>Phone:</strong>
          <a href="tel:+91 6005313101"> +91 6005313101</a>
        </motion.div>

        <motion.div variants={fadeIn}>
          📧 <strong>Email:</strong>
          <a href="mailto:mcarediagnostics@gmail.com">mcarediagnostics@gmail.com</a>
        </motion.div>

        <motion.div variants={fadeIn}>
          🕒 <strong>Working Hours:</strong>
          <p>Monday - Sunday: <strong>8am - 6pm</strong></p>
        </motion.div>

        <motion.div variants={fadeIn}>
          🏠 <strong>Home Sample Collection:</strong>
          <p>We offer home sample collection services for your convenience. <br /><strong>Call or Whatsapp us to book an appointment!</strong></p>
        </motion.div>

        <motion.div variants={fadeIn}>
          📲 <strong>Stay Connected:</strong>
          <p>Follow us on</p>
          <a href="https://www.facebook.com/mcarediagnostics" target="_blank" rel="noopener noreferrer">Facebook</a> -
          <a href="https://www.instagram.com/mcare.diagnostics" target="_blank" rel="noopener noreferrer"> Instagram</a> -
          <a href="https://www.youtube.com/@Mcarediagnostics" target="_blank" rel="noopener noreferrer"> Youtube</a>
          <p>for health tips, updates, and offers.</p>
        </motion.div>
      </motion.div>

      <motion.h3
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        Feel free to call, visit, or drop us a message. Your health is our priority!
      </motion.h3>
    </div>
  );
};

export default Contact;
