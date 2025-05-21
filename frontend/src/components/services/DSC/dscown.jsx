// src/services/DSCOWN/DSCOWN.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../services/Consulting/consulting.css';

const DSCOWN = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    if (!name || !email || !phone || !message) {
      setError('All fields are required.');
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    const cleanedPhone = phone.replace(/\D/g, '');
    if (cleanedPhone.length !== 10) {
      setError('Please enter a valid 10-digit phone number.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post('http://localhost:3000/users', {
        name,
        email,
        phone,
        message,
      });
      setSuccess(response.data.message);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="consulting-page">
      <header className="consulting-header">
        <h1>Digital Signature Certificates (DSC) Services</h1>
      </header>
      <main className="consulting-content">
        <div className="consulting-main">
          <div className="consulting-info">
            <div className="consulting-text">
              <p>
                At Murari Solutions, we provide expert services for obtaining and managing Digital Signature Certificates (DSCs). DSCs are crucial for securing digital transactions and ensuring the authenticity of electronic documents.
              </p>
              <p>
                We offer guidance on different types of DSCs, including Indian and international certificates, and assist you in obtaining the appropriate DSC for your needs. Whether you need DSCs for business transactions, government compliance, or personal use, we have the expertise to support you.
              </p>
              <h2>Types of DSCs We Handle:</h2>
              <ul>
                <li><strong>Class 1 DSC:</strong> For verifying email addresses. Ideal for secure email communications.</li>
                <li><strong>Class 2 DSC:</strong> For verifying individuals against government databases. Used for regulatory filings and company registrations.</li>
                <li><strong>Class 3 DSC:</strong> For high-security transactions. Used for e-Tendering, e-Procurement, and other critical applications.</li>
                <li><strong>Personal Certificates:</strong> For individual use in secure communications and document signing.</li>
                <li><strong>Organizational Certificates:</strong> For businesses to ensure secure transactions and regulatory compliance.</li>
                <li><strong>Government Certificates:</strong> High assurance certificates for sensitive transactions and government services.</li>
              </ul>
              <h2>Documents Required for DSC:</h2>
              <h3>For Indian DSCs:</h3>
              <ul>
                <li><strong>Identity Proof:</strong> PAN Card, Aadhaar Card, Passport, or Voter ID.</li>
                <li><strong>Address Proof:</strong> Utility Bill, Bank Statement, Rental Agreement, or Property Document.</li>
                <li><strong>Photograph:</strong> Recent passport-sized photograph.</li>
                <li><strong>Business Proof (for organizational DSCs):</strong> Registration Certificate, Incorporation Certificate, or Partnership Deed.</li>
              </ul>
              <h3>For Foreign DSCs:</h3>
              <ul>
                <li><strong>Identity Proof:</strong> Passport or National ID card.</li>
                <li><strong>Address Proof:</strong> Utility Bill, Bank Statement, Rental Agreement, or Property Document.</li>
                <li><strong>Photograph:</strong> Recent passport-sized photograph.</li>
                <li><strong>Business Proof (for organizational DSCs):</strong> Registration Certificate, Incorporation Certificate, or similar documents from the foreign jurisdiction.</li>
              </ul>
              <h3>Contact us today to schedule a consultation and take the first step towards securing your DSC.</h3>
            </div>
          </div>
          <div className="phone-frame">
            <div className="phone-screen">
              <div className="contact-form">
                <h2>Enroll Now </h2>
                <form onSubmit={handleSubmit}>
                  <label>
                    Name:
                    <input 
                      type="text" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      required 
                    />
                  </label>
                  <label>
                    Email:
                    <input 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                    />
                  </label>
                  <label>
                    Phone:
                    <input 
                      type="tel" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                      required 
                    />
                  </label>
                  <label>
                    Message:
                    <textarea 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} 
                      required 
                    />
                  </label>
                  <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? <div className="loading-spinner"></div> : 'Submit'}
                  </button>
                </form>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="advisor">
        <button onClick={() => navigate('/dsc')} className="back-btn">Go back</button>
      </div>
    </div>
  );
};

export default DSCOWN;
