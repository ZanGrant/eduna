import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft, Lock, CheckCircle, ChevronRight } from "lucide-react";

import module4Image from "../assets/images/MuseumModul4.svg";

// Data Navigasi Modul
const modules = [
  { id: 1, title: "Mengenal Museum Raja Ali Haji", locked: false, completed: true, path: "/museum-raja-ali-haji/module-1" },
  { id: 2, title: "Pesona Sejarah & Budaya Kepulauan Riau", locked: false, completed: true, path: "/museum-raja-ali-haji/module-2" },
  { id: 3, title: "Petualangan Kuliner & Kerajinan Khas", locked: false, completed: true, path: "/museum-raja-ali-haji/module-3" },
  { id: 4, title: "Sejarah Terbentuknya Kota Batam", locked: false, completed: true, path: "/museum-raja-ali-haji/module-4" },
];

// Konten Detail Modul 4
const moduleContent = {
  title: "Sejarah Terbentuknya Kota Batam",
  subtitle: "Yuk, explorin sejarah terbentuknya kota ini guys!",
  imageAlt: "Sejarah Kota Batam",
  sections: [
    {
      heading: "Fase Awal: Dari Pulau Nelayan hingga Basis Perjuangan",
      content: `Jauh sebelum modernisasi, Batam hanyalah sebuah pulau yang dihuni oleh Orang Laut dan para nelayan. Kehidupan mereka bergantung pada hasil laut dan sering berpindah tempat. Namun, Batam juga memiliki peran penting dalam sejarah perjuangan bangsa.`,
      list: [
        {
          key: "Perundingan Bersejarah (1830):",
          text: "Pulau Batam menjadi tempat perundingan antara Temenggung Abdul Rahman dan Kolonel Laut Belanda Van Der Sluys untuk menuntaskan perjanjian penting di wilayah Melayu.",
        },
        {
          key: "Basis Militer TNI:",
          text: "Pada masa perjuangan melawan Belanda, Batam menjadi basis militer Tentara Republik Indonesia (TNI) yang dipimpin oleh Batalyon Infanteri 134.",
        },
      ],
    },
    {
      heading: "Era 1970-an: Kebijakan Strategis Pemerintah",
      content: `Titik balik Batam dimulai pada tahun 1971 ketika Presiden Soeharto mengeluarkan Keputusan Presiden (Keppres) Nomor 40 Tahun 1971. Kebijakan ini menjadikan Batam sebagai kawasan industri dan pusat logistik minyak.`,
      list: [
        {
          key: "Pembentukan BP Batam (1973):",
          text: "Untuk mewujudkan visi tersebut, pemerintah membentuk Otorita Pengembangan Daerah Industri Pulau Batam (BP Batam) yang bertugas merencanakan serta membangun infrastruktur dasar seperti jalan, pelabuhan, bandara, dan fasilitas air bersih.",
        },
      ],
    },
    {
      heading: "Batam sebagai 'Singapura Kedua'",
      content: `Pada dekade 1980-an, Batam berkembang pesat. Pemerintah melihat potensi besar untuk menjadikannya mitra strategis Singapura, menarik banyak investasi asing, dan memulai pembangunan besar-besaran.`,
      list: [
        {
          key: "Investasi dan Pembangunan:",
          text: "Investor dari Singapura, Jepang, dan negara lain mulai masuk. Ribuan hektar lahan dibuka untuk kawasan industri, perumahan, dan fasilitas publik.",
        },
        {
          key: "Perubahan Demografi:",
          text: "Gelombang migrasi dari berbagai daerah Indonesia membawa perubahan sosial besar di Batam dan membentuk keberagaman yang ada hingga kini.",
        },
      ],
    },
    {
      heading: "Menuju Kota Otonom",
      content: `Pada tahun 1999, Batam resmi ditetapkan sebagai Kota Batam melalui Undang-Undang Nomor 53 Tahun 1999. Sejak itu, Batam memiliki pemerintah daerah otonom sendiri.`,
      list: [
        {
          key: "Bagian dari Provinsi Kepulauan Riau:",
          text: "Pada tahun 2002, Batam menjadi bagian dari Provinsi Kepulauan Riau. Pemerintah kota dan BP Batam bekerja sama membangun dan mengelola wilayah ini secara modern.",
        },
        {
          key: "Transformasi Modern:",
          text: "Kini Batam menjadi pusat ekonomi, perdagangan, dan pariwisata modern di Asia Tenggara. Pulau kecil ini berhasil mengubah takdirnya melalui visi strategis dan kerja keras.",
        },
      ],
      extraContent: `Dengan segala dinamikanya, Batam menjadi bukti nyata bahwa kolaborasi, visi, dan ketekunan mampu mengubah sebuah pulau kecil menjadi kota modern yang disegani.`,
    },
  ],
};

