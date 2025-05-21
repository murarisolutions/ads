import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../services/Consulting/consulting.css';

const FinancialPlanningPage = () => {
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
        <h1>Financial Planning Services</h1>
      </header>
      <main className="consulting-content">
        <div className="consulting-main">
          <div className="consulting-info">
            <div className="consulting-text">
              <p>
                At Murari Solutions, we offer expert financial planning services designed to help you achieve your long-term financial goals. Our team of experienced financial planners works closely with you to understand your unique needs and develop a customized strategy that aligns with your objectives.
              </p>
              <h2>Our Financial Planning Services Include:</h2>
              <ul>
                <li><strong>Retirement Planning:</strong> Creating a comprehensive retirement plan to ensure financial security in your golden years, including pension plans, retirement savings strategies, and income distribution.</li>
                <li><strong>Investment Planning:</strong> Personalized investment strategies tailored to your risk tolerance and financial goals, covering a range of asset classes and market opportunities.</li>
                <li><strong>Tax Planning:</strong> Strategies to minimize tax liabilities and maximize savings through efficient tax planning, including advice on tax-efficient investments and deductions.</li>
                <li><strong>Estate Planning:</strong> Protecting your legacy by ensuring a smooth transfer of wealth to your heirs, including wills, trusts, and inheritance tax planning.</li>
                <li><strong>Education Planning:</strong> Saving for your children's education with tailored plans that account for tuition costs, scholarships, and financial aid options.</li>
                <li><strong>Debt Management:</strong> Creating a plan to reduce and manage your debt, including mortgage advice, credit counseling, and debt consolidation strategies.</li>
              </ul>
              <h2>Documents Required for Financial Planning Services:</h2>
              <ul>
                <li><strong>Personal Identification:</strong> PAN Card, Aadhaar Card or Passport/Voter ID.</li>
                <li><strong>Income Proof:</strong> Salary slips, Form 16, bank statements, and proof of other sources of income.</li>
                <li><strong>Investment Proof:</strong> Details of current investments, such as mutual funds, stocks, bonds, real estate, and retirement accounts.</li>
                <li><strong>Liability Documents:</strong> Details of current loans, mortgages, credit card balances, and other debts.</li>
                <li><strong>Insurance Policies:</strong> Life insurance, health insurance, and other policy documents.</li>
                <li><strong>Estate Planning Documents:</strong> Wills, trusts, and other estate planning documents.</li>
              </ul>
              <h3>
                Contact us today to schedule a consultation and take the first step towards securing your financial future.
              </h3>
            </div>
          </div>
          <div className="phone-frame">
            <div className="phone-screen">
              <div className="contact-form">
                <h2>Contact Us</h2>
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

export default FinancialPlanningPage;
