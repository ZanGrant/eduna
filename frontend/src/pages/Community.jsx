import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CommunityIllustration from "../assets/images/museum-community.svg";

export default function Community() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-[#f3f6ff] to-white">
        <img
          src={CommunityIllustration}
          alt="Community Illustration"
          className="w-[320px] md:w-[500px] mb-10"
        />
        <h1 className="text-[48px] md:text-[64px] font-bold bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
          Eduna Community
        </h1>
        <p className="max-w-[700px] mt-6 text-[18px] leading-relaxed text-gray-600">
          Bergabunglah dengan komunitas Eduna untuk terhubung dengan pelajar, wisatawan,
          dan kreator lokal. Temukan inspirasi, berbagi pengalaman, serta berkolaborasi
          dalam membangun ekosistem digital pariwisata Kepulauan Riau yang lebih kreatif
          dan edukatif.
        </p>
        <button className="mt-10 bg-[#246afe] hover:bg-[#1e56c9] text-white font-medium px-8 py-3 rounded-full transition-all duration-300">
          Bergabung Sekarang
        </button>
      </section>

      {/* Community Features Section */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-[40px] font-bold mb-10 text-[#1e1e1e]">
          Apa yang Kamu Dapatkan?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-[#246afe] mb-3">
              Forum Diskusi
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Berinteraksi dengan anggota lain untuk berbagi ide, rekomendasi tempat,
              dan strategi pembelajaran menarik.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-[#9747ff] mb-3">
              Kegiatan Online
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Ikuti webinar, workshop, dan tantangan kreatif untuk mengembangkan
              potensi digital kamu.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-[#ffba08] mb-3">
              Kolaborasi Proyek
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Bangun proyek kolaboratif lintas kampus dan daerah untuk memajukan
              pariwisata edukatif di Kepulauan Riau.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
