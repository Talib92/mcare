import React, { useEffect, useState } from 'react';

const Services = () => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    setAnimationClass("fade-in"); // Trigger the fade-in animation when the component loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`services-page ${animationClass}`}>
      <h2>Our Diagnostic Services</h2>
      <p>
        At <strong>M-Care Diagnostics,</strong> we offer a comprehensive range of diagnostic services to help doctors and healthcare professionals make accurate and timely decisions. Our state-of-the-art equipment and expert team ensure high-quality results for all our tests.
      </p>

      <div className="services-list">
        <div className="service-card">
          <h3>Complete Blood Count (CBC)</h3>
          <p>
            A CBC test helps evaluate overall health and detect a wide range of disorders, including anemia, infection, and many other diseases.
          </p>
        </div>
        <div className="service-card">
          <h3>Liver Function Tests (LFT)</h3>
          <p>
            LFTs help assess the health of your liver by measuring levels of proteins, liver enzymes, and bilirubin in your blood.
          </p>
        </div>
        <div className="service-card">
          <h3>Kidney Function Tests (KFT)</h3>
          <p>
            KFTs are important for evaluating kidney health and detecting issues such as kidney disease or infection.
          </p>
        </div>
        <div className="service-card">
          <h3>Thyroid Function Tests (T3, T4, TSH)</h3>
          <p>
            These tests help determine if your thyroid is functioning properly, aiding in the diagnosis of thyroid disorders.
          </p>
        </div>
        <div className="service-card">
          <h3>Lipid Profile</h3>
          <p>
            A lipid profile measures the levels of various fats in your blood, helping assess the risk of cardiovascular diseases.
          </p>
        </div>
        <div className="service-card">
          <h3>Vitamin D & B12 Tests</h3>
          <p>
            These tests help determine the levels of essential vitamins that play a role in maintaining your overall health.
          </p>
        </div>
        <div className="service-card">
          <h3>Blood Sugar (Fasting & Random)</h3>
          <p>
            These tests measure your blood sugar levels to diagnose and monitor diabetes or other conditions affecting blood glucose.
          </p>
        </div>
        <div className="service-card">
          <h3>Electrolyte Panel</h3>
          <p>
            An electrolyte panel measures essential minerals in your body, such as sodium, potassium, and calcium, which help regulate muscle function and fluid balance.
          </p>
        </div>
        <div className="service-card">
          <h3>Urine Routine & Microscopy</h3>
          <p>
            This test helps detect various conditions like kidney disease, urinary tract infections (UTIs), and diabetes by analyzing a urine sample.
          </p>
        </div>
        <div className="service-card">
          <h3>Dengue, Malaria, and Typhoid Tests</h3>
          <p>
            These tests are used to detect infections caused by viruses and bacteria like dengue, malaria, and typhoid, enabling quick diagnosis and treatment.
          </p>
        </div>
        <div className="service-card">
          <h3>Pregnancy Test (Urine & Blood)</h3>
          <p>
            A pregnancy test checks for the presence of the hormone hCG in urine or blood, confirming pregnancy.
          </p>
        </div>
        <div className="service-card">
          <h3>HIV Test</h3>
          <p>
            An HIV test detects the presence of the virus in the blood, helping to diagnose and monitor HIV infection.
          </p>
        </div>
        <div className="service-card">
          <h3>COVID-19 RT-PCR & Rapid Tests</h3>
          <p>
            These tests help detect the presence of the COVID-19 virus, aiding in timely isolation and medical intervention.
          </p>
        </div>
        <div className="service-card">
          <h3>Hepatitis B & C Tests</h3>
          <p>
            These tests help detect the presence of Hepatitis B or C viruses, which can lead to serious liver damage.
          </p>
        </div>
        <div className="service-card">
          <h3>Hemoglobin A1c (HbA1c)</h3>
          <p>
            The HbA1c test helps manage diabetes by measuring the average blood sugar levels over the past 2 to 3 months.
          </p>
        </div>
        <div className="service-card">
          <h3>Bone Mineral Density Test (BMD)</h3>
          <p>
            A BMD test measures bone strength and helps detect osteoporosis or risk of fractures.
          </p>
        </div>
        <div className="service-card">
          <h3>Allergy Testing</h3>
          <p>
            Allergy tests help identify allergens that may cause allergic reactions, from pollen to food allergies.
          </p>
        </div>
        <div className="service-card">
          <h3>Blood Culture Test</h3>
          <p>
            This test detects infections in the blood caused by bacteria or fungi, helping diagnose severe infections.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
