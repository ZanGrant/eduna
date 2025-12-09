// src/App.jsx
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Challenge from "./pages/Challenge";
import Community from "./pages/Community";
import ExploreMuseumRajaAliHaji from "./pages/ExploreMuseumRajaAliHaji";

import MuseumModule1 from "./pages/MuseumModul1";
import MuseumModule2 from "./pages/MuseumModul2";
import MuseumModule3 from "./pages/MuseumModul3";
import MuseumModule4 from "./pages/MuseumModul4";

import QuizMuseumRajaAliHaji from "./pages/QuizMuseumRajaAliHaji";
import ReviewMuseum from "./pages/ReviewMuseum";
import SubmitReview from "./pages/SubmitReview";

// PROFILE + REWARD PAGE
import Profile from "./pages/Profile";
import Rewards from "./pages/Rewards";
import RewardHistory from "./pages/RewardHistory";  // <<-- IMPORT BENAR

// Modal
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

import AdminPanel from "./pages/admin/AdminPanel";
import AdminForm from "./pages/admin/AdminForm";
import Users from "./pages/admin/Users";
import Destinations from "./pages/admin/Destinations";
import QuizManager from "./pages/admin/QuizManager";
import Coupon from "./pages/admin/Coupon";

function App() {
  // GLOBAL LOGIN STATE
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // MODAL STATE
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showForgot, setShowForgot] = useState(false);

  return (
    <>
      <ScrollToTop />

      {/* ===== MODAL LOGIN ===== */}
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
            setIsLoggedIn(true);
            setShowLogin(false);
          }}
        />
      )}

      {/* ===== MODAL REGISTER ===== */}
      {showRegister && (
        <Register
          onClose={() => setShowRegister(false)}
          onGoLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}

      {/* ===== MODAL FORGOT PASSWORD ===== */}
      {showForgot && (
        <ForgotPassword
          onClose={() => setShowForgot(false)}
          onBackToLogin={() => {
            setShowForgot(false);
            setShowLogin(true);
          }}
        />
      )}

      {/* ===== ROUTES ===== */}
      <Routes>
        {/* HOME */}
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

        {/* EXPLORE */}
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

        {/* CHALLENGE */}
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

        {/* COMMUNITY */}
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

        {/* MUSEUM */}
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

        {/* PROFILE PAGE */}
        <Route
          path="/profile"
          element={
            isLoggedIn ? (
              <Profile
                isLoggedIn={isLoggedIn}
                openLogin={() => setShowLogin(true)}
                openRegister={() => setShowRegister(true)}
                onLogout={() => setIsLoggedIn(false)}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* REWARDS PAGE */}
        <Route
          path="/rewards"
          element={
            isLoggedIn ? (
              <Rewards
                isLoggedIn={isLoggedIn}
                openLogin={() => setShowLogin(true)}
                openRegister={() => setShowRegister(true)}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* REWARD HISTORY PAGE */}
        <Route
          path="/reward-history"
          element={
            isLoggedIn ? (
              <RewardHistory
                isLoggedIn={isLoggedIn}
                openLogin={() => setShowLogin(true)}
                openRegister={() => setShowRegister(true)}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* ADMIN */}
        <Route path="/admin/login" element={<AdminForm />} />
        <Route path="/admin" element={<AdminPanel />}>
          <Route index element={<Navigate to="destinations" replace />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="users" element={<Users />} />
          <Route path="quiz" element={<QuizManager />} />
          <Route path="coupon" element={<Coupon />} />
        </Route>
        <Route path="*" element={<div style={{ padding: 20 }}>404 — Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
