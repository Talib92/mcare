import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="services-page">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        Our Diagnostic Services
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        At <strong>M-Care Diagnostics,</strong> we offer a comprehensive range of diagnostic services to help doctors and healthcare professionals make accurate and timely decisions. Our state-of-the-art equipment and expert team ensure high-quality results for all our tests.
      </motion.p>

      <div className="services-list">
        {[
          { title: 'Complete Blood Count (CBC)', desc: 'A CBC test helps evaluate overall health and detect disorders like anemia and infections.' },
          { title: 'Liver Function Tests (LFT)', desc: 'LFTs assess liver health by measuring levels of proteins, liver enzymes, and bilirubin.' },
          { title: 'Kidney Function Tests (KFT)', desc: 'KFTs evaluate kidney health and detect issues like kidney disease or infection.' },
          { title: 'Thyroid Function Tests (T3, T4, TSH)', desc: 'These tests check thyroid function, aiding in diagnosing thyroid disorders.' },
          { title: 'Lipid Profile', desc: 'Measures various fats in the blood to assess the risk of cardiovascular diseases.' },
          { title: 'Vitamin D & B12 Tests', desc: 'Determines levels of essential vitamins crucial for overall health.' },
          { title: 'Blood Sugar (Fasting & Random)', desc: 'Measures blood sugar levels to diagnose and monitor diabetes.' },
          { title: 'Electrolyte Panel', desc: 'Checks essential minerals like sodium, potassium, and calcium for body balance.' },
          { title: 'Urine Routine & Microscopy', desc: 'Detects conditions like kidney disease, UTIs, and diabetes via urine analysis.' },
          { title: 'Dengue, Malaria, and Typhoid Tests', desc: 'Helps detect infections caused by viruses and bacteria for quick treatment.' },
          { title: 'Pregnancy Test (Urine & Blood)', desc: 'Confirms pregnancy by detecting the hormone hCG in urine or blood.' },
          { title: 'HIV Test', desc: 'Detects HIV in the blood, helping diagnose and monitor infection.' },
          { title: 'COVID-19 RT-PCR & Rapid Tests', desc: 'Detects the presence of COVID-19 for timely medical intervention.' },
          { title: 'Hepatitis B & C Tests', desc: 'Identifies Hepatitis B or C viruses to prevent serious liver damage.' },
          { title: 'Hemoglobin A1c (HbA1c)', desc: 'Measures average blood sugar levels over 2-3 months for diabetes management.' },
          { title: 'Bone Mineral Density Test (BMD)', desc: 'Checks bone strength and detects osteoporosis risks.' },
          { title: 'Allergy Testing', desc: 'Identifies allergens responsible for allergic reactions.' },
          { title: 'Blood Culture Test', desc: 'Detects bacterial or fungal infections in the blood for diagnosis.' },
        ].map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
