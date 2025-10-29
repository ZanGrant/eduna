import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/Images/eduna-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="eduna logo" className="logo-img" />
      </div>

      <ul className="nav-links">
        <li><Link to="/" className="active">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/challenge">Challenge</Link></li>
        <li><Link to="/community">Community</Link></li>
      </ul>

      <div className="auth-buttons">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
        <Link to="/register">
          <button className="signup-btn">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
