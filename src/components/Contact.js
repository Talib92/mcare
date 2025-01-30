import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className='contact'>
      <p>
        At <strong>M-Care Diagnostics</strong>, we are committed to providing you with convenient and reliable healthcare services. Whether you need information about our tests, reports, or services, feel free to reach out to us.
      </p>

      <div className="contact-info">
        <div>
          📍 <strong>Our Location:</strong> 
          <a href="https://maps.app.goo.gl/7wGKRN83UsPQmgHM9" target="_blank" rel="noopener noreferrer">
            M-Care Diagnostics, Anantnag, Kashmir
          </a>
        </div>

        <div>
          📞 <strong>Phone:</strong> 
          <a href="tel:+91 6005313101"> +91 6005313101</a>
        </div>

        <div>
          📧 <strong>Email:</strong> 
          <a href="mailto:mcarediagnostics@gmail.com">mcarediagnostics@gmail.com</a>
        </div>

        <div>
          🕒 <strong>Working Hours:</strong> 
          <p>Monday - Sunday: <strong>8am - 6pm</strong></p>
        </div>

        <div>
          🏠 <strong>Home Sample Collection:</strong>  
          <p>We offer home sample collection services for your convenience. <br /><strong>Call or Whatsapp us to book an appointment!</strong></p>
        </div>

        <div>
          📲 <strong>Stay Connected:</strong> 
          <p>Follow us on</p> 
          <a href="https://www.facebook.com/mcarediagnostics?mibextid=wwXIfr&rdid=33pGqgGlq5rUuT09&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1XT4Cfyg99%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer">Facebook</a> -
          <a href="https://www.instagram.com/mcare.diagnostics?igsh=MTdkOHR4ZGh6bTZjdg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"> Instagram</a> -
          <a href="https://www.youtube.com/@Mcarediagnostics" target="_blank" rel="noopener noreferrer"> Youtube</a> 
          <p>for health tips, updates, and offers.</p>
        </div>
      </div>

      <h3>Feel free to call, visit, or drop us a message. Your health is our priority!</h3>
    </div>
  )
}

export default Contact
