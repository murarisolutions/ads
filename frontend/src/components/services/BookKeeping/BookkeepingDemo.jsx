import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../services/Consulting/consulting.css';

const BookkeepingServicesPage = () => {
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
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="consulting-page">
      <header className="consulting-header">
        <h1>Bookkeeping Services</h1>
      </header>
      <main className="consulting-content">
        <div className="consulting-main">
          <div className="consulting-info">
            <div className="consulting-text">
              <p>
                At Murari Solutions, we specialize in keeping your financial records in order. Our comprehensive bookkeeping services are designed to ensure accuracy, compliance, and timely financial management for your business.
              </p>
              <h2>Our Bookkeeping Services Include:</h2>
              <ul>
                <li><strong>Daily, Monthly, and Yearly Bookkeeping:</strong> Tailored services to keep your financial records up-to-date, accurate, and ready for any business decision.</li>
                <li><strong>Financial Statements Preparation:</strong> Monthly, quarterly, and annual financial statements to provide clear insights into your business's financial health.</li>
                <li><strong>Payroll Management:</strong> Efficient payroll processing and compliance with all applicable regulations, including tax filings.</li>
                <li><strong>Accounts Receivable/Payable Management:</strong> Managing invoicing, payments, and collections to ensure smooth cash flow operations.</li>
                <li><strong>Budgeting and Forecasting:</strong> Developing and maintaining budgets, financial forecasts, and projections to guide your business growth.</li>
                <li><strong>Tax Preparation Support:</strong> Ensuring all financial records are organized and ready for tax season, assisting with necessary documentation.</li>
              </ul>
              <h2>Documents Required for Bookkeeping Services:</h2>
              <ul>
                <li><strong>Business Records:</strong> Invoices, receipts, bank statements, and previous financial reports.</li>
                <li><strong>Payroll Information:</strong> Employee details, salary records, and payroll tax filings.</li>
                <li><strong>Expense Documentation:</strong> Bills, receipts, and proof of business expenses.</li>
                <li><strong>Tax Documents:</strong> Previous year’s tax returns, GST filings, and any relevant tax documents.</li>
                <li><strong>Banking Information:</strong> Bank account details, credit card statements, and loan agreements.</li>
              </ul>
              <h3>
                Contact us today to schedule a consultation and ensure your bookkeeping is handled with precision and care.
              </h3>
            </div>
          </div>
          <div className="phone-frame">
            <div className="phone-screen">
              <div className="contact-form">
                <h2>Contact Us</h2>
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

export default BookkeepingServicesPage;
