import React from "react";
import "../styles/AboutUs.css";
import logo from "../assets/images/eduna-logo.png";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-card">
        {/* Box khusus untuk logo */}
        <div className="about-left">
          <div className="logo-box">
            <img src={logo} alt="Eduna Logo" className="about-logo" />
          </div>
        </div>

        {/* Teks About Us tanpa box */}
        <div className="about-right">
          <h2 className="about-title">
            About <span>Us</span>
          </h2>
          <p className="about-text">
            <strong>Eduna (Education Nusa)</strong> adalah platform digital
            pariwisata Kepulauan Riau yang memadukan layanan praktis dan
            edukasi. Eduna memudahkan masyarakat dan wisatawan untuk booking
            keberangkatan, sekaligus menghadirkan learning module dan challenges
            untuk mengenal budaya, tempat, dan pengalaman lokal secara interaktif.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
