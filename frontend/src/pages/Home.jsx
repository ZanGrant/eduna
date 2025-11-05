import React from "react";
import { Search, Filter } from 'lucide-react';
import Navbar from "../components/Navbar";
import Recommendation from "../components/Recommendation"
import Footer from "../components/Footer"

import logo from "../assets/images/eduna-logo.png";
import promoBanner from "../assets/images/PromoBanner.png";
import heroCenter from "../assets/images/Museum.png";
import heroLeft from "../assets/images/Barelang.png";
import heroRight from "../assets/images/Pantai.png";

import museumImg from "../assets/images/Museum.png";
import ranohImg from "../assets/images/RanohIsland.png";
import vietnamImg from "../assets/images/VietnamCamp.png"
import hutanImg from "../assets/images/HutanWisataMataKucing.png"
import batamzooImg from "../assets/images/BatamZooParadise.png"
import waterparkImg from "../assets/images/Waterpark.png"
import tamanrusaImg from "../assets/images/TamanRusa.png"
import megawisataImg from "../assets/images/MegaWisataOcarina.png"

import "../styles/HeroSection.css";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-background">
          <img src={heroLeft} alt="Left" className="hero-side left" />
          <img src={heroRight} alt="Right" className="hero-side right" />
          <img src={heroCenter} alt="Center" className="hero-main" />
        </div>

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

      {/* Gambar Banner Gamifikasi */}
      <section className="flex justify-center items-center py-20 bg-gray-50">
        <div className="promo-illu">
          <img
            src={promoBanner}
            alt="Promo Banner Illustration"
            className="w-full max-w-[600px] object-contain"
          />
        </div>
      </section>

      {/* About Us */}
      <section className="flex justify-center items-center py-[100px] px-[200px] bg-[#f9f9f9] relative z-[5] max-lg:px-10 max-lg:py-20">
        <div className="flex items-center justify-between gap-[80px] flex-wrap max-w-[1100px] w-full max-lg:flex-col max-lg:gap-10">

          <div className="flex-1 flex justify-center items-center min-w-[140px]">
            <div className="p-[80px] rounded-[25px] bg-white shadow-[0_0_40px_rgba(36,106,254,0.1)] flex justify-center items-center border border-[#eaeaea] max-lg:p-10">
              <img
                src={logo}
                alt="Eduna Logo"
                className="w-[320px] h-auto object-contain"
              />
            </div>
          </div>

          <div className="flex-[1.2] min-w-[100px] text-left max-lg:text-center">
            <h2 className="text-[56px] font-bold bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent mb-6 max-lg:text-[1.8rem] max-lg:mx-auto">
              About <span>Us</span>
            </h2>
            <p className="text-[20px] leading-[1.8] text-[#333] max-w-[580px] max-lg:max-w-full max-lg:mx-auto">
              <strong className="text-black font-semibold">
                Eduna (Education Nusa)
              </strong>{" "}
              adalah platform digital pariwisata Kepulauan Riau yang memadukan
              layanan praktis dan edukasi. Eduna memudahkan masyarakat dan
              wisatawan untuk{" "}
              <span className="font-medium text-black">
                booking keberangkatan
              </span>
              , sekaligus menghadirkan{" "}
              <span className="font-medium text-black">learning module</span> dan{" "}
              <span className="font-medium text-black">challenges</span> untuk
              mengenal budaya, tempat, dan pengalaman lokal secara interaktif.
            </p>
          </div>
        </div>
      </section>

      <Recommendation />
      <Footer />
    </div>
  );
};

export default Home;
