import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Tambah ini
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

import "../styles/Homestyle.css";

import { MapPin, Calendar, LightbulbIcon } from "lucide-react";

const Home = () => {
  const [images, setImages] = useState([heroLeft, heroCenter, heroRight]);
  const [fade, setFade] = useState(false);
  const navigate = useNavigate(); // ✅ Hook untuk navigasi

  // Rotasi gambar setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // mulai dissolve out
      setTimeout(() => {
        setImages(([left, center, right]) => [right, left, center]);
        setFade(false); // dissolve in lagi
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
      <Navbar />

      {/* == HERO SECTION == */}
      <section className="hero-section relative w-full pb-[90px] overflow-hidden font-satoshi bg-white">
        <div
          className={`hero-background relative flex justify-center items-center h-[860px] transition-opacity duration-500 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          <img
            src={images[0]}
            alt="Left"
            className="absolute top-[180px] left-[-5%] w-[55%] rounded-[20px] object-cover opacity-80"
          />
          <img
            src={images[2]}
            alt="Right"
            className="absolute top-[180px] right-[-5%] w-[55%] rounded-[20px] object-cover opacity-80"
          />
          <img
            src={images[1]}
            alt="Center"
            className="relative z-20 w-[70%] rounded-[50px] object-cover"
          />
        </div>

        <div className="search-card absolute left-1/2 bottom-[150px] transform -translate-x-1/2 bg-white shadow-lg rounded-[16px] p-[16px_15px] text-left w-[45%] z-30">
          <h2
            className="text-[36px] mb-[4px] ml-[4px] font-[550]
            bg-[linear-gradient(90deg,#246afe_18%,#9747ff_37%,#ffba08_74%)] 
            bg-clip-text text-transparent text-left inline-block"
          >
            Find Your Learning Journey
          </h2>

          <div className="search-bar flex justify-center items-center gap-4">
            {/* Lokasi */}
            <div className="flex items-center gap-2 border border-[#246afe] rounded px-3 py-2">
              <MapPin className="text-[#878282] w-4 h-4" />
              <select className="text-sm text-[#878282] font-medium focus:outline-none bg-transparent">
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
                className="text-sm text-[#878282] font-medium border-none focus:outline-none bg-transparent"
              />
            </div>

            {/* Topik */}
            <div className="flex items-center gap-2 border border-[#246afe] rounded px-3 py-2">
              <LightbulbIcon className="text-[#878282] w-4 h-4" />
              <select className="text-sm text-[#878282] font-medium focus:outline-none bg-transparent">
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

      {/* == GAME BANNER == */}
      <section className="flex justify-center items-center py-0 bg-white px-4 sm:px-6 lg:px-8 relative -mt-10">
        <div className="promo-illu w-full flex justify-center">
          <img
            src={promoBanner}
            alt="Promo Banner Illustration"
            className="w-full max-w-[1100px] sm:max-w-[800px] md:max-w-[900px] lg:max-w-[1100px] object-contain"
          />
        </div>
      </section>

      {/* == ABOUT US == */}
      <section className="flex justify-start items-center pt-[100px] pr-[100px] pb-[100px] pl-0 bg-white relative z-[5] max-lg:flex-col max-lg:px-10 max-lg:py-20 overflow-hidden">
        <div className="flex items-center justify-between gap-[80px] w-full max-w-[1400px] mx-auto max-lg:flex-col max-lg:gap-10">
          {/* == KOTAK LOGO == */}
          <div className="flex justify-start items-center w-[45%] max-lg:w-full relative">
            <div className="p-[80px] rounded-[25px] bg-white shadow-[0_0_40px_rgba(36,106,254,0.1)] flex justify-center items-center border border-[#eaeaea] rounded-r-[25px] w-full max-lg:p-10 max-lg:rounded-[25px] -ml-[20px] max-lg:ml-0 transition-all duration-300">
              <img
                src={logo}
                alt="Eduna Logo"
                className="w-[380px] h-auto object-contain max-lg:w-[280px] transition-transform duration-300"
              />
            </div>
          </div>

          {/* == TEKS ABOUT US == */}
          <div className="flex-1 text-left max-lg:text-center">
            <h2 className="text-[52px] font-[580] mb-1 max-lg:text-[1.8rem] max-lg:mx-auto bg-[linear-gradient(90deg,#246afe_18%,#9747ff_37%,#ffba08_74%)] bg-clip-text text-transparent inline-block">
              About Us
            </h2>
            <p className="text-[20px] leading-[1.8] text-[#333] max-w-[580px] max-lg:max-w-full max-lg:mx-auto text-justify">
              <strong className="text-black font-semibold">
                Eduna (Education Nusa)
              </strong>{" "}
              adalah platform digital pariwisata Kepulauan Riau yang
              memadukan layanan praktis dan edukasi. Eduna memudahkan masyarakat
              dan wisatawan untuk booking keberangkatan, sekaligus menghadirkan
              learning module dan challenges untuk mengenal budaya, tempat, dan
              pengalaman lokal secara interaktif.
            </p>
          </div>
        </div>
      </section>

      {/* == RECOMMENDATION EXPLORE == */}
      <div className="recommendation-explore w-full py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
        <div className="pattern-background absolute inset-0 z-0"></div>

        <div className="container relative z-10 max-w-[1280px] mx-auto">
          <h2 className="heading text-center font-[550] mb-12 leading-[1.3] text-[1.875rem] md:text-2xl lg:text-[2.5rem]">
            <span className="heading-gradient bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
              Recommended Location to Explore!
            </span>
          </h2>

          <div className="cards-grid grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {locations.map((location) => (
              <div
                key={location.id}
                onClick={() => {
                  if (location.title === "Museum Batam Raja Ali Haji") {
                    navigate("/museum-raja-ali-haji"); // ✅ klik museum → pindah
                  }
                }}
                className="location-card bg-white rounded-[1.5rem] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all p-4 cursor-pointer"
              >
                <div className="image-container relative h-48 md:h-44 rounded-lg overflow-hidden mb-4">
                  <img
                    src={location.image}
                    alt={location.title}
                    className="location-image w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                  {location.comingSoon && (
                    <div className="coming-soon-overlay absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
                      <span className="coming-soon-badge bg-blue-600 text-white px-4 py-2 rounded-12 text-sm font-medium shadow-lg">
                        COMING SOON
                      </span>
                    </div>
                  )}
                </div>

                <div className="card-content px-2 pb-2">
                  <h3 className="location-title text-lg font-[550] text-black-600 mb-1 leading-6">
                    {location.title}
                  </h3>
                  <p className="location-category text-white-500 text-sm font-medium">
                    {location.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
