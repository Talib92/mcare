import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='about'>
      
      <p>
        Welcome to <strong>M-Care Diagnostics</strong>, Anantnag’s trusted diagnostic center, 
        dedicated to providing accurate and timely medical testing services. 
        Our lab is equipped with advanced technology and follows stringent quality 
        standards to ensure precise results for a wide range of diagnostic tests, 
        including:
        <br />

        <ul className='about-li'>

          <li>Complete Blood Count (CBC)</li>
          <li>Liver Function Tests (LFT)</li>
          <li>Kidney Function Tests (KFT)</li>
          <li>Blood Sugar (Fasting & Random)</li>
          <li>Lipid Profile</li>
          <li>Thyroid Function Tests (T3, T4, TSH)</li>
          <li>Urine Routine & Microscopy</li>
          <li>Electrolyte Panel</li>
          <li>Dengue, Malaria, and Typhoid Tests</li>
          <li>Vitamin D & B12 Tests</li>
          <li>Pregnancy Test (Urine & Blood)</li>
          <li>HIV Test</li>
          <li>Hepatitis B & C Tests</li>
          <li>COVID-19 RT-PCR & Rapid Tests</li>
          <li>Hemoglobin A1c (HbA1c)</li>
          <li>Bone Mineral Density Test (BMD)</li>
          <li>Allergy Testing</li>
          <li>Blood Culture Test</li>
          <li>Malaria Rapid Test</li>
          <li>Prostate-Specific Antigen (PSA)</li>

        </ul>
        
        At M-Care Diagnostics, we prioritize patient care by delivering reliable 
        reports that assist doctors in making informed healthcare decisions. 
        Our team is committed to maintaining the highest level of professionalism, 
        efficiency, and confidentiality.
        <br />
        <br />

        We strive to make healthcare accessible and convenient for our patients by 
        offering quick turnaround times, affordable pricing, and exceptional service. 
        Your health is our priority, and we are here to support your well-being with 
        trustworthy diagnostic solutions.
        
        <h3>Visit us today and experience accuracy you can trust!</h3>

      </p>
    </div>
  );
};

export default About;
