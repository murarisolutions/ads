import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./dscservices.css";

const DscDetailPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert('You must accept the terms and conditions.');
      return;
    }
    console.log({ name, email, phone, message });
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setAcceptedTerms(false);
  };

  return (
    <div className="dsc-detail-page">
      <h1>Digital Signature Certificate (DSC) Details</h1>
      <p>
        A Digital Signature Certificate (DSC) is a secure digital key that certifies the identity of the holder, issued by a Certifying Authority (CA). It is used to sign documents electronically, ensuring that the information sent electronically is secure and authentic.
      </p>

      <h2>Why You Need a DSC</h2>
      <ul>
        <li>To ensure the authenticity of the documents sent electronically.</li>
        <li>For secure and reliable online transactions.</li>
        <li>To comply with legal requirements for electronic filings.</li>
        <li>To access and submit forms on government websites, such as income tax returns, EPFO, and MCA forms.</li>
      </ul>

      <h2>Types of DSC</h2>
      <ul>
        <li><strong>Class 1:</strong> Used for securing email communication.</li>
        <li><strong>Class 2:</strong> Used for filing documents with the Registrar of Companies, income tax filings, etc.</li>
        <li><strong>Class 3:</strong> Used for e-commerce applications, online auctions, and e-tendering.</li>
      </ul>

      <h2>How to Get Your DSC</h2>
      <p>
        You can obtain a DSC through a Certifying Authority (CA) such as eMudhra, Sify, or Ncode. The process involves filling out an application form, submitting necessary documents, and completing a verification process.
      </p>

      <h2>Do It Yourself</h2>
      <p>
        If you prefer to do your DSC on your own, you can start the process by visiting the official website of a Certifying Authority. Below is a link to help you get started:
      </p>

      {/* Example of a simple form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <div className="accept-label">
          <input type="checkbox" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} />
          Accept Terms and Conditions
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      <div className="advisor">
        <button onClick={() => navigate('/dsc')} className="back-btn">Go back</button>
      </div>
    </div>
  );
};

export default DscDetailPage;
