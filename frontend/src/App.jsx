// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

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
import Profile from "./pages/Profile";

// ⬅️ tambahkan import modal
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  // 🔥 GLOBAL STATE LOGIN
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🔥 STATE MODAL
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  return (
    <>
      <ScrollToTop />

      {/* ========= MODAL LOGIN ========= */}
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
            setIsLoggedIn(true);  // ⬅️ tandai sudah login
            setShowLogin(false);  // ⬅️ tutup modal
          }}
        />
      )}

      {/* ========= MODAL REGISTER ========= */}
      {showRegister && (
        <Register
          onClose={() => setShowRegister(false)}
          onGoLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}

      {/* ========= MODAL FORGOT PASSWORD ========= */}
      {showForgot && (
        <ForgotPassword
          onClose={() => setShowForgot(false)}
          onBackToLogin={() => {
            setShowForgot(false);
            setShowLogin(true);
          }}
        />
      )}

      {/* ========= ROUTES ========= */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isLoggedIn={isLoggedIn}
              openLogin={() => setShowLogin(true)}
              openRegister={() => setShowRegister(true)}
                onLogout={() => setIsLoggedIn(false)}
            />
          }
        />

        <Route
          path="/explore"
          element={
            <Explore
              isLoggedIn={isLoggedIn}
              openLogin={() => setShowLogin(true)}
              openRegister={() => setShowRegister(true)}
            />
          }
        />

        <Route
          path="/challenge"
          element={
            <Challenge
              isLoggedIn={isLoggedIn}
              openLogin={() => setShowLogin(true)}
              openRegister={() => setShowRegister(true)}
            />
          }
        />

        <Route
          path="/community"
          element={
            <Community
              isLoggedIn={isLoggedIn}
              openLogin={() => setShowLogin(true)}
              openRegister={() => setShowRegister(true)}
            />
          }
        />

        <Route path="/admin" element={<AdminPanel />} />

        <Route
          path="/museum-raja-ali-haji"
          element={
            <ExploreMuseumRajaAliHaji
              isLoggedIn={isLoggedIn}
              openLogin={() => setShowLogin(true)}
              openRegister={() => setShowRegister(true)}
            />
          }
        />

        <Route path="/museum-raja-ali-haji/module-1" element={<MuseumModule1 />} />
        <Route path="/museum-raja-ali-haji/module-2" element={<MuseumModule2 />} />
        <Route path="/museum-raja-ali-haji/module-3" element={<MuseumModule3 />} />
        <Route path="/museum-raja-ali-haji/module-4" element={<MuseumModule4 />} />

        <Route path="/quiz-museum-raja-ali-haji/utama" element={<QuizMuseumRajaAliHaji />} />
        <Route path="/review-museum-raja-ali-haji" element={<ReviewMuseum />} />
        <Route path="/submit-review" element={<SubmitReview />} />

        <Route
          path="/profile"
          element={
            <Profile
              isLoggedIn={isLoggedIn}
              openLogin={() => setShowLogin(true)}
              openRegister={() => setShowRegister(true)}
              onLogout={() => setIsLoggedIn(false)}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;