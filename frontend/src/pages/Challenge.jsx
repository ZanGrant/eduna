import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// 🖼️ Import gambar avatar dan badge
import IrfanIcon from "../assets/icons/Icon Leaderboard 1.svg";
import MarvelIcon from "../assets/icons/Icon Leaderboard 2.svg";
import ImamIcon from "../assets/icons/Icon Leaderboard 3.svg";
import BadgeIcon from "../assets/icons/Badge 1.svg"; 

export default function Challenge() {
  const leaderboard = [
    { id: 1, name: "Irfan", score: 950, avatar: IrfanIcon },
    { id: 2, name: "Marvel", score: 940, avatar: MarvelIcon },
    { id: 3, name: "Imam", score: 930, avatar: ImamIcon },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Your Journey & Leaderboard Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Your Journey */}
        <div>
          <h2 className="text-[40px] font-bold bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
            Your Journey
          </h2>
          <p className="text-gray-600 mb-6">Perjalanan kuis kamu</p>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <p className="text-gray-500">Total Poin Kamu</p>
              <p className="text-5xl font-bold text-[#246afe]">125</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <p className="text-gray-500">Peringkat Kamu Sekarang</p>
              <p className="text-5xl font-bold bg-gradient-to-r from-[#246afe] to-[#9747ff] bg-clip-text text-transparent">
                #35
              </p>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div>
          <h2 className="text-[40px] font-bold bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
            Leaderboard
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
                <div className="flex items-center space-x-3">
                  <img
                    src={BadgeIcon}
                    alt="badge"
                    className="w-8 h-8 object-contain"
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
