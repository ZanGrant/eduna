import React, { useState, useEffect } from "react";
import "../styles/HeroSection.css";

// Import gambar manual
import museumImg from "../assets/Images/museum-batam.png";
import barelangImg from "../assets/Images/barelang-bridge.png";
import nongsaImg from "../assets/Images/nongsa-beach.png";


const HeroSection = () => {
  const images = [museumImg, barelangImg, nongsaImg];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-section">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        />
      ))}

      <div className="hero-content">
        <h1>Explore with a Guide</h1>
        <div className="search-bar">
          <select>
            <option>Batam</option>
          </select>
          <input type="date" />
          <input type="number" placeholder="People" />
          <button>Find Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
