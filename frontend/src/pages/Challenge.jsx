import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// 🖼️ Import avatar dan badge (pastikan nama file sesuai punyamu)
import IrfanIcon from "../assets/icons/Icon Leaderboard 1.svg";
import MarvelIcon from "../assets/icons/Icon Leaderboard 2.svg";
import ImamIcon from "../assets/icons/Icon Leaderboard 3.svg";
import IconQuestion from "../assets/icons/Book.svg";
import IconUser from "../assets/icons/People.svg";

import BadgeGold from "../assets/icons/Badge 1.svg";
import BadgeSilver from "../assets/icons/Badge 2.svg";
import BadgeBronze from "../assets/icons/Badge 3.svg";

export default function Challenge() {
  // Setiap user punya avatar + badge sendiri
  const leaderboard = [
    { id: 1, name: "Irfan", score: 950, avatar: IrfanIcon, badge: BadgeGold },
    { id: 2, name: "Marvel", score: 940, avatar: MarvelIcon, badge: BadgeSilver },
    { id: 3, name: "Imam", score: 930, avatar: ImamIcon, badge: BadgeBronze },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Your Journey & Leaderboard Section */}
      <section className="w-full max-w-[1000px] mx-auto px-6 py-20 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Your Journey */}
        <div>
          <h2 className="text-[40px] font-[550]">
            <span className="inline-block bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
            Your Journey
            </span>
          </h2>
          <p className="text-black-600 mb-6">Perjalanan kuis kamu</p>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <p className="text-black-500">Total Poin Kamu</p>
              <p className="text-[36px] font-[550] text-[#246afe]">125</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <p className="text-black-500">Peringkat Kamu Sekarang</p>
              <p className="text-[36px] font-[550] bg-gradient-to-r from-[#246afe] to-[#9747ff] bg-clip-text text-transparent">
                #35
              </p>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div>
          <h2 className="text-[40px] font-[550]">
            <span className="inline-block bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
            Leaderboard
            </span>
          </h2>
          <p className="text-gray-600 mb-6">User dengan skor kuis tertinggi</p>

          <div className="bg-white rounded-2xl shadow-md p-6 space-y-5">
            {leaderboard.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between border-b last:border-none pb-4 last:pb-0"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-white bg-gradient-to-r from-[#246afe] to-[#9747ff] w-7 h-7 flex items-center justify-center rounded-full font-semibold">
                    {user.id}
                  </span>
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <p className="font-medium text-gray-800">{user.name}</p>
                </div>
                <div className="relative flex items-center justify-end w-[120px]">
                  <img
                    src={user.badge}
                    alt="badge"
                    className="absolute right-0 w-24 h-24 object-contain"
                  />
                  <span className="text-[#ff8508] font-semibold">
                    {user.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Today's Challenge Section === */}
      <section className="w-full max-w-[1200px] mx-auto px-10 pt-4 pb-20">
  <h2 className="text-[40px] font-[550] text-center mb-10">
  <span className="inline-block bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
    Today's Challenge
  </span>
</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    {[
      "Museum Raja Ali Haji",
      "Batam Zoo Paradise",
      "Kampung Vietnam",
      "Hutan Mata Kucing",
      "Ranoh Island Resort",
      "Mega Wisata Ocarina",
    ].map((title, i) => (
      <div
        key={i}
        className="flex flex-col justify-between bg-white shadow-md rounded-2xl p-10 hover:shadow-xl transition-all duration-300"
      >
        {/* Teks bagian atas */}
        <div>
          <h3 className="text-[32px] font-[550] mb-4">
  <span
    className="inline-block bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent"
    style={{ backgroundSize: "100% 100%", backgroundPosition: "left center" }}
  >
    Quiz ({title})
  </span>
</h3>


          {/* Bar info dalam satu baris */}
          <div className="flex items-center justify-start gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <img src={IconQuestion} alt="icon question" className="w-5 h-5" />
              <span>15 questions</span>
            </div>

            <div className="flex items-center gap-2">
              <img src={IconUser} alt="icon user" className="w-5 h-5" />
              <span>0 completions</span>
            </div>
          </div>
        </div>

        {/* Tombol di kanan bawah */}
        <div className="flex justify-end mt-6">
          <button className="bg-[#246afe] hover:bg-[#1d56c9] text-white font-medium px-6 py-2 rounded-lg transition-all duration-300">
            Start
          </button>
        </div>
      </div>
          ))}
      </div>
      </section>


      {/* Footer */}
      <Footer />
    </div>
  );
}
