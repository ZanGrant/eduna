import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Tambahkan ini
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search, SlidersHorizontalIcon } from "lucide-react";

import museumImg from "../assets/images/Museum.png";
import ranohImg from "../assets/images/RanohIsland.png";
import vietnamImg from "../assets/images/VietnamCamp.png";
import hutanImg from "../assets/images/HutanWisataMataKucing.png";
import batamzooImg from "../assets/images/BatamZooParadise.png";
import waterparkImg from "../assets/images/Waterpark.png";
import tamanrusaImg from "../assets/images/TamanRusa.png";
import megawisataImg from "../assets/images/MegaWisataOcarina.png";

export default function Explore() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // ✅ Hook untuk pindah halaman

  const destinations = [
    {
      id: 1,
      name: "Museum Raja Ali Haji Batam",
      category: "Sejarah",
      image: museumImg,
      status: "available",
      badge: "Learning Available",
      path: "/museum-raja-ali-haji", // ✅ Tambahkan path
    },
    { id: 2, name: "Kampung Vietnam", category: "Sejarah", image: vietnamImg, status: "coming-soon" },
    { id: 3, name: "Ranoh Island Resort", category: "Resort - Pantai", image: ranohImg, status: "coming-soon" },
    { id: 4, name: "Waterpark Top 100 Batu Aji", category: "Waterpark", image: waterparkImg, status: "coming-soon" },
    { id: 5, name: "Hutan Wisata Mata Kucing", category: "Hutan Wisata", image: hutanImg, status: "coming-soon" },
    { id: 6, name: "Taman Rusa Sekupang", category: "Kebun Binatang - Taman", image: tamanrusaImg, status: "coming-soon" },
    { id: 7, name: "Mega Wisata Ocarina", category: "Mega Wisata", image: megawisataImg, status: "coming-soon" },
    { id: 8, name: "Batam Zoo Paradise", category: "Kebun Binatang", image: batamzooImg, status: "coming-soon" },
  ];

  const filteredDestinations = destinations.filter((d) => {
    if (activeTab === "learning" && !d.badge) return false;
    if (activeTab === "completed") return false;
    if (!d.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div>
      <Navbar />

      {/* ===== Explore Section ===== */}
      <div className="pt-[130px] px-6 min-h-screen bg-gray-50 pb-2">
        {/* Search */}
        <div className="relative max-w-[800px] mx-auto mb-[30px]">
          <Search
            color="blue"
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search Location"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-4 pl-[50px] pr-5 border border-slate-200 rounded-xl text-[16px] bg-white transition-all duration-300 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-200"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-[30px] flex-wrap max-w-[800px] mx-auto">
          {["all", "learning", "completed"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-7 py-3 border-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-white text-slate-500 border-slate-200 hover:text-blue-600 hover:border-blue-600"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}

          <button className="flex items-center gap-2 px-7 py-3 border-2 rounded-lg font-medium bg-[#FFB800] text-white border-[#FFB800] hover:bg-[#FF9500] hover:border-[#FF9500] transition-all duration-300">
            <SlidersHorizontalIcon color="black" size={16} /> Kategori
          </button>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8 max-w-[1080px] mx-auto mb-[60px]">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((d) => (
              <div
                key={d.id}
                onClick={() => d.path && navigate(d.path)} // ✅ klik card → navigate ke halaman detail
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(255,186,8,0.25)]"
              >
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  {d.status === "coming-soon" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-blue-600 text-white px-7 py-2.5 rounded-lg text-[16px] tracking-wide">
                        COMING SOON
                      </div>
                    </div>
                  )}
                  {d.badge && (
                    <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-3 py-1.5 rounded-md text-[12px] font-semibold">
                      {d.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-[18px] font-semibold text-slate-800 mb-1">
                    {d.name}
                  </h3>
                  <p className="text-[14px] text-slate-500">{d.category}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-slate-500">No destinations found.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
