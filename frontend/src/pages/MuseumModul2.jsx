import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MuseumModule2() {
  return (
    <div>
      <Navbar />
      <div className="pt-[120px] text-center">
        <h1 className="text-3xl font-bold text-[#246afe]">Pesona Sejarah & Budaya Kepulauan Riau</h1>
        <p className="mt-4 text-slate-600">Halaman modul ke dua</p>
      </div>
      <Footer />
    </div>
  );
}
