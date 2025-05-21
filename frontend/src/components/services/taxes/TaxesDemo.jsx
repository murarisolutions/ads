// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../../services/Consulting/consulting.css';

// const TaxServicesPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="consulting-page">
//       <header className="consulting-header">
//         <h1>Tax Services</h1>
//       </header>
//       <main className="consulting-content">
//         <div className="consulting-main">
//           <div className="consulting-info">
//             <div className="consulting-text">
//               <p>
//                 At Murari Solutions, we provide comprehensive tax services designed to meet the diverse needs of our clients. Our team of experienced tax professionals is committed to helping you navigate the complexities of tax regulations, ensuring compliance, and maximizing your tax benefits.
//               </p>
//               <h2>Our Tax Services Include:</h2>
//               <ul>
//                 <li><strong>Income Tax Filing:</strong> Filing individual, partnership, and corporate income tax returns. Assistance with tax planning to minimize liabilities. Guidance on claiming deductions and credits.</li>
//                 <li><strong>GST Registration and Filing:</strong> GST registration for businesses and individuals. Monthly, quarterly, and annual GST return filing. GST compliance audits and advice on input tax credit.</li>
//                 <li><strong>Tax Audits:</strong> Conducting tax audits as per legal requirements, preparing and filing tax audit reports, and representing clients in front of tax authorities during audits.</li>
//                 <li><strong>TDS Compliance:</strong> TDS return preparation and filing, assistance with TDS corrections and refunds, and advisory on TDS rates and applicability.</li>
//                 <li><strong>Corporate Tax Services:</strong> Corporate tax planning and strategy development, preparation and filing of corporate tax returns, and advisory on tax incentives and exemptions.</li>
//                 <li><strong>Wealth Management and Tax Advisory:</strong> Personalized wealth management strategies, advisory on investment-linked tax benefits, and estate planning and inheritance tax advice.</li>
//               </ul>
//               <h2>Documents Required for Tax Services:</h2>
//               <ul>
//                 <li><strong>Personal Identification:</strong> PAN Card, Aadhaar Card or Passport/Voter ID.</li>
//                 <li><strong>Income Proof:</strong> Salary slips, Form 16, bank statements, rental income receipts, and proof of other sources of income.</li>
//                 <li><strong>Investment Proof:</strong> Receipts for investments under Section 80C, documents for home loan payments, and proof of other eligible deductions.</li>
//                 <li><strong>Business Income:</strong> Profit and loss statement, balance sheet, GST returns, and business bank statements.</li>
//                 <li><strong>Other Documents:</strong> Previous year’s tax returns, medical bills, education loan documents, capital gains details, and foreign assets information.</li>
//               </ul>
//               <h3>
//                 Contact us today to schedule a consultation and take the first step towards optimizing your tax strategy.
//               </h3>
//             </div>
//           </div>
//         </div>
//       </main>
//       <div className="advisor">
//         <button onClick={() => navigate('/accounting-services')} className="back-btn">Go back</button>
//       </div>
//     </div>
//   );
// };

// export default TaxServicesPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../services/Consulting/consulting.css';

const TaxServicesPage = () => {
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
        <h1>Tax Services</h1>
      </header>
      <main className="consulting-content">
        <div className="consulting-main">
          <div className="consulting-info">
            <div className="consulting-text">
              <p>
                At Murari Solutions, we provide comprehensive tax services designed to meet the diverse needs of our clients. Our team of experienced tax professionals is committed to helping you navigate the complexities of tax regulations, ensuring compliance, and maximizing your tax benefits.
              </p>
              <h2>Our Tax Services Include:</h2>
              <ul>
                <li><strong>Income Tax Filing:</strong> Filing individual, partnership, and corporate income tax returns. Assistance with tax planning to minimize liabilities. Guidance on claiming deductions and credits.</li>
                <li><strong>GST Registration and Filing:</strong> GST registration for businesses and individuals. Monthly, quarterly, and annual GST return filing. GST compliance audits and advice on input tax credit.</li>
                <li><strong>Tax Audits:</strong> Conducting tax audits as per legal requirements, preparing and filing tax audit reports, and representing clients in front of tax authorities during audits.</li>
                <li><strong>TDS Compliance:</strong> TDS return preparation and filing, assistance with TDS corrections and refunds, and advisory on TDS rates and applicability.</li>
                <li><strong>Corporate Tax Services:</strong> Corporate tax planning and strategy development, preparation and filing of corporate tax returns, and advisory on tax incentives and exemptions.</li>
                <li><strong>Wealth Management and Tax Advisory:</strong> Personalized wealth management strategies, advisory on investment-linked tax benefits, and estate planning and inheritance tax advice.</li>
              </ul>
              <h2>Documents Required for Tax Services:</h2>
              <ul>
                <li><strong>Personal Identification:</strong> PAN Card, Aadhaar Card or Passport/Voter ID.</li>
                <li><strong>Income Proof:</strong> Salary slips, Form 16, bank statements, rental income receipts, and proof of other sources of income.</li>
                <li><strong>Investment Proof:</strong> Receipts for investments under Section 80C, documents for home loan payments, and proof of other eligible deductions.</li>
                <li><strong>Business Income:</strong> Profit and loss statement, balance sheet, GST returns, and business bank statements.</li>
                <li><strong>Other Documents:</strong> Previous year’s tax returns, medical bills, education loan documents, capital gains details, and foreign assets information.</li>
              </ul>
              <h3>
                Contact us today to schedule a consultation and take the first step towards optimizing your tax strategy.
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

export default TaxServicesPage;
