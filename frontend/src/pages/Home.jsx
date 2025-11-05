import React from "react";
import Navbar from "../components/Navbar";
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

import "../styles/Homestyle.css";

const Home = () => {
  const locations = [
    {
      id: 1,
      title: "Museum Batam Raja Ali Haji",
      category: "Heritage Tourism",
      image: museumImg,
      comingSoon: false
    },
    {
      id: 2,
      title: "Ranoh Island Resort",
      category: "Nature Tourism",
      image: ranohImg,
      comingSoon: true
    },
    {
      id: 3,
      title: "Vietnam Camp, Galang Island",
      category: "Heritage Tourism",
      image: vietnamImg,
      comingSoon: true
    },
    {
      id: 4,
      title: "Hutan Wisata Mata Kucing",
      category: "Nature Tourism",
      image: hutanImg,
      comingSoon: true
    }
  ];

  return (
    <div>
      <Navbar />

      {/* == HERO SECTION == */}
      <section className="hero-section relative w-full pb-[120px] overflow-hidden font-satoshi">
        <div className="hero-background relative flex justify-center items-center h-[860px]">
          <img src={heroLeft} alt="Left" className="absolute top-[180px] left-[-5%] w-[55%] rounded-[20px] object-cover opacity-80" />
          <img src={heroRight} alt="Right" className="absolute top-[180px] right-[-5%] w-[55%] rounded-[20px] object-cover opacity-80" />
          <img src={heroCenter} alt="Center" className="relative z-20 w-[70%] rounded-[50px] object-cover" />
        </div>

        <div className="search-card absolute left-1/2 bottom-[10px] transform -translate-x-1/2 bg-white shadow-lg rounded-[16px] p-[20px_32px] text-center w-[45%] z-30">
          <h2 className="text-[1.8rem] mb-[15px] font-semibold bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent text-left inline-block">
            <span className="text-purple-500">Find Your</span>{" "}
            <span className="text-orange-500">Learning Journey</span>
          </h2>
          <div className="search-bar flex justify-center items-center gap-4">
            <select className="px-2 py-2 border border-[#246afe] rounded text-sm">
              <option>Batam</option>
              <option>Tanjung Pinang</option>
              <option>Bintan</option>
            </select>
            <input type="date" className="px-2 py-2 border border-[#246afe] rounded text-sm" />
            <input type="text" placeholder="Topic" className="px-2 py-2 border border-[#246afe] rounded text-sm" />
            <button className="bg-[#005cff] hover:bg-[#0040c1] text-white rounded px-4 py-2 font-medium transition">Find Now</button>
          </div>
        </div>
      </section>

      {/* == GAME BANNER == */}
      <section className="flex justify-center items-center py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="promo-illu w-full flex justify-center">
          <img
            src={promoBanner}
            alt="Promo Banner Illustration"
            className="w-full max-w-[600px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] object-contain"
          />
        </div>
      </section>


      {/* == ABOUT US == */}
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

      {/* == RECOMMENDATION EXPLORE == */}
      <div className="recommendation-explore w-full py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="pattern-background absolute inset-0 z-0"></div>

        <div className="container relative z-10 max-w-[1280px] mx-auto">
          {/* Header */}
          <h2 className="heading text-center font-bold mb-12 leading-[1.3] text-[1.875rem] md:text-2xl lg:text-[2.5rem]">
            <span className="heading-gradient bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
              Recommended Location to Explore!
            </span>
          </h2>

          {/* Cards Grid */}
          <div className="cards-grid grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {locations.map((location) => (
              <div
                key={location.id}
                className="location-card bg-white rounded-[1.5rem] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all p-4"
              >
                {/* Image Container */}
                <div className="image-container relative h-48 md:h-44 rounded-lg overflow-hidden mb-4">
                  <img
                    src={location.image}
                    alt={location.title}
                    className="location-image w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop";
                    }}
                  />

                  {/* Coming Soon Badge */}
                  {location.comingSoon && (
                    <div className="coming-soon-overlay absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
                      <span className="coming-soon-badge bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        COMING SOON
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="card-content px-2 pb-2">
                  <h3 className="location-title text-lg font-bold text-gray-900 mb-1 leading-6">
                    {location.title}
                  </h3>
                  <p className="location-category text-gray-600 text-sm font-medium">
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
