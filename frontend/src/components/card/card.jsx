import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, description, link, icon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div className="transparent-card" onClick={handleClick}>
      <div className="icon-container">
        {icon} {/* Ensure this is a valid React component or element */}
      </div>
      <div className="transparent-card-header">
        {title}
      </div>
      <div className="transparent-card-content">
        {description}
      </div>
      <div className="transparent-card-footer">
        <button className="btn-primary">More</button>
      </div>
    </div>
  );
};

export default Card;
