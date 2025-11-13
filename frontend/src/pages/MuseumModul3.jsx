import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft, Lock, CheckCircle, ChevronRight } from "lucide-react";

import module3Image from "../assets/images/MuseumModul3.svg"; 

// Data Navigasi Modul (Disesuaikan untuk flow Modul 3)
const modules = [
  { id: 1, title: "Mengenal Museum Raja Ali Haji", locked: false, completed: true, path: "/museum-raja-ali-haji/module-1" },
  { id: 2, title: "Pesona Sejarah & Budaya Kepulauan Riau", locked: false, completed: true, path: "/museum-raja-ali-haji/module-2" },
  { id: 3, title: "Petualangan Kuliner & Kerajinan Khas", locked: false, completed: true, path: "/museum-raja-ali-haji/module-3" }, 
  { id: 4, title: "Sejarah Terbentuknya Kota Batam", locked: true, completed: false, path: "/museum-raja-ali-haji/module-4" },
];

// Konten Detail Modul 3
const moduleContent = {
  title: "Petualangan Kuliner & Kerajinan Khas",
  subtitle: "Yuk Eksplor Kuliner & Kerajinan khas Kepri!",
  imageAlt: "Petualangan Kuliner & Kerajinan Khas",
  sections: [
    {
      heading: "Kuliner Khas: Cita Rasa Autentik dari Laut dan Darat",
      content: `Makanan Kepulauan Riau didominasi oleh kekayaan hasil laut, tetapi juga diperkaya dengan sentuhan rempah yang kuat. Beberapa hidangan ini wajib Anda kenal:`,
      list: [
        {
          key: "Gonggong:",
          text: "Siput laut khas Kepri ini adalah ikon kuliner yang paling dikenal. Disajikan dengan cara direbus dan disantap bersama sambal spesial, hidangan ini menawarkan pengalaman rasa yang unik dan tak terlupakan.",
        },
        {
          key: "Otak-Otak:",
          text: "Berbeda dari daerah lain, otak-otak khas Kepri memiliki aroma yang lebih kuat karena dibakar dengan arang. Otak-otak ini terbuat dari campuran ikan tenggiri yang dihaluskan dengan bumbu-bumbu, lalu dibungkus daun kelapa dan dibakar.",
        },
        {
          key: "Mie Tarempa:",
          text: "Hidangan mi legendaris dari Tarempa ini terkenal dengan rasanya yang gurih, pedas, dan sedikit manis. Disajikan dengan suwiran ikan, kecambah, dan taburan bawang goreng yang melimpah.",
        },
        {
          key: "Lempeng Sagu:",
          text: "Makanan pokok masyarakat Melayu zaman dulu. Sagu diolah menjadi lempengan yang dibakar, biasanya disajikan dengan ikan kuah pedas. Hidangan ini mencerminkan kearifan lokal dalam memanfaatkan sumber daya alam.",
        },
      ],
    },
    {
      heading: "Kerajinan Khas: Karya Seni dalam Genggaman",
      content: `Kepulauan Riau juga terkenal dengan kerajinan tangannya yang memadukan unsur alam dan budaya lokal. Kerajinan ini tidak hanya berfungsi sebagai benda pakai, tetapi juga sebagai karya seni yang indah.`,
      list: [
        {
          key: "Batik Gonggong:",
          text: "Terinspirasi dari ikon Batam, batik ini menggunakan motif cangkang gonggong yang disusun secara artistik. Batik Gonggong menawarkan nuansa modern namun tetap mempertahankan identitas khas Kepri, menjadikannya oleh-oleh populer.",
        },
        {
          key: "Tenun Songket:",
          text: "Sama seperti di daerah Melayu lainnya, tenun songket Kepri memiliki motif yang kaya dan warna yang cerah. Setiap motif memiliki makna filosofis yang dalam, menceritakan tentang alam, hewan, dan keyakinan masyarakat setempat.",
        },
        {
          key: "Miniatur Perahu Lancang Kuning:",
          text: "Perahu legendaris dalam mitologi Melayu ini sering dijadikan miniatur sebagai kerajinan. Miniatur ini tidak hanya indah, tetapi juga melambangkan semangat pelaut dan warisan maritim yang kuat di Kepri.",
        },
      ],
    },
    {
      heading: "Nilai-Nilai Budaya di Balik Kuliner dan Kerajinan",
      content: `Baik kuliner maupun kerajinan tangan Kepri menyimpan nilai-nilai budaya yang dalam:`,
      list: [
        {
          key: "Kearifan Lokal:",
          text: "Penggunaan bahan-bahan alami seperti sagu dan hasil laut menunjukkan bagaimana masyarakat lokal hidup harmonis dengan alam.",
        },
        {
          key: "Identitas dan Cerita:",
          text: "Setiap motif pada batik dan setiap resep pada masakan memiliki cerita dan makna yang diwariskan dari generasi ke generasi, menjaga identitas budaya tetap hidup.",
        },
        {
          key: "Kreativitas dan Ketelitian:",
          text: "Seni kerajinan tangan, seperti tenun dan ukiran, mencerminkan ketelitian, kesabaran, dan kreativitas tinggi dari para pengrajinnya.",
        },
      ],
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

// --- Komponen Utama Modul 3 ---
export default function Module3RajaAliHaji() {
  const navigate = useNavigate();
  const currentPath = "/museum-raja-ali-haji/module-3"; // ✅ diperbaiki

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
      {item.extraContent && <p className="mt-4">{item.extraContent}</p>}
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
            <h2 className="text-3xl font-bold text-slate-800">
              {moduleContent.title}
            </h2>
            <p className="text-lg text-slate-600 mt-1">
              {moduleContent.subtitle}
            </p>
          </div>
          
          <div className="w-full h-auto mb-10 rounded-lg overflow-hidden">
            <img
              src={module3Image} 
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
                onClick={() => navigate("/museum-raja-ali-haji/module-4")} // ✅ arahkan ke modul berikutnya
                className="flex items-center justify-center gap-2 w-full bg-[#246afe] hover:bg-[#1a58e0] text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 text-base shadow-md hover:shadow-lg"
              >
                <span>Sejarah Terbentuknya Kota Batam</span>
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
