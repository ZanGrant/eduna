import React from "react";
import { useNavigate } from "react-router-dom"; // ⬅️ DITAMBAHKAN
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

  const navigate = useNavigate(); // ⬅️ DITAMBAHKAN

  // Setiap user punya avatar + badge sendiri
  const leaderboard = [
    { id: 1, name: "Irfan", score: 1000, avatar: IrfanIcon, badge: BadgeGold },
    { id: 2, name: "Marvel", score: 900, avatar: MarvelIcon, badge: BadgeSilver },
    { id: 3, name: "Imam", score: 800, avatar: ImamIcon, badge: BadgeBronze },
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

      {/* === REWARDS SECTION === */}
      <section className="max-w-[1200px] mx-auto px-6 mt-0">
        <h2 className="text-[40px] font-[550] text-left mb-4">
          <span className="inline-block bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
            Rewards
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <div className="bg-white rounded-2xl shadow-md border border-[#e6e6e6] p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-800">
                Voucher 10% Tiket Masuk Wisata
              </h3>
              <p className="text-sm text-slate-600 mt-2">Berlaku untuk user baru</p>
              <div className="border-t border-dashed border-slate-300 my-4"></div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#246afe] font-medium">500 Points</span>
              <button className="px-4 py-2 rounded-xl border border-[#246afe] text-[#246afe] hover:bg-[#246afe] hover:text-white transition-all">
                Redeem
              </button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl shadow-md border border-[#e6e6e6] p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-800">
                Voucher 10% Tiket Bus Wisata
              </h3>
              <p className="text-sm text-slate-600 mt-2">Berlaku hingga Januari 2026</p>
              <div className="border-t border-dashed border-slate-300 my-4"></div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#246afe] font-medium">500 Points</span>
              <button className="px-4 py-2 rounded-xl border border-[#246afe] text-[#246afe] hover:bg-[#246afe] hover:text-white transition-all">
                Redeem
              </button>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl shadow-md border border-[#e6e6e6] p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-800">
                Voucher 5% Wisata Kuliner
              </h3>
              <p className="text-sm text-slate-600 mt-2">Berlaku hingga Desember 2025</p>
              <div className="border-t border-dashed border-slate-300 my-4"></div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[#246afe] font-medium">500 Points</span>
              <button className="px-4 py-2 rounded-xl border border-[#246afe] text-[#246afe] hover:bg-[#246afe] hover:text-white transition-all">
                Redeem
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* === Today's Challenge Section === */}
      <section className="w-full max-w-[1200px] mx-auto px-10 pt-4 pb-20 mt-16">
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
          ].map((title, i) => {
            
            const isActive = title === "Museum Raja Ali Haji";

            return (
              <div
                key={i}
                className="flex flex-col justify-between bg-white shadow-md rounded-2xl p-10 hover:shadow-xl transition-all duration-300"
              >
                {/* Teks bagian atas */}
                <div>
                  <h3 className="text-[32px] font-[550] mb-4">
                    <span className="inline-block bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
                      Quiz ({title})
                    </span>
                  </h3>

                  {/* Bar info */}
                  <div className="flex items-center justify-start gap-6 text-gray-500 text-sm">
                    <div className="flex items-center gap-2">
                      <img src={IconQuestion} alt="question icon" className="w-5 h-5" />
                      <span>15 questions</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <img src={IconUser} alt="user icon" className="w-5 h-5" />
                      <span>0 completions</span>
                    </div>
                  </div>
                </div>

                {/* Tombol */}
                <div className="flex justify-end mt-6">
                  {isActive ? (
                    <button
                      onClick={() => navigate("/quiz-museum-raja-ali-haji/utama")}
                      className="bg-[#246afe] hover:bg-[#1d56c9] text-white font-medium px-6 py-2 rounded-lg transition-all duration-300"
                    >
                      Start
                    </button>
                  ) : (
                    <button
                      disabled
                      className="bg-gray-300 text-gray-600 font-medium px-6 py-2 rounded-lg cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
