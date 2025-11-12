import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Explore from "./pages/Explore";
import Challenge from "./pages/Challenge";
import Community from "./pages/Community";
import AdminPanel from "./pages/admin/AdminPanel";
import ExploreMuseumRajaAliHaji from "./pages/ExploreMuseumRajaAliHaji";

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
    </Routes>
  );
}

export default App;
