import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import museumImg from "../assets/images/Museum.png";

export default function MuseumRajaAliHaji() {
  return (
    <div>
      <Navbar />
      <section className="pt-[130px] px-6 min-h-screen bg-gray-50">
        <div className="max-w-[900px] mx-auto bg-white rounded-2xl shadow-lg p-8">
          <img
            src={museumImg}
            alt="Museum Raja Ali Haji"
            className="w-full rounded-xl mb-6"
          />
          <h1 className="text-[32px] font-bold text-slate-800 mb-4">
            Museum Raja Ali Haji Batam
          </h1>
          <p className="text-[16px] text-slate-600 leading-relaxed">
            Museum Raja Ali Haji Batam menampilkan sejarah dan warisan budaya
            Melayu di Kepulauan Riau. Di sini, kamu bisa melihat koleksi
            peninggalan sejarah, foto-foto tokoh, dan informasi tentang
            perkembangan Batam.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
