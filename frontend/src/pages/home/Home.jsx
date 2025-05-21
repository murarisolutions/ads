
import React from "react";
import { useNavigate } from "react-router-dom";
import { category } from "../../assets/data/data";
import './home.css';
 

const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = (category) => {
    navigate(`/${category.toLowerCase().replace(' ', '-')}`);
  };

  return (
    <div className="home-container">
     
      <div className="content-overlay">
        <div className="category-container">
          {category.map((item) => (
            <div 
              key={item.id} 
              className="category-card" 
              onClick={() => handleCardClick(item.category)}
            >
              <div className="media-container">
                {item.category === "ACCOUNTI SERVICES" ? (
                  <video className="category-video" autoPlay loop muted>
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={item.cover} alt={item.title} className="category-image" />
                )}
                <div className="overlay-text">
                  <h3>{item.category}</h3>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
