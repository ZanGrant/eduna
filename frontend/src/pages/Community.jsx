import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

// ASSETS
import communityBanner from "../assets/images/Community.svg";
import museumImg from "../assets/images/Museum.png";
import ranohImg from "../assets/images/RanohIsland.png";
import vietnamImg from "../assets/images/VietnamCamp.png";
import hutanImg from "../assets/images/HutanWisataMataKucing.png";

const Community = () => {
  const navigate = useNavigate();

  // ================== REVIEW DESTINATIONS ==================
  const reviewDestinations = [
    {
      id: 1,
      title: "Museum Raja Ali Haji",
      image: museumImg,
      rating: 3,
      reviews: 25,
      path: "/review-museum-raja-ali-haji",
    },
    {
      id: 2,
      title: "Ranoh Island Resort",
      image: ranohImg,
      rating: 3,
      reviews: 25,
      grayscale: true,
    },
    {
      id: 3,
      title: "Vietnam Camp, Galang",
      image: vietnamImg,
      rating: 3,
      reviews: 25,
      grayscale: true,
    },
  ];

  // ================== RECOMMENDED LOCATIONS ==================
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
    <>
      <Navbar />

      {/* ===================== MAIN WRAPPER ===================== */}
      <div className="w-full max-w-[1100px] mx-auto px-6 pt-10 pb-10 mt-10">

        {/* SEARCH BAR */}
        <div className="max-w-[900px] mx-auto flex items-center bg-white shadow-sm rounded-xl px-5 py-3 mb-10 mt-20">
          <Search className="text-gray-400" size={20} color="blue" />
          <input
            type="text"
            placeholder="Place to go"
            className="w-full ml-3 outline-none text-gray-600"
          />
        </div>

        {/* BANNER */}
        <div className="max-w-[900px] mx-auto rounded-[30px] overflow-hidden mb-14">
          <img src={communityBanner} alt="Community Banner" className="w-full" />
        </div>

        {/* ===================== REVIEW DESTINASI ===================== */}
        <h2 className="heading text-center font-[550] mb-10 leading-[1.3] text-[1.875rem] md:text-2xl lg:text-[2.5rem]">
          <span className="heading-gradient bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
            Review Destinasi Ini
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviewDestinations.map((item) => (
            <div
              key={item.id}
              onClick={() => item.path && navigate(item.path)}
              className={`rounded-xl transition-all duration-300
              ${item.path ? "cursor-pointer hover:-translate-y-2" : "cursor-default"}`}
            >
              <div className="rounded-lg overflow-hidden mb-3 h-[200px] w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    item.grayscale ? "grayscale" : ""
                  } hover:scale-110`}
                />
              </div>

              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>

              {/* Rating */}
              <div className="flex items-center gap-2 pb-2">
                <span className="font-semibold text-gray-800">{item.rating}</span>

                <div className="flex">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <span
                      key={num}
                      className={num <= item.rating ? "text-yellow-400" : "text-gray-300"}
                    >
                      ★
                    </span>
                  ))}
                </div>

                <span className="text-sm text-gray-600 underline">
                  ({item.reviews} reviews)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== RECOMMENDED ===================== */}
      <div className="recommendation-explore w-full py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="pattern-background absolute inset-0 z-0"></div>

        <div className="relative z-10 max-w-[1280px] mx-auto">
          <h2 className="heading text-center font-[550] mb-12 leading-[1.3] text-[1.875rem] md:text-2xl lg:text-[2.5rem]">
            <span className="heading-gradient bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
              Recommended Location to Explore!
            </span>
          </h2>

          <div className="cards-grid grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {locations.map((location) => (
              <div
                key={location.id}
                className="location-card bg-white rounded-[1.5rem] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all p-4 cursor-pointer"
                onClick={() =>
                  location.title === "Museum Batam Raja Ali Haji" &&
                  navigate("/museum-raja-ali-haji")
                }
              >
                <div className="relative h-48 md:h-44 rounded-lg overflow-hidden mb-4">
                  <img
                    src={location.image}
                    alt={location.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />

                  {location.comingSoon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-12 text-sm font-medium shadow-lg">
                        COMING SOON
                      </span>
                    </div>
                  )}
                </div>

                <div className="px-2 pb-2">
                  <h3 className="text-lg font-[550] mb-1">{location.title}</h3>
                  <p className="text-gray-600 text-sm font-medium">{location.category}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Community;
