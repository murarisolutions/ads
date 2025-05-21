import React from 'react';
import "../contact/contact.css";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp, FaEnvelope, FaClock } from 'react-icons/fa'; 
import { MdLocationOn } from 'react-icons/md'; // Material Design icons

const ContactPage = () => {
const navigate = useNavigate();
  return (
    <div className="contact-page">
     
      <div className="contact-content">
        {/* Page Header */}
        <header className="contact-header">
          <h1>CONTACT US</h1>
          <p>We’re here to assist you! If you have any questions, comments, or need help, please don't hesitate to reach out to us. We’re just a message away and happy to support you.</p>
        </header>

        {/* Contact Information Section */}
        <section className="contact-info">
          <div className="contact-card">
            <MdLocationOn className="contact-icon" />
            <h2>Address:</h2>
            <p>3RD FLOOR, 308, JEEVANADI SAMPOORNA,
                 KODIGEHALLI, BENGALURU,
                 Karnataka, 560097
</p>
          </div>

          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h2>Email:</h2>
            <p>
              <a href="mailto:murarisolutions.india@gmail.com">murarisolutions.india@gmail.com</a>
            </p>
          </div>

          <div className="contact-card">
            <FaWhatsapp className="contact-icon" />
            <h2>WhatsApp:</h2>
            <p>
              <a href="https://wa.me/9490324586?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services" target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a>
            </p>
          </div>
        </section>

        <section className="office-timings">
        <h2>
          <FaClock className="timings-icon" /> Office Timings
        </h2>          <p>Mon-Fri: 9am - 6pm</p>
          <p>Sat: 10am - 2pm</p>
        </section>

        <section className="contact-map">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d775.9391097644094!2d77.5691463!3d13.0644969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d6c73434b23%3A0xcde3ece96b35a0d4!2sMurari%20Solutions!5e0!3m2!1sen!2sin!4v1694202261326!5m2!1sen!2sin"
            className="map-iframe"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>

    
        <div className="button-container">
          <button className="back-btn" onClick={() => navigate("/")}>Go back</button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
