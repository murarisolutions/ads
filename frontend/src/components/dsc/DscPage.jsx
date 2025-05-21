import React from "react";
import { useNavigate } from "react-router-dom";
import "./DscPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature, faUpload } from "@fortawesome/free-solid-svg-icons";

// Card Component: Reusable component for displaying card content
const Card = ({ title, description, onClick, icon }) => (
  <div className="transparent-card" onClick={onClick}>
    <div className="transparent-card-header">
      {icon && <span className="card-icon">{icon}</span>}
      <span>{title}</span>
    </div>
    <div className="transparent-card-content">
      {description}
    </div>
    <div className="transparent-card-footer">
      <button className="btn-primary">More</button>
    </div>
  </div>
);

// DscPage Component: Main page for displaying DSC options
const DscPage = () => {
  const navigate = useNavigate();

  return (
    <div className="dsc-page">
      <header className="header">
        {/* Add navigation or logo here if needed */}
      </header>
      <main className="main">
        <section className="hero">
          <h1>
            Explore Our <span>DSC</span> Service
          </h1>
          <div className="cards-container">
            <div className="cards">
              {/* Card for Indian DSC with specific details */}
              <Card
                title="DSC"
                description="Obtain your Digital Signature Certificate for use in India or abroad, guided by our experts."
                icon={<FontAwesomeIcon icon={faFileSignature} />}
                onClick={() => navigate("/dsc-india")}
              />
              {/* New Card for Upload Video */}
              <Card
                title="Upload Video"
                description="Upload your video securely and easily through our platform."
                icon={<FontAwesomeIcon icon={faUpload} />}
                onClick={() => navigate("/upload-video")}
              />
            </div>
          </div>
        </section>
        <div className="button-container">
          <button className="go-back-btn" onClick={() => navigate("/")}>
            Go back
          </button>
        </div>
      </main>
    </div>
  );
};

export default DscPage;
