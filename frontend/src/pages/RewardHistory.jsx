// src/pages/RewardsHistory.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

/**
 * Halaman Riwayat Reward
 * - Ini placeholder yang sudah rapi, nanti tinggal connect ke API untuk tampilkan data riwayat
 */
export default function RewardsHistory({ isLoggedIn, openLogin, openRegister }) {
  const navigate = useNavigate();

  // contoh data riwayat (kosong untuk sekarang)
  const history = [];

  return (
    <div className="min-h-screen bg-white">
      <Navbar isLoggedIn={isLoggedIn} openLogin={openLogin} openRegister={openRegister} />

      <main className="max-w-6xl mx-auto px-6 pt-20 pb-12 mt-10">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-md border hover:bg-gray-50"
            aria-label="Back"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-semibold">Riwayat Reward</h1>
        </div>

        <div className="bg-white border rounded-xl shadow-md p-6 min-h-[300px]">
          {history.length === 0 ? (
            <div className="text-center py-12 text-gray-500">Belum ada riwayat reward.</div>
          ) : (
            <ul className="space-y-3">
              {history.map((h) => (
                <li key={h.id} className="flex justify-between items-center border rounded-md p-3">
                  <div>
                    <p className="font-medium">{h.title}</p>
                    <p className="text-sm text-gray-400">{h.date}</p>
                  </div>
                  <p className="text-sm text-gray-500">{h.status}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
