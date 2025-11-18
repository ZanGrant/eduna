import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Share2, PencilLine } from "lucide-react";
import museumImg from "../assets/images/museum-community.svg";
import userImg from "../assets/icons/Icon Leaderboard 1.svg";

const ReviewMuseum = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-[1100px] mx-auto px-6 pt-[120px] pb-20">

        {/* ====== TITLE & TOP INFO ====== */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-semibold mb-2">Museum Raja Ali Haji</h1>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-lg font-semibold">3</span>
              <span className="text-yellow-400">★★★☆☆</span>
              <span>(25 reviews)</span>
            </div>
          </div>

          <div className="flex gap-12 text-black-600 text-sm">
            <button className="hover:text-black flex items-center gap-1">
              <Share2 size={24} /> Share
            </button>
            <button className="hover:text-black flex items-center gap-1">
              <PencilLine size={24} /> Review
            </button>
          </div>
        </div>

        {/* ====== MAIN IMAGE ====== */}
        <img
          src={museumImg}
          alt="Museum Raja Ali Haji"
          className="w-full rounded-2xl mb-10"
        />

        {/* ====== NAV TABS ====== */}
        <div className="flex gap-8 border-b mb-10 text-gray-600 text-sm">
          <button className="pb-3 border-b-2 border-black text-black font-medium">
            Overview
          </button>
          <button className="pb-3 hover:text-black">Details</button>
          <button className="pb-3 hover:text-black">Review</button>
        </div>

        {/* ====== OVERVIEW SECTION ====== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="text-xl font-semibold mb-4">Overview</h2>

            <p className="text-gray-700 leading-relaxed mb-3">
              Melarikan diri sejenak dari hiruk pikuk Batam, saya menyebrang ke Pulau Penyengat
              dan mengunjungi Museum Raja Ali Haji. Museum ini adalah panorama yang sempurna bagi
              siapapun yang ingin mendalami sejarah Riau yang sarat nilai budaya Melayu.
            </p>

            <p className="text-gray-700 font-medium mt-4 mb-2">Kelebihan yang Mengesankan:</p>
            <ul className="list-disc ml-6 text-gray-700 leading-relaxed space-y-1">
              <li>Penyiapan sejarah yang rapi dan informatif.</li>
              <li>Koleksi peralatan rumah tangga kerajaan yang kuat dan penuh makna.</li>
              <li>Lokasi strategis dekat Masjid Sultan Riau dan kawasan budaya Melayu.</li>
            </ul>
          </div>

          {/* MAP */}
          <div className="w-full h-[260px] rounded-xl overflow-hidden border">
            <iframe
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Museum%20Raja%20Ali%20Haji&t=&z=15&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>

        {/* ====== DETAILS SECTION ====== */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Details</h2>

          <div className="text-gray-700 space-y-2 mb-6">
            <p>📍 Jl. Engku Putri Utara No.1, Tlk. Tering, Kec. Batam Kota, Kepulauan Riau</p>
            <p>🕒 Setiap Hari (Selasa – Minggu) — 09.00–16.00</p>
          </div>

          <div className="text-gray-700 space-y-1">
            <p>Pelajar: Rp 5.000</p>
            <p>Umum: Rp 10.000</p>
            <p>WNA: Rp 15.000</p>
          </div>
        </div>

        {/* ====== REVIEW SECTION ====== */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Review</h2>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-semibold">3</span>
            <span className="text-yellow-400">★★★☆☆</span>
            <span className="text-gray-600 text-sm">(25)</span>
          </div>

          {/* Rating bars */}
          <div className="max-w-[300px] space-y-2 mb-10">
            {["Excellent", "Very Good", "Average", "Poor", "Terrible"].map((label, i) => (
              <div key={i} className="flex items-center gap-3 w-full">
                <span className="text-sm text-gray-700 w-[80px]">{label}</span>
                <div className="bg-gray-200 h-2 rounded-full flex-1">
                  <div className="bg-blue-500 h-2 rounded-full w-[60%]"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-10">
            <input
              type="text"
              placeholder="Search reviews"
              className="border rounded-lg px-3 py-2 text-sm w-full md:w-[260px]"
            />
            <div className="flex gap-2">
              <button className="border px-4 py-2 rounded-lg text-sm">Filters</button>
              <button className="border px-4 py-2 rounded-lg text-sm">Most Recent</button>
            </div>
          </div>

          {/* Single Review */}
          <div className="space-y-10">
            {[1, 2, 3].map((id) => (
              <div key={id} className="border-b pb-8">
                <div className="flex items-center gap-3 mb-3">
                  <img src={userImg} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-medium">Imam M</p>
                    <span className="text-yellow-400 text-sm">★★★☆☆</span>
                  </div>
                </div>

                <p className="font-medium mb-2">Museumnya bagus banget</p>
                <p className="text-gray-700 mb-4">
                  I came here 30 years ago with the memory of a beautiful garden... what was my disappointment.
                </p>

                <img
                  src={museumImg}
                  className="w-full max-w-[350px] rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ReviewMuseum;
