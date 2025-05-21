import React from "react";
import { WhatsApp, Email, Place } from "@mui/icons-material"; // Importing MUI Icons
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Location Section - Left Side */}
        <div className="footer-section location-section">
          <h4>Our Location</h4>
          <Place className="icon" />
          <p>
            Telecom colony, 5th cross, opp Shree Ram Shreyas Apartment, Kodigehalli, Bengaluru, Karnataka 560097, India
          </p>
        </div>

        {/* Contact Section - Right Side */}
        <div className="footer-section contact-section">
          <h4>Contact Us</h4>
          <p>FOR ANY ISSUES, YOU CAN CONTACT US USING:</p>
          <div className="social">
            {/* WhatsApp Icon */}
            <a 
              href="https://wa.me/9490324586?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services" 
              target="_blank" 
              rel="noopener noreferrer"
              className="icon-wrapper whatsapp-icon"
            >
              <WhatsApp className="icon" />
            </a>

            {/* Email Icon */}
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=murarisolutions.india@gmail.com&su=Inquiry%20about%20services&body=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
              target="_blank" 
              rel="noopener noreferrer"
              className="icon-wrapper email-icon"
            >
              <Email className="icon" />
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom Section - Copyrights Inside Footer */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Murari Solutions | All Rights Reserved
      </div>
    </footer>
  );
};
