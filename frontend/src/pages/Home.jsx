// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import logo from "../assets/images/eduna-logo-big.svg";
import promoBanner from "../assets/images/PromoBanner.png";
import heroCenter from "../assets/images/Museum.png";
import heroLeft from "../assets/images/Barelang.png";
import heroRight from "../assets/images/Pantai.png";

import museumImg from "../assets/images/Museum.png";
import ranohImg from "../assets/images/RanohIsland.png";
import vietnamImg from "../assets/images/VietnamCamp.png";
import hutanImg from "../assets/images/HutanWisataMataKucing.png";

import { MapPin, Calendar, LightbulbIcon } from "lucide-react";

// ⬅️ TERIMA props dari App: isLoggedIn, openLogin, openRegister
const Home = ({ isLoggedIn, openLogin, openRegister }) => {
  const [images, setImages] = useState([heroLeft, heroCenter, heroRight]);
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();

  // Rotasi gambar setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setImages(([left, center, right]) => [right, left, center]);
        setFade(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const locations = [
    {
      id: 1,
      title: "Museum Batam Raja Ali Haji",
      category: "Heritage Tourism",
      image: museumImg,
      comingSoon: false,
    },
    {
      id: 2,
      title: "Ranoh Island Resort",
      category: "Nature Tourism",
      image: ranohImg,
      comingSoon: true,
    },
    {
      id: 3,
      title: "Vietnam Camp, Galang Island",
      category: "Heritage Tourism",
      image: vietnamImg,
      comingSoon: true,
    },
    {
      id: 4,
      title: "Hutan Wisata Mata Kucing",
      category: "Nature Tourism",
      image: hutanImg,
      comingSoon: true,
    },
  ];

  return (
    <div>
      {/* NAVBAR – panggil fungsi dari App */}
      <Navbar
        openLogin={openLogin}
        openRegister={openRegister}
        isLoggedIn={isLoggedIn}
      />

      {/* 👉 TIDAK ADA LAGI showLogin / showRegister / showForgot di sini */}

      {/* == HERO SECTION == */}
      <section className="relative w-full pb-[90px] overflow-hidden font-satoshi bg-white mt-5">
        <div
          className={`relative flex justify-center items-center h-[860px] transition-opacity duration-500 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* LEFT */}
          <img
            src={images[0]}
            alt="Left"
            className="
              absolute top-[180px] left-[5%] w-[55%] rounded-[20px] object-cover opacity-80
              md:w-[60%]
              sm:w-[75%] sm:left-[-10%] sm:top-[140px]
              max-[480px]:w-[90%] max-[480px]:left-[-25%] max-[480px]:top-[120px]
              transition-all duration-500
            "
          />

          {/* RIGHT */}
          <img
            src={images[2]}
            alt="Right"
            className="
              absolute top-[180px] right-[5%] w-[55%] rounded-[20px] object-cover opacity-80
              md:w-[60%]
              sm:w-[75%] sm:right-[-10%] sm:top-[140px]
              max-[480px]:w-[90%] max-[480px]:right-[-25%] max-[480px]:top-[120px]
              transition-all duration-500
            "
          />

          {/* CENTER */}
          <img
            src={images[1]}
            alt="Center"
            className="
              relative z-20 w-[75%] max-w-[1000px] rounded-[50px] object-cover
              md:w-[80%]
              sm:w-[95%] sm:top-[-20px]
              max-[480px]:w-[120%] max-[480px]:top-[120px]
              transition-all duration-500
            "
          />
        </div>

        {/* SEARCH CARD */}
        <div
          className="
            absolute left-1/2 bottom-[150px] -translate-x-1/2
            bg-white shadow-lg rounded-[16px]
            p-[16px_15px] text-left
            w-[45%] max-w-[650px] z-30
            lg:w-[55%] md:w-[60%] sm:w-[80%]
          "
        >
          <h2
            className="text-[36px] mb-[4px] ml-[4px] font-[550]
            bg-[linear-gradient(90deg,#246afe_18%,#9747ff_37%,#ffba08_74%)]
            bg-clip-text text-transparent inline-block"
          >
            Find Your Learning Journey
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
            {/* Lokasi */}
            <div className="flex items-center gap-2 border border-[#246afe] rounded px-3 py-2">
              <MapPin className="text-[#878282] w-4 h-4" />
              <select className="text-sm text-[#878282] font-medium bg-transparent focus:outline-none">
                <option>Batam</option>
                <option>Tanjung Pinang</option>
                <option>Bintan</option>
              </select>
            </div>

            {/* Tanggal */}
            <div className="flex items-center gap-2 border border-[#246afe] rounded px-2 py-1.5">
              <Calendar className="text-[#878282] w-4 h-4" />
              <input
                type="date"
                className="text-sm text-[#878282] font-medium bg-transparent focus:outline-none"
              />
            </div>

            {/* Topik */}
            <div className="flex items-center gap-2 border border-[#246afe] rounded px-3 py-2">
              <LightbulbIcon className="text-[#878282] w-4 h-4" />
              <select className="text-sm text-[#878282] font-medium bg-transparent focus:outline-none">
                <option>Culture</option>
                <option>Nature</option>
                <option>History</option>
                <option>Technology</option>
              </select>
            </div>

            <button className="bg-[#005cff] hover:bg-[#0040c1] text-white rounded px-3 py-1.5 font-medium transition">
              Find Now
            </button>
          </div>
        </div>
      </section>

      {/* … bagian bawah (promo, about, recommendation) tetap persis punyamu … */}

      <Footer />
    </div>
  );
};

export default Home;