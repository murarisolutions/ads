import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../services/Consulting/consulting.css';

const PayrollServicesPage = () => {
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
        <h1>Payroll Services</h1>
      </header>
      <main className="consulting-content">
        <div className="consulting-main">
          <div className="consulting-info">
            <div className="consulting-text">
              <p>
                At Murari Solutions, we offer comprehensive payroll services that are designed to ensure your employees are paid accurately and on time, while staying compliant with all relevant tax and labor laws. Our team of payroll specialists handles all aspects of payroll processing, allowing you to focus on your core business activities.
              </p>
              <h2>Our Payroll Services Include:</h2>
              <ul>
                <li><strong>Payroll Processing:</strong> Accurate calculation and processing of employee salaries, wages, bonuses, and deductions.</li>
                <li><strong>Payroll Tax Compliance:</strong> Calculation, deduction, and filing of payroll taxes, including TDS and EPF contributions.</li>
                <li><strong>Employee Benefits Administration:</strong> Management of employee benefits such as health insurance, retirement plans, and other perks.</li>
                <li><strong>Leave and Attendance Management:</strong> Integration of leave and attendance records into payroll calculations.</li>
                <li><strong>Customized Payroll Reports:</strong> Generation of detailed payroll reports for management and accounting purposes.</li>
                <li><strong>Employee Self-Service Portal:</strong> Provision of a portal for employees to view payslips, tax statements, and other payroll-related information.</li>
              </ul>
              <h2>Documents Required for Payroll Services:</h2>
              <ul>
                <li><strong>Employee Information:</strong> Personal details, bank account information, PAN Card, Aadhaar Card, and any other identification documents.</li>
                <li><strong>Salary Structure:</strong> Details of the employee's salary package, including basic pay, allowances, bonuses, and deductions.</li>
                <li><strong>Attendance Records:</strong> Monthly attendance and leave records for each employee.</li>
                <li><strong>Tax Deduction Details:</strong> Information on TDS, EPF, and other statutory deductions applicable to the employees.</li>
                <li><strong>Previous Payroll Data:</strong> Past payroll records for smooth transition and accurate calculation.</li>
              </ul>
              <h3>Contact us today to schedule a consultation and streamline your payroll management process.</h3>
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

export default PayrollServicesPage;
