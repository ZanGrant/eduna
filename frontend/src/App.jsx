import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/challenge" element={<Challenge />} />
      <Route path="/community" element={<Community />} />
      <Route path="/admin" element={<AdminPanel />} />

      <Route path="/museum-raja-ali-haji" element={<ExploreMuseumRajaAliHaji />} />

      <Route path="/museum-raja-ali-haji/module-1" element={<MuseumModule1 />} />
      <Route path="/museum-raja-ali-haji/module-2" element={<MuseumModule2 />} />
      <Route path="/museum-raja-ali-haji/module-3" element={<MuseumModule3 />} />
      <Route path="/museum-raja-ali-haji/module-4" element={<MuseumModule4 />} />

      <Route path="/quiz-museum-raja-ali-haji/utama" element={<QuizMuseumRajaAliHaji />} />
      <Route path="/review-museum-raja-ali-haji" element={<ReviewMuseum />} />
    </Routes>
  );
}

export default App;
