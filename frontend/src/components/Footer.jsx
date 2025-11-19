import React from 'react';
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";

import edunaLogo from '../assets/images/eduna-logo-big.svg';
import naturaNusaLogo from '../assets/images/natura-nusa-logo.png';
import instagramIcon from '../assets/icons/Instagram.svg';
import facebookIcon from '../assets/icons/Facebook.svg';
import tiktokIcon from '../assets/icons/Tiktok.svg';
import linkedinIcon from '../assets/icons/Linkedin.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Section 1: Eduna Logo */}
        <div className="footer-logo-section">
          <img src={edunaLogo} alt="Eduna Logo" className="footer-logo" />
          <div className="footer-placeholder">
            <div className="placeholder-line"></div>
            <div className="placeholder-line"></div>
            <div className="placeholder-line"></div>
            <div className="placeholder-line short"></div>
          </div>
        </div>

        {/* Section 2: Navigation Menu Title */}
        <div className="footer-nav-title-section">
          <h3 className="footer-heading">
            Navigation <br /> Menu
          </h3>
        </div>

        {/* Section 3: Navigation Links */}
        <div className="footer-nav-section">
          <nav className="footer-nav">

            <NavLink 
              to="/" 
              className="footer-link"
            >
              Home
            </NavLink>

            <NavLink
              to="/explore"
              className="footer-link"
            >
              Explore
            </NavLink>

            <NavLink
              to="/challenge"
              className="footer-link"
            >
              Challenges
            </NavLink>

            <NavLink
              to="/community"
              className="footer-link"
            >
              Community
            </NavLink>

          </nav>
        </div>

        {/* Section 4: Social Media */}
        <div className="footer-social-section">
          <h3 className="footer-heading">Social Media</h3>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={instagramIcon} alt="Instagram" className="icon-img" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={facebookIcon} alt="Facebook" className="icon-img" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={tiktokIcon} alt="TikTok" className="icon-img" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={linkedinIcon} alt="LinkedIn" className="icon-img" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <div className="footer-credit">
          <span className="credit-text">Made by</span>
          <img src={naturaNusaLogo} alt="Natura Nusa" className="credit-logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
