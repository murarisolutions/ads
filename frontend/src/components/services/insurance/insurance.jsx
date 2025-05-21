// src/services/InsuranceServices/InsuranceServicesPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../services/Consulting/consulting.css';

const InsuranceServicesPage = () => {
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
        <h1>Insurance Services</h1>
      </header>
      <main className="consulting-content">
        <div className="consulting-main">
          <div className="consulting-info">
            <div className="consulting-text">
              <p>
                At Murari Solutions, we offer a wide range of insurance services to provide comprehensive coverage and peace of mind. Our experienced insurance professionals are here to help you understand your options and find the right insurance solutions tailored to your needs.
              </p>
              <h2>Our Insurance Services Include:</h2>
              <ul>
                <li><strong>Life Insurance:</strong> Customized life insurance policies to secure your family's financial future. Coverage options for term life, whole life, and universal life insurance.</li>
                <li><strong>Health Insurance:</strong> Health insurance plans that cover medical expenses, hospital stays, and prescription medications. Options for individual and family coverage.</li>
                <li><strong>Home Insurance:</strong> Protection for your home and belongings against damage, theft, and natural disasters. Policies for homeowners and renters.</li>
                <li><strong>Auto Insurance:</strong> Comprehensive auto insurance coverage for cars, motorcycles, and other vehicles. Options for liability, collision, and full coverage.</li>
                <li><strong>Business Insurance:</strong> Insurance solutions for businesses of all sizes, including property insurance, liability insurance, and workers' compensation.</li>
                <li><strong>Travel Insurance:</strong> Travel insurance plans to cover unexpected events during your trips, such as medical emergencies, trip cancellations, and lost baggage.</li>
              </ul>
              <h2>Documents Required for Insurance Services:</h2>
              <ul>
                <li><strong>Identity Proof:</strong> Passport, Aadhaar Card, PAN Card, or Voter ID.</li>
                <li><strong>Address Proof:</strong> Utility bills, rental agreement, or property documents.</li>
                <li><strong>Income Proof:</strong> Salary slips, bank statements, or income tax returns.</li>
                <li><strong>Medical Reports:</strong> Relevant medical history or recent health check-up reports (for health and life insurance).</li>
                <li><strong>Vehicle Documents:</strong> Registration certificate, driving license, and previous insurance policy (for auto insurance).</li>
                <li><strong>Property Documents:</strong> Ownership proof, property valuation, and previous insurance policy (for home and business insurance).</li>
              </ul>
              <h3>Contact us today to learn more about our insurance services and secure your future.</h3>
            </div>
          </div>
          <div className="phone-frame">
            <div className="phone-screen">
              <div className="contact-form">
                <h2>Enroll Now</h2>
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
        <button onClick={() => navigate('/accounting-services')} className="back-btn">Go back</button>
      </div>
    </div>
  );
};

export default InsuranceServicesPage;
