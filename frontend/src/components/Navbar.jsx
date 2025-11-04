import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/Images/eduna-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="eduna logo" className="logo-img" />
      </div>

      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/explore" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/challenge" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Challenge
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/community" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Community
          </NavLink>
        </li>
      </ul>

      <div className="auth-buttons">
        <NavLink to="/login">
          <button className="login-btn">Login</button>
        </NavLink>
        <NavLink to="/register">
          <button className="signup-btn">Sign Up</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
