// src/pages/Rewards.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { History, Gift } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RewardIllustration from "../assets/images/Reward.svg";

export default function Rewards({ isLoggedIn, openLogin, openRegister }) {
  const navigate = useNavigate();

  // contoh data (kosong => tampil empty state)
  const rewards = [];

  return (
    <div className="min-h-screen bg-white">
      <Navbar isLoggedIn={isLoggedIn} openLogin={openLogin} openRegister={openRegister} />

      <main className="max-w-6xl mx-auto px-6 pt-20 pb-12 mt-10">
        {/* HEADER */}
        <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-[0_6px_18px_rgba(15,23,42,0.06)]">
          <h2 className="text-xl font-semibold">List Reward</h2>

          {/* --> diperbaiki: label & route relevan untuk reward */}
          <button
            onClick={() => navigate("/reward-history")}
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow"
            aria-label="Riwayat Reward"
            type="button"
          >
            <History className="w-5 h-5" />
            <span className="font-medium">Riwayat Reward</span>
          </button>
        </div>

        {/* CONTENT */}
        <div className="mt-6 bg-white border rounded-xl shadow-md p-12 min-h-[420px] flex items-center justify-center">
          {rewards.length === 0 ? (
            <div className="text-center max-w-md">
              <img
                src={RewardIllustration}
                alt="Belum ada reward"
                className="mx-auto w-[260px] mb-6 select-none"
                draggable="false"
              />

              <h3 className="mt-2 text-2xl font-semibold">Belum ada Reward</h3>
              <p className="mt-1 text-gray-400">
                Yuk mainkan challenge untuk dapatkan reward!
              </p>
            </div>
          ) : (
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rewards.map((r) => (
                  <div
                    key={r.id}
                    className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-md bg-indigo-50 flex items-center justify-center">
                        <Gift className="w-7 h-7 text-indigo-600" />
                      </div>

                      <div className="flex-1">
                        <h4 className="font-semibold">{r.title}</h4>
                        <p className="text-sm text-gray-400">{r.date}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-sm text-gray-600">{r.description}</p>
                      <button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm"
                        onClick={() => alert(`Redeem: ${r.title}`)}
                      >
                        Redeem
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
