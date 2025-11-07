import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChallengeIllustration from "../assets/images/PromoBanner.png";

export default function Challenge() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-[#f3f6ff] to-white">
        <img
          src={ChallengeIllustration}
          alt="Challenge Illustration"
          className="w-[320px] md:w-[500px] mb-10"
        />
        <h1 className="text-[48px] md:text-[64px] font-bold bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
          Eduna Challenges
        </h1>
        <p className="max-w-[700px] mt-6 text-[18px] leading-relaxed text-gray-600">
          Uji pengetahuan dan kreativitasmu melalui tantangan interaktif dari Eduna!
          Dapatkan poin, naikkan level, dan tukarkan hadiah menarik sambil mengenal
          lebih dalam budaya dan destinasi Kepulauan Riau.
        </p>
        <button className="mt-10 bg-[#9747ff] hover:bg-[#7d36d1] text-white font-medium px-8 py-3 rounded-full transition-all duration-300">
          Mulai Tantangan
        </button>
      </section>

      {/* Challenge Categories Section */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-[40px] font-bold mb-12 text-[#1e1e1e]">
          Pilih Kategori Tantangan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#246afe] mb-3">
              Budaya & Tradisi
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Eksplor sejarah, tarian, dan tradisi khas Kepulauan Riau dalam bentuk kuis dan permainan singkat.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#9747ff] mb-3">
              Alam & Wisata
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Temukan keindahan alam serta destinasi wisata unggulan lewat misi dan trivia seru.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-semibold text-[#ffba08] mb-3">
              Bahasa & Interaksi
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Pelajari istilah lokal dan cara berkomunikasi dengan masyarakat sekitar melalui mini challenge interaktif.
            </p>
          </div>
        </div>
      </section>

      {/* Reward Section */}
      <section className="py-20 bg-gradient-to-r from-[#246afe]/10 via-[#9747ff]/10 to-[#ffba08]/10 text-center px-6 md:px-20">
        <h2 className="text-[40px] font-bold mb-8 text-[#1e1e1e]">
          Raih Reward & Badge Spesial
        </h2>
        <p className="max-w-[700px] mx-auto text-gray-600 leading-relaxed mb-10">
          Setiap tantangan yang kamu selesaikan akan memberimu poin dan badge unik.
          Kumpulkan semuanya untuk membuka level baru dan dapatkan hadiah eksklusif!
        </p>
        <button className="bg-[#ffba08] hover:bg-[#e0a807] text-white font-medium px-8 py-3 rounded-full transition-all duration-300">
          Lihat Papan Skor
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
