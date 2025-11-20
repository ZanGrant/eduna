// src/pages/Profile.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileIcon from "../assets/icons/Icon Leaderboard 1.svg";

export default function Profile({
  isLoggedIn,
  openLogin,
  openRegister,
  onLogout,   // ✅ TERIMA PROP LOGOUT
}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // matikan login global
    onLogout && onLogout();
    // balik ke home
    navigate("/");
  };

  return (
    <div>
      {/* NAVBAR – tetep pakai state login yang sama */}
      <Navbar
        isLoggedIn={isLoggedIn}
        openLogin={openLogin}
        openRegister={openRegister}
      />

      {/* KONTEN PROFIL */}
      <div className="pt-[130px] px-6 min-h-screen bg-[#f5f7ff]">
        <div className="max-w-[900px] mx-auto bg-white rounded-3xl shadow-md p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-32 h-32 rounded-full bg-[#eef3ff] flex items-center justify-center shadow-inner">
            <img
              src={ProfileIcon}
              alt="Profile"
              className="w-20 h-20 object-contain"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-semibold mb-1">Nama User</h1>
            <p className="text-gray-500 text-sm mb-4">
              @username · imamganteng123@gmail.com
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="border rounded-2xl p-4">
                <p className="text-xs text-gray-500 mb-1">Total Poin</p>
                <p className="text-2xl font-semibold text-[#246afe]">125</p>
              </div>
              <div className="border rounded-2xl p-4">
                <p className="text-xs text-gray-500 mb-1">Peringkat Kamu</p>
                <p className="text-2xl font-semibold text-[#9747ff]">#35</p>
              </div>
            </div>

            <button className="px-5 py-2 rounded-lg bg-[#246afe] text-white text-sm font-medium mr-3">
              Edit Profile
            </button>
            <button
              className="px-5 py-2 rounded-lg border border-red-400 text-red-500 text-sm font-medium"
              onClick={handleLogout}         // ✅ PAKAI HANDLE LOGOUT
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}