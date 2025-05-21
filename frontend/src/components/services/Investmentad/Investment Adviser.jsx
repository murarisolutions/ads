import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../services/Consulting/consulting.css';

const InvestmentAdvisorPage = () => {
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
        <h1>Investment Advisory Services</h1>
      </header>
      <main className="consulting-content">
        <div className="consulting-main">
          <div className="consulting-info">
            <div className="consulting-text">
              <p>
                At Murari Solutions, our investment advisory services are tailored to help you achieve your financial goals. Our expert advisors provide personalized guidance to help you make informed investment decisions and build a portfolio that aligns with your long-term objectives.
              </p>
              <h2>Our Investment Advisory Services Include:</h2>
              <ul>
                <li><strong>Portfolio Management:</strong> Creating and managing a diversified investment portfolio suited to your financial goals and risk tolerance.</li>
                <li><strong>Investment Strategy Development:</strong> Formulating investment strategies to maximize returns and achieve financial milestones.</li>
                <li><strong>Market Insights:</strong> Offering analysis and insights on market trends, investment opportunities, and economic conditions.</li>
                <li><strong>Retirement Planning:</strong> Designing investment plans to ensure a secure and comfortable retirement.</li>
                <li><strong>Estate Planning:</strong> Advising on strategies to transfer wealth efficiently and manage estate taxes.</li>
              </ul>
              <h2>Documents Required for Investment Advisory:</h2>
              <ul>
                <li><strong>Personal Identification:</strong> PAN Card, Aadhaar Card or Passport/Voter ID.</li>
                <li><strong>Financial Statements:</strong> Bank statements, investment statements, and other relevant financial documents.</li>
                <li><strong>Investment Goals:</strong> Documentation outlining your financial goals, risk tolerance, and investment preferences.</li>
              </ul>
              <h3>
                Contact us today to schedule a consultation and start optimizing your investment strategy.
              </h3>
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

export default InvestmentAdvisorPage;
