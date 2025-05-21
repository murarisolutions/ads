import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../services/Consulting/consulting.css';

const RetirementPlanningPage = () => {
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
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="consulting-page">
      <header className="consulting-header">
        <h1>Retirement Planning Services</h1>
      </header>
      <main className="consulting-content">
        <div className="consulting-main">
          <div className="consulting-info">
            <div className="consulting-text">
              <p>
                Our retirement planning services help you prepare for a financially secure retirement, including strategies for savings, investments, and managing expenses.
              </p>
              <h2>Our Retirement Planning Services Include:</h2>
              <ul>
                <li><strong>Retirement Goals:</strong> Identifying and planning for your retirement goals.</li>
                <li><strong>Savings Strategies:</strong> Developing a savings plan for retirement.</li>
                <li><strong>Investment Plans:</strong> Advising on investment options to build retirement savings.</li>
                <li><strong>Expense Management:</strong> Planning for managing expenses in retirement.</li>
                <li><strong>Social Security and Pensions:</strong> Planning for social security benefits and pension plans.</li>
              </ul>
              <h2>Documents Required for Retirement Planning Services:</h2>
              <ul>
                <li><strong>Income Details:</strong> Current income, salary slips, and other income sources.</li>
                <li><strong>Retirement Accounts:</strong> Statements from retirement accounts, pension plans.</li>
                <li><strong>Savings and Investments:</strong> Details of savings and investments for retirement.</li>
                <li><strong>Retirement Goals:</strong> Information about your retirement goals and plans.</li>
              </ul>
              <h3>ENROLL NOW.</h3>
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

export default RetirementPlanningPage;
