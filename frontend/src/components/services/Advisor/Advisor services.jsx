import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../services/Consulting/consulting.css';

const AdvisorServices = () => {
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
        <h1>Advisor Services</h1>
      </header>
      <main className="consulting-content">
        <div className="consulting-main">
          <div className="consulting-info">
            <div className="consulting-text">
              <p>
                Our advisor services are designed to help you optimize your tax strategy and save money effectively. We offer personalized advice to ensure you are making the most of your financial opportunities.
              </p>
              <h2>Our Advisor Services Include:</h2>
              <ul>
                <li><strong>Tax Strategy Optimization:</strong> Tailored strategies to minimize your tax liabilities.</li>
                <li><strong>Financial Planning:</strong> Comprehensive financial planning to achieve your goals.</li>
                <li><strong>Investment Guidance:</strong> Professional advice on making the most of your investments.</li>
                <li><strong>Wealth Management:</strong> Strategies for managing and growing your wealth effectively.</li>
                <li><strong>Risk Management:</strong> Identifying and mitigating potential financial risks.</li>
              </ul>
              <h2>Documents Required for Advisor Services:</h2>
              <ul>
                <li><strong>Income Details:</strong> Recent income statements and tax returns.</li>
                <li><strong>Investment Portfolio:</strong> Statements for current investments.</li>
                <li><strong>Financial Goals:</strong> Information on your short-term and long-term financial goals.</li>
                <li><strong>Risk Tolerance:</strong> Details about your risk tolerance and preferences.</li>
                <li><strong>Previous Financial Plans:</strong> Any existing financial plans or strategies.</li>
              </ul>
              <h3>Contact us today to schedule a consultation and optimize your financial strategy.</h3>
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

export default AdvisorServices;