// --- Komponen Sidebar Card ---
const ModuleSidebarCard = ({ m, navigate, currentPath }) => {
  const isCurrent = m.path === currentPath;
  const isLocked = m.locked && !isCurrent;

  const navigateToModule = () => {
    if (!isLocked) navigate(m.path);
  };

  return (
    <div
      className={`flex items-center justify-between py-2 cursor-pointer 
      ${isCurrent ? 'text-[#246afe] font-bold' : isLocked ? 'text-gray-400' : 'text-slate-700 hover:text-[#246afe]'}`}
      onClick={navigateToModule}
    >
      <p className="text-sm">{m.title}</p>
      {isCurrent ? (
        <CheckCircle size={16} className="text-[#246afe]" />
      ) : isLocked ? (
        <Lock size={14} className="text-gray-400" />
      ) : null}
    </div>
  );
};

// --- Komponen Utama Modul 4 ---
export default function Module4SejarahBatam() {
  const navigate = useNavigate();
  const currentPath = "/museum-raja-ali-haji/module-4";

  const renderContent = (item) => (
    <div className="text-slate-700 leading-relaxed space-y-4 text-base">
      <p>{item.content}</p>
      {item.list && item.list.length > 0 && (
        <ul className="list-disc pl-5 space-y-3">
          {item.list.map((listItem, index) => (
            <li key={index}>
              <p>
                <span className="font-bold text-slate-800">{listItem.key}</span>{" "}
                {listItem.text}
              </p>
            </li>
          ))}
        </ul>
      )}
      {item.extraContent && (
        <p className="mt-4 italic text-slate-600">{item.extraContent}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HEADER */}
      <header className="sticky top-[100px] z-40 bg-white border-b border-black flex items-center justify-between px-8 py-4 shadow-sm">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-[#FFB800] hover:bg-[#FF9500] text-black font-medium px-4 py-2 rounded-lg transition-all duration-300"
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>

        <h1 className="text-2xl md:text-3xl font-semibold text-[#246afe] truncate">
          {moduleContent.title}
        </h1>

        <div className="w-[150px] hidden md:block" />
      </header>

      {/* MAIN CONTENT */}
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row mt-4 md:mt-8 px-4 lg:px-8 pb-12">
        {/* KONTEN UTAMA */}
        <main className="w-full lg:w-3/4 pr-0 lg:pr-8 mb-8 lg:mb-0">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800">{moduleContent.title}</h2>
            <p className="text-lg text-slate-600 mt-1">{moduleContent.subtitle}</p>
          </div>

          <div className="w-full h-auto mb-10 rounded-lg overflow-hidden">
            <img
              src={module4Image}
              alt={moduleContent.imageAlt}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-8">
            {moduleContent.sections.map((section, index) => (
              <section key={index} className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                  {section.heading}
                </h3>
                {renderContent(section)}
              </section>
            ))}
          </div>
        </main>

        {/* SIDEBAR */}
        <aside className="w-full lg:w-1/4 hidden lg:block border-l border-black pl-8 pt-4">
          <div className="bg-white flex flex-col justify-between h-full">
            <div className="space-y-3 mt-20">
              {modules.map((m) => (
                <ModuleSidebarCard
                  key={m.id}
                  m={m}
                  navigate={navigate}
                  currentPath={currentPath}
                />
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={() => navigate("/quiz-museum-raja-ali-haji/utama")} // ke halaman quiz museum raja ali haji
                className="flex items-center justify-center gap-2 w-full bg-[#246afe] hover:bg-[#1a58e0] text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 text-base shadow-md hover:shadow-lg"
              >
                <span>Yuk, Ikutan Kuisnya</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
