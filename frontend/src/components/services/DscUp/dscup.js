import React, { useCallback } from "react";
import { FaVideo, FaUpload, FaClipboardCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../DscUp/dscup.css";

const VideoVerificationSteps = () => {
  const navigate = useNavigate();

  const handleGoBack = useCallback(() => {
    navigate("/dsc");
  }, [navigate]);

  return (
    <div className="verification-container">
      <h1>How to Do DSC Video Verification</h1>

      <div className="step-box">
        <h2><FaVideo className="step-icon" /> Step 1: Prepare for Recording</h2>
        <ul>
          <li>Find a <strong>well-lit environment</strong>.</li>
          <li>Ensure your <strong>face and voice</strong> are clear.</li>
        </ul>
      </div>

      <div className="step-box">
        <h2><FaVideo className="step-icon" /> Step 2: Record Your Video</h2>
        <ol>
          <li>Clearly state <strong>your full name, DSC details, and a 3-digit code</strong>.</li>
          <li>Ensure the recording is clear and audible.</li>
          <li>Preview your video before uploading.</li>
        </ol>
      </div>

      <div className="step-box">
        <h2><FaUpload className="step-icon" /> Step 3: Upload Your Video</h2>
        <ul>
          <li>Click <strong>"Upload Video" OR "Submit Video"</strong>.</li>
          <li>Wait for <strong>successful upload confirmation</strong>.</li>
        </ul>
      </div>

      <div className="step-box">
        <h2><FaClipboardCheck className="step-icon" /> Step 4: Submit for Verification</h2>
        <ul>
          <li>Share it with the <strong>support team</strong> for approval.</li>
        </ul>
      </div>

      <button 
        className="verify-button" 
        onClick={() => window.open("https://certificate.pantasign.com/Account/SignUp", "_blank")}
      >
        Start Video Verification
      </button>

      <div className="advisor">
        <button onClick={handleGoBack} className="back-btn">Go Back</button>
      </div>
    </div>
  );
};

export default VideoVerificationSteps;
