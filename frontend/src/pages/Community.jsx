import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

// ICON
import { Search } from "lucide-react";

// ASSETS
import communityBanner from "../assets/images/Community.svg";
import museumImg from "../assets/images/Museum.png";
import ranohImg from "../assets/images/RanohIsland.png";
import vietnamImg from "../assets/images/VietnamCamp.png";
import hutanImg from "../assets/images/HutanWisataMataKucing.png";

const Community = () => {
  const navigate = useNavigate();

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

      {/* ======================= WRAPPER PUTIH ======================= */}
      <div className="w-full max-w-[1100px] mx-auto px-6 pt-10 pb-10 mt-10">

        {/* ========================== SEARCH BAR ========================== */}
        <div className="max-w-[900px] mx-auto flex items-center bg-white shadow-sm rounded-full px-5 py-3 mb-10 mt-20">
          <Search className="text-gray-400" size={20} />

          <input
            type="text"
            placeholder="Place to go"
            className="w-full ml-3 outline-none text-gray-600"
          />
        </div>

        {/* ========================== BANNER COMMUNITY ========================== */}
        <div className="max-w-[900px] mx-auto rounded-[30px] overflow-hidden mb-14">
          <img
            src={communityBanner}
            alt="Community Banner"
            className="w-full"
          />
        </div>

        {/* ========================== REVIEW DESTINASI ========================== */}
        <h2 className="heading text-center font-[550] mb-10 leading-[1.3] text-[1.875rem] md:text-2xl lg:text-[2.5rem]">
          <span className="heading-gradient bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
            Review Destinasi Ini
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* CARD 1 */}
          <div className="rounded-xl">
            <img
              src={museumImg}
              alt="Museum Raja Ali Haji"
              className="rounded-lg mb-3 h-[200px] w-full object-cover"
            />

            <h3 className="font-semibold text-lg mb-1">
              Museum Raja Ali Haji
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-800">3</span>

              <div className="flex">
                {[1, 2, 3, 4, 5].map((num) => (
                  <span
                    key={num}
                    className={num <= 3 ? "text-yellow-400" : "text-gray-300"}
                  >
                    ★
                  </span>
                ))}
              </div>

              <span className="text-sm text-gray-600 underline">
                (25 reviews)
              </span>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-xl">
            <img
              src={ranohImg}
              alt="Ranoh Island Resort"
              className="rounded-lg mb-3 h-[200px] w-full object-cover grayscale"
            />

            <h3 className="font-semibold text-lg mb-1">
              Ranoh Island Resort
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-800">3</span>

              <div className="flex">
                {[1, 2, 3, 4, 5].map((num) => (
                  <span
                    key={num}
                    className={num <= 3 ? "text-yellow-400" : "text-gray-300"}
                  >
                    ★
                  </span>
                ))}
              </div>

              <span className="text-sm text-gray-600 underline">
                (25 reviews)
              </span>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded-xl">
            <img
              src={vietnamImg}
              alt="Vietnam Camp Galang"
              className="rounded-lg mb-3 h-[200px] w-full object-cover grayscale"
            />

            <h3 className="font-semibold text-lg mb-1">
              Vietnam Camp, Galang
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-800">3</span>

              <div className="flex">
                {[1, 2, 3, 4, 5].map((num) => (
                  <span
                    key={num}
                    className={num <= 3 ? "text-yellow-400" : "text-gray-300"}
                  >
                    ★
                  </span>
                ))}
              </div>

              <span className="text-sm text-gray-600 underline">
                (25 reviews)
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* ======================= RECOMMENDED (BERDIRI SENDIRI) ======================= */}
      <div className="recommendation-explore w-full py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

        {/* PATTERN BACKGROUND */}
        <div className="pattern-background absolute inset-0 z-0"></div>

        {/* CONTENT */}
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
                onClick={() => {
                  if (location.title === "Museum Batam Raja Ali Haji") {
                    navigate("/museum-raja-ali-haji");
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
                  <h3 className="location-title text-lg font-[550] mb-1">
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
    </>
  );
};

export default Community;
