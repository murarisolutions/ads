import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../services/Consulting/consulting.css';

const BusinessFormationPage = () => {
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
        <h1>Business Formation Services</h1>
      </header>
      <main className="consulting-content">
        <div className="consulting-main">
          <div className="consulting-info">
            <div className="consulting-text">
              <p>
                At Murari Solutions, we offer comprehensive business formation services to help you start your business on the right foot. Our team provides expert guidance on everything from selecting the right business structure to registering your company and ensuring compliance with all legal requirements.
              </p>
              <h2>Services We Provide in Business Formation:</h2>
              <ul>
                <li>
                  <strong>Business Entity Selection:</strong> Guidance on choosing the right business structure (e.g., Sole Proprietorship, Partnership, LLC, Corporation) that suits your goals. Analysis of legal, tax, and operational implications of each business type.
                </li>
                <li>
                  <strong>Company Registration:</strong> Assistance with the complete registration process, including obtaining the necessary licenses and permits. Filing all required documents with local and state authorities to ensure compliance.
                </li>
                <li>
                  <strong>Business Name Reservation:</strong> Helping you select and reserve a unique business name. Ensuring the name is available and not already in use.
                </li>
                <li>
                  <strong>Tax Identification Number (TIN) Acquisition:</strong> Assistance with obtaining an Employer Identification Number (EIN) or Tax Identification Number (TIN) from the IRS. Guidance on setting up state tax accounts as required.
                </li>
                <li>
                  <strong>Operating Agreements and Bylaws:</strong> Drafting custom operating agreements for LLCs or bylaws for corporations. Ensuring your business operates smoothly with clearly defined roles and responsibilities.
                </li>
                <li>
                  <strong>Bank Account Setup:</strong> Assistance with setting up business bank accounts to manage your finances efficiently. Guidance on maintaining proper financial records and accounting practices.
                </li>
                <li>
                  <strong>Trademark Registration:</strong> Helping you protect your brand by registering trademarks for your business name, logo, or slogan. Ensuring your intellectual property is secured from infringement.
                </li>
                <li>
                  <strong>Compliance and Ongoing Support:</strong> Providing ongoing compliance support to help your business stay in good standing. Assistance with filing annual reports, renewing licenses, and other regulatory requirements.
                </li>
                <li>
                  <strong>Virtual Office Services:</strong> Offering virtual office addresses for business registration. Managing mail forwarding and providing meeting space on demand.
                </li>
                <li>
                  <strong>Startup Advisory:</strong> Consulting on business plan development, financial forecasting, and market analysis. Tailoring strategic advice to help your startup grow and succeed in a competitive market.
                </li>
              </ul>
              <h3>
                Contact us today to schedule a consultation and take the first step towards establishing your business successfully!
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

export default BusinessFormationPage;
