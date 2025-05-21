import React from 'react';
import './about.css';
import { useNavigate } from "react-router-dom";


const About = () => {
    const navigate = useNavigate();

  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p>
          Welcome to Murari Solutions, where we provide exceptional business consulting services tailored to your unique needs. Our mission is to empower businesses through expert guidance in accounting, financial planning, and strategic consulting.
        </p>
      </header>

      <main className="about-main">
        <section className="professional-expertise-section">
          <h2>Our Professional Expertise</h2>
          <p>
            At Murari Solutions, we take great pride in our team of highly skilled and experienced professionals committed to delivering exceptional results. Our lead consultant, Naveen, has over 15 years of experience. His extensive background in financial systems, tax planning, and business strategy makes him a valuable asset to our clients. Naveen’s meticulous approach ensures that every financial concern is addressed with the utmost precision and care.
          </p>
          <p>
            Supporting Naveen is our Senior Financial Consultant, Divya, who brings a wealth of experience in strategic investment planning and financial forecasting. Divya is dedicated to crafting tailored solutions that drive growth and success. Her expertise in financial analysis and planning ensures that our clients receive top-notch support and guidance.
          </p>
          <p>
            Together, Naveen and Divya lead a team of professionals who are committed to providing solutions that are specifically designed to address your unique business needs. Their combined expertise spans various areas of business consulting, including market analysis, regulatory compliance, and operational efficiency. At Murari Solutions, we are dedicated to helping you achieve your goals and navigate the complexities of the business world with confidence.
          </p>
        </section>

        <section className="services-section">
          <h2>Our Services</h2>
          <p>
            We offer a comprehensive range of services designed to meet the diverse needs of businesses. Our offerings include:
          </p>
          <ul>
            <li>
              <strong>Business Consulting:</strong> We provide strategic advice to help you navigate complex business challenges, optimize operations, and drive growth.
            </li>
            <li>
              <strong>Accounting and Bookkeeping:</strong> Our expert team ensures accurate financial records, compliance with regulations, and timely reporting, so you can focus on what matters most.
            </li>
            <li>
              <strong>Financial Planning:</strong> We help you develop robust financial plans to achieve your long-term goals, manage risks, and make informed decisions.
            </li>
            <li>
              <strong>Tax Planning and Compliance:</strong> Our services include strategic tax planning to minimize liabilities and ensure compliance with tax regulations.
            </li>
            <li>
              <strong>Audit Services:</strong> We offer comprehensive audit services to assess the integrity of your financial information and ensure transparency.
            </li>
            <li>
              <strong>Payroll Management:</strong> Our team manages your payroll efficiently, ensuring timely and accurate compensation for your employees.
            </li>
            <li>
              <strong>Business Formation:</strong> We assist in the setup and registration of new businesses, providing guidance on legal structures and compliance.
            </li>
          </ul>
          <p>
            With our extensive experience and commitment to excellence, we are dedicated to delivering results that drive success and growth for our clients.
          </p>
        </section>

        <section className="dsc-section">
          <h2>Digital Signature Certificates (DSC)</h2>
          <p>
            At Murari Solutions, we offer comprehensive services related to Digital Signature Certificates (DSC). A DSC is essential for secure and legally valid electronic transactions. It serves as a digital equivalent of a physical signature, ensuring the authenticity and integrity of your documents and communications.
          </p>
          <p>
            Our team provides end-to-end support for obtaining and managing DSCs, including:
          </p>
          <ul>
            <li>
              <strong>DSC Application:</strong> Assistance with the application process, including documentation and submission.
            </li>
            <li>
              <strong>Verification and Compliance:</strong> Ensuring that all regulatory requirements are met for successful DSC issuance.
            </li>
            <li>
              <strong>Certificate Management:</strong> Guidance on how to effectively use and manage your DSC for various digital transactions.
            </li>
          </ul>
          <p>
            Our expertise in DSCs ensures that your electronic transactions are secure, compliant, and efficiently managed. We are committed to providing you with the support you need to leverage DSCs effectively in your business operations.
          </p>
        </section>
      </main>
      
      <div className="button-container">
          <button className="back-btn" onClick={() => navigate("/")}>Go back</button>
        </div>
    </div>
  );
};

export default About;
