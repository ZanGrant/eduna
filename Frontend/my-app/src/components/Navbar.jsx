import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/Images/eduna-logo.png"; // path ke logo kamu

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="eduna logo" className="logo-img" />
      </div>

      <ul className="nav-links">
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#">Explore</a></li>
        <li><a href="#">Challenge</a></li>
        <li><a href="#">Booking</a></li>
        <li><a href="#">Community</a></li>
      </ul>

      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;