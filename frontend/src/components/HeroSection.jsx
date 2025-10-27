import React from "react";
import "../styles/HeroSection.css";
import heroCenter from "../assets/images/Museum.png";
import heroLeft from "../assets/images/Barelang.png";
import heroRight from "../assets/images/Pantai.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Bagian background foto */}
      <div className="hero-background">
        <img src={heroLeft} alt="Left" className="hero-side left" />
        <img src={heroRight} alt="Right" className="hero-side right" />
        <img src={heroCenter} alt="Center" className="hero-main" />
      </div>

      {/* Card pencarian */}
      <div className="search-card">
        <h2>
          <span className="purple">Find Your</span>{" "}
          <span className="orange">Learning Journey</span>
        </h2>

        <div className="search-bar">
          <select>
            <option>Batam</option>
            <option>Tanjung Pinang</option>
            <option>Bintan</option>
          </select>
          <input type="date" />
          <input type="text" placeholder="Topic" />
          <button>Find Now</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;