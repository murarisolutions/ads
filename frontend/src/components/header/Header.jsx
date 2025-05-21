import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import "./header.css";
import logo from "../../assets/images/logo.png";

export const Header = () => {
  const location = useLocation(); 
  const navigate = useNavigate(); 

  const isActive = (path) => location.pathname === path;

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-image" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" className={isActive("/") ? "active" : ""}>
              <HomeIcon className="nav-icon" /> Home
            </Link>
          </li>
          <li>
            <Link
              to="/accounting-services"
              className={isActive("/accounting-services") ? "active" : ""}
            >
              <AccountBalanceIcon className="nav-icon" /> Accounting Services
            </Link>
          </li>
          <li>
            <Link to="/dsc" className={isActive("/dsc") ? "active" : ""}>
              <VerifiedUserIcon className="nav-icon" /> DSC Services
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive("/about") ? "active" : ""}>
              <AccountCircleIcon className="nav-icon" /> About Us
            </Link>
          </li>
        </ul>
      </nav>
      <div className="cta-section">
        <div className="cta-button">
          <button onClick={handleContactClick}>
            <PhoneIcon className="cta-icon" /> CONTACT US
          </button>
        </div>
      </div>
    </header>
  );
};
