import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './consulting.css'; 

const ConsultingPage = () => {
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

    const namePattern = /^[a-zA-Z\s]{2,50}$/;
    if (!namePattern.test(name)) {
      setError('Please enter a valid name (2-50 characters, letters only).');
      return false;
    }

    if (message.trim().length < 10) {
      setError('Message should be at least 10 characters long and provide meaningful content.');
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
    setSuccess(true);

    try {
      const response = await axios.post('http://localhost:3000/users', {
        name,
        email,
        phone,
        message
      });
      setSuccess(response.data.message);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err) {
        setError('Failed to send email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="consulting-page">
      <header className="consulting-header">
        <h1>Consulting Services</h1>
      </header>
      <main className="consulting-content">
        <div className="consulting-main">
          <div className="consulting-info">
            <div className="consulting-text">
              <p>
                At Murari Solutions, we offer expert business consulting services tailored to your needs. Our team of experienced consultants will work with you to analyze your business operations, identify areas for improvement, and develop strategies to help you achieve your goals.
              </p>
              <h1>Documents Needed for Consultancy Registration</h1>
              <p>
                Identity Proof: Provide copies of PAN card, Aadhar card, passport, or voter ID.
                Address Proof: Submit documents like utility bills, rental agreement, or property documents.
                Business Address Proof: If the consultancy has a separate business address, provide proof of ownership or rental agreement.
                Registration Certificate: If your consultancy is a partnership firm, provide a partnership deed. For LLP or Pvt. Ltd., submit the incorporation certificate.
                MOA and AOA: In the case of LLP or Pvt. Ltd., submit Memorandum of Association and Articles of Association.
                Bank Statement: Furnish a copy of the firm’s bank statement or a canceled cheque.
                Digital Signature Certificate (DSC): Obtain DSC for authorized signatories.
                Professional Qualification Certificates: Include certificates demonstrating the professional qualifications of the promoters or directors.
                Tax Registration: Obtain GST registration certificate, if applicable.
                Letterhead: Design a letterhead for official communication.
              </p>
              <h3>
                Enroll or contact us today to schedule a consultation and take the first step towards optimizing your business.
              </h3>
            </div>
          </div>
          <div className="phone-frame">
            <div className="phone-screen">
              <div className="contact-form">
                <h2>Enroll Now</h2>
                <form onSubmit={handleSubmit}>
                  <label aria-label="Name">
                    Name:
                    <input 
                      type="text" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      required 
                    />
                  </label>
                  <label aria-label="Email">
                    Email:
                    <input 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                    />
                  </label>
                  <label aria-label="Phone">
                    Phone:
                    <input 
                      type="tel" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                      required 
                    />
                  </label>
                  <label aria-label="Message">
                    Message:
                    <textarea 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} 
                      required 
                    />
                  </label>
                  <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? <div className="loading-spinner"></div> : (success ? 'Thanks' : 'Submit')}
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

export default ConsultingPage;