import React from 'react';
import "../styles/Footer.css";

import edunaLogo from '../assets/images/eduna-logo.png';
import naturaNusaLogo from '../assets/images/natura-nusa-logo.png';
import instagramIcon from '../assets/icons/Instagram.png';
import facebookIcon from '../assets/icons/Facebook.png';
import tiktokIcon from '../assets/icons/Tiktok.png';
import linkedinIcon from '../assets/icons/Linkedin.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <img src={edunaLogo} alt="Eduna Logo" className="footer-logo" />
          <div className="footer-placeholder">
            <div className="placeholder-line"></div>
            <div className="placeholder-line"></div>
            <div className="placeholder-line"></div>
            <div className="placeholder-line short"></div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="footer-nav-section">
          <h3 className="footer-heading">Navigation Menu</h3>
          <nav className="footer-nav">
            <a href="#home" className="footer-link">Home</a>
            <a href="#explore" className="footer-link">Explore</a>
            <a href="#challenges" className="footer-link">Challenges</a>
            <a href="#community" className="footer-link">Community</a>
          </nav>
        </div>

        {/* Social Media */}
        <div className="footer-social-section">
          <h3 className="footer-heading">Social Media</h3>
          <div className="social-icons">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
            >
              <img src={instagramIcon} alt="Instagram" className="icon-img" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
            >
              <img src={facebookIcon} alt="Facebook" className="icon-img" />
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
            >
              <img src={tiktokIcon} alt="TikTok" className="icon-img" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
            >
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