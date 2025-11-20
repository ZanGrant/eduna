// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Challenge from "./pages/Challenge";
import Community from "./pages/Community";
import AdminPanel from "./pages/admin/AdminPanel";
import ExploreMuseumRajaAliHaji from "./pages/ExploreMuseumRajaAliHaji";

import MuseumModule1 from "./pages/MuseumModul1";
import MuseumModule2 from "./pages/MuseumModul2";
import MuseumModule3 from "./pages/MuseumModul3";
import MuseumModule4 from "./pages/MuseumModul4";

import QuizMuseumRajaAliHaji from "./pages/QuizMuseumRajaAliHaji";
import ReviewMuseum from "./pages/ReviewMuseum";
import SubmitReview from "./pages/SubmitReview";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  // ⬇️ GLOBAL STATE (berlaku untuk semua halaman)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  return (
    <>
      <ScrollToTop />

      {/* NAVBAR SELALU ADA DI ATAS */}
      <Navbar
        openLogin={() => setShowLogin(true)}
        openRegister={() => setShowRegister(true)}
        isLoggedIn={isLoggedIn}
      />

      {/* ========== MODAL LOGIN ========== */}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onGoRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
          onForgotPassword={() => {
            setShowLogin(false);
            setShowForgot(true);
          }}
          onLoginSuccess={() => {
            setIsLoggedIn(true);   // ⬅️ begitu login sukses, icon profil ON
            setShowLogin(false);
          }}
        />
      )}

      {/* ========== MODAL REGISTER ========== */}
      {showRegister && (
        <Register
          onClose={() => setShowRegister(false)}
          onGoLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}

      {/* ========== MODAL FORGOT PASSWORD ========== */}
      {showForgot && (
        <ForgotPassword
          onClose={() => setShowForgot(false)}
          onBackToLogin={() => {
            setShowForgot(false);
            setShowLogin(true);
          }}
        />
      )}

      {/* ROUTES HALAMAN UTAMA */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* ⛔️ TIDAK PERLU route /login & /register lagi, karena sudah jadi overlay */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}

        <Route path="/explore" element={<Explore />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/community" element={<Community />} />
        <Route path="/admin" element={<AdminPanel />} />

        <Route
          path="/museum-raja-ali-haji"
          element={<ExploreMuseumRajaAliHaji />}
        />

        <Route path="/museum-raja-ali-haji/module-1" element={<MuseumModule1 />} />
        <Route path="/museum-raja-ali-haji/module-2" element={<MuseumModule2 />} />
        <Route path="/museum-raja-ali-haji/module-3" element={<MuseumModule3 />} />
        <Route path="/museum-raja-ali-haji/module-4" element={<MuseumModule4 />} />

        <Route
          path="/quiz-museum-raja-ali-haji/utama"
          element={<QuizMuseumRajaAliHaji />}
        />
        <Route path="/review-museum-raja-ali-haji" element={<ReviewMuseum />} />
        <Route path="/submit-review" element={<SubmitReview />} />
      </Routes>
    </>
  );
}

export default App;