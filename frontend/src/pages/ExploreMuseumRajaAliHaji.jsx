import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft, ChevronRight } from "lucide-react";

import museumImg from "../assets/images/ExploreMuseum.svg";

export default function ExploreMuseumRajaAliHaji() {
  const navigate = useNavigate();

  const hours = [
    { day: "Monday", time: "Closed" },
    { day: "Tuesday", time: "08.00 - 16.00 WIB" },
    { day: "Wednesday", time: "08.00 - 16.00 WIB" },
    { day: "Thursday", time: "08.00 - 16.00 WIB" },
    { day: "Friday", time: "08.00 - 16.00 WIB" },
    { day: "Saturday", time: "08.00 - 16.00 WIB" },
    { day: "Sunday", time: "Closed" },
  ];

  const ticket = [
    { label: "Pelajar/Mahasiswa", price: "Rp. 5.000" },
    { label: "Umum", price: "Rp. 10.000" },
    { label: "Wisman", price: "Rp. 15.000" },
  ];

  const modules = [
    { id: 1, title: "Mengenal Museum Raja Ali Haji", progress: 80 },
    { id: 2, title: "Pesona Sejarah & Budaya Kepulauan Riau", progress: 60 },
    { id: 3, title: "Petualangan Kuliner dan Kerajinan Khas Kepri", progress: 80 },
    { id: 4, title: "Sejarah Terbentuknya Kota Batam", progress: 30 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* === STICKY HEADER === */}
      <header className="sticky top-[100px] z-40 bg-white border-b border-black flex items-center justify-between px-8 py-4 shadow-sm">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-[#FFB800] hover:bg-[#FF9500] text-black font-medium px-4 py-2 rounded-lg transition-all duration-300"
          aria-label="Back"
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>

        <h1 className="text-2xl md:text-3xl font-semibold text-[#246afe]">
          Museum Raja Ali Haji
        </h1>
      </header>

      {/* === HERO IMAGE === */}
      <div className="w-full mt-[100px]">
        <img
          src={museumImg}
          alt="Museum Raja Ali Haji"
          className="w-full h-[360px] md:h-[420px] object-cover object-center"
        />
      </div>

      {/* === MAIN INFO === */}
      <section className="max-w-[1200px] mx-auto px-6 py-12">
        {/* === INFORMASI === */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#246afe_18%,#9747ff_37%,#ffba08_74%)] mb-4">
            Informasi tentang Museum Raja Ali Haji
          </h2>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Museum Batam Raja Ali Haji adalah museum umum tipe B yang terletak di Dataran Engku Putri,
            Batam Center, dan diresmikan pada 18 Desember 2020. Bangunan ini dulunya merupakan
            asrama MTQ Nasional XXV tahun 2014 yang kemudian dialihfungsikan menjadi museum. Dikelola oleh
            Pemerintah Kota Batam melalui Dinas Kebudayaan dan Pariwisata, museum ini menyajikan koleksi
            yang menggambarkan perjalanan sejarah Batam dari masa Kerajaan Riau-Lingga, kolonial, kemerdekaan,
            hingga Batam modern, serta berbagai khazanah budaya Melayu seperti pakaian adat, alat musik,
            senjata tradisional, dan replika perahu layar panjang. Selain sebagai tempat wisata, museum ini
            juga berfungsi sebagai pusat edukasi budaya untuk pelajar dan wisatawan.
          </p>
        </div>

        {/* === JAM OPERASIONAL & HARGA TIKET === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* JAM OPERASIONAL */}
          <div>
            <h3 className="text-lg font-semibold text-[#246afe] mb-3">
              Jam Operasional
            </h3>
            <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-6 border border-[#f0f0f0]">
              <div className="space-y-2">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between">
                    <span className="text-sm text-slate-700">{h.day}</span>
                    <span
                      className={`text-sm font-medium ${
                        h.time.toLowerCase().includes("closed")
                          ? "text-red-500"
                          : "text-slate-800"
                      }`}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* HARGA TIKET */}
          <div>
            <h3 className="text-lg font-semibold text-[#246afe] mb-3">
              Harga Tiket
            </h3>
            <div className="bg-[#246afe] text-white rounded-xl p-6 shadow-md">
              <ul className="space-y-3">
                {ticket.map((t) => (
                  <li
                    key={t.label}
                    className="flex justify-between items-center text-sm font-medium"
                  >
                    <span>{t.label}</span>
                    <span>{t.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* === LEARN & EXPLORE === */}
        <div className="mb-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">
            <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#246afe_18%,#9747ff_37%,#ffba08_74%)]">
              Learn &amp; Explore!
            </span>
          </h3>
        </div>

        {/* === MODULES === */}
        <div className="space-y-4">
          {modules.map((m) => (
            <div
              key={m.id}
              className="flex items-center justify-between border border-[#e6e6e6] rounded-xl p-4"
            >
              <div className="w-full pr-4">
                <h4 className="text-sm font-semibold text-slate-800 mb-2">
                  {m.title}
                </h4>

                <div className="text-xs text-slate-500 mb-2">
                  Learning Progress
                </div>

                <div className="w-full bg-[#f3f3f3] h-3 rounded-full overflow-hidden">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: `${m.progress}%`,
                      background:
                        "linear-gradient(90deg, #FFB800 0%, #FFD166 60%)",
                    }}
                  />
                </div>
              </div>

              {/* === UBAH BAGIAN TOMBOL DI SINI === */}
              <button
                onClick={() => {
                  if (m.id === 1) navigate("/museum-raja-ali-haji/module-1");
                  else if (m.id === 2) navigate("/museum-raja-ali-haji/module-2");
                  else if (m.id === 3) navigate("/museum-raja-ali-haji/module-3");
                  else if (m.id === 4) navigate("/museum-raja-ali-haji/module-4");
                }}
                className="ml-4 flex items-center justify-center w-10 h-10 rounded-full bg-[#FFB800] hover:bg-[#FF9500] text-white transition-all duration-300"
                aria-label={`Open ${m.title}`}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
