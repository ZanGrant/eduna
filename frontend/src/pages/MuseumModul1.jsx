import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft, Lock, CheckCircle, ChevronRight } from "lucide-react";
import module1Image from "../assets/images/MuseumModul1.svg"; 

// Data Navigasi Modul (dipertahankan)
const modules = [
  // Module 1: Current and Completed
  { id: 1, title: "Mengenal Museum Raja Ali Haji", locked: false, completed: true, path: "/museum-raja-ali-haji/module-1" },
  // Module 2: Next and Locked
  { id: 2, title: "Pesona Sejarah & Budaya Kepulauan Riau", locked: true, completed: false, path: "/museum-raja-ali-haji/module-2" },
  // Module 3: Locked
  { id: 3, title: "Petualangan Kuliner & Kerajinan Khas", locked: true, completed: false, path: "/museum-raja-ali-haji/module-3" }, 
  // Module 4: Locked
  { id: 4, title: "Sejarah Terbentuknya Kota Batam", locked: true, completed: false, path: "/museum-raja-ali-haji/module-4" },
];

// Konten Detail Modul 1 (dipertahankan)
const moduleContent = {
  title: "Mengenal Museum Raja Ali Haji",
  subtitle: "Kenalan dulu yuk dengan Museum Raja Ali Haji",
  imageAlt: "Museum Raja Ali Haji",
  sections: [
    {
      heading: "Sekilas tentang Raja Ali Haji",
      content: `Raja Ali Haji adalah seorang tokoh besar yang lahir pada tahun 1808 dan wafat sekitar tahun 1873. Beliau dikenal sebagai ulama, sastrawan, dan sejarawan terkemuka dari Kesultanan Riau-Lingga. Kontribusinya sangat besar bagi pengembangan kebudayaan Melayu.`,
      list: [
        {
          key: "Penerus Bahasa:",
          text: "Karyanya yang paling terkenal, Gurindam 12, bukan hanya berisi nasihat moral, tetapi juga menjadi tonggak penting dalam perkembangan bahasa Melayu yang kelak menjadi Bahasa Indonesia. Beliau juga dikenal sebagai pelopor modernisasi bahasa Melayu.",
        },
        {
          key: "Sejarawan Terkemuka:",
          text: "Karyanya, Tuhfat al-Nafis, merupakan catatan sejarah yang detail dan berharga tentang Kesultanan Melayu Riau-Lingga.",
        },
      ],
    },
    {
      heading: "Mengapa Ada Museum Raja Ali Haji?",
      content: `Museum ini didirikan sebagai wadah untuk melestarikan dan memperkenalkan warisan budaya Melayu Riau kepada masyarakat luas. Museum ini, kita dapat melihat langsung peninggalan bersejarah yang menceritakan peradaban masa lalu, mulai dari kehidupan sehari-hari, sistem pemerintahan, hingga seni dan adat istiadat.`,
      list: [],
    },
    {
      heading: "Koleksi Unggulan Museum",
      content: `Museum Raja Ali Haji memiliki beragam koleksi yang dibagi menjadi beberapa kategori. Setiap benda memiliki kisahnya sendiri yang menunggu untuk diungkap.`,
      list: [
        {
          key: "Koleksi Sejarah dan Arkeologi:",
          text: "Di sini, Anda dapat melihat berbagai artefak kuno, seperti keramik, perhiasan, dan alat-alat rumah tangga dari masa lampau. Salah satu yang paling menarik adalah koin-koin kuno yang digunakan pada masa Kesultanan Riau-Lingga, yang menunjukkan adanya sistem perdagangan yang maju pada saat itu.",
        },
        {
          key: "Koleksi Etnografi:",
          text: "Bagian ini menampilkan benda-benda yang terkait dengan kehidupan sosial dan budaya masyarakat Melayu. Anda bisa melihat pakaian adat Melayu Riau, perlengkapan upacara tradisional, dan alat-alat musik khas. Setiap detail pada pakaian adat memiliki makna filosofis yang mendalam.",
        },
        {
          key: "Koleksi Seni:",
          text: "Koleksi ini memperlihatkan keindahan seni Melayu, seperti tenun songket, ukiran kayu, dan kaligrafi. Seni-seni ini bukan hanya indah, tetapi juga mencerminkan kehalusan budi dan ketelitian para seniman Melayu masa lampau.",
        },
      ],
    },
    {
      heading: "Nilai-Nilai Penting dari Museum",
      content: `Mengunjungi Museum Raja Ali Haji bukan hanya sekadar melihat-lihat, tetapi juga sebuah perjalanan untuk memahami dan menghargai nilai-nilai luhur yang diwariskan:`,
      list: [
        {
          key: "Nilai Sejarah:",
          text: "Memahami perjuangan dan peradaban yang membentuk identitas kita.",
        },
        {
          key: "Nilai Budaya:",
          text: "Menghargai kekayaan adat, tradisi, dan seni yang menjadi ciri khas bangsa.",
        },
        {
          key: "Nilai Moral:",
          text: "Mengambil pelajaran dari Gurindam 12 dan karya-karya lain untuk membentuk karakter yang lebih baik.",
        },
      ],
    },
  ],
};

// --- Komponen Card Modul Samping (Dipertahankan) ---
const ModuleSidebarCard = ({ m, navigate, currentPath }) => {
    const isCurrent = m.path === currentPath;
    const isLocked = m.locked && !isCurrent;
    
    const navigateToModule = () => {
        if (!isLocked) {
             navigate(m.path); 
        }
    };

    return (
        <div 
          className={`flex items-center justify-between py-2 cursor-pointer 
            ${isCurrent ? 'text-[#246afe] font-bold' : isLocked ? 'text-gray-400' : 'text-slate-700 hover:text-[#246afe]'}`}
          onClick={navigateToModule}
        >
            <p className="text-sm">
              {m.title}
            </p>
            {isCurrent ? (
                <CheckCircle size={16} className="text-[#246afe]" />
            ) : isLocked ? (
                <Lock size={14} className="text-gray-400" />
            ) : (
                null
            )}
        </div>
    );
};

// --- Komponen Utama Modul 1 ---
export default function Module1RajaAliHaji() {
  const navigate = useNavigate();
  const currentPath = "/museum-raja-ali-haji/module-1"; 

  const renderContent = (item) => {
    // Fungsi renderContent dipertahankan
    return (
      <div className="text-slate-700 leading-relaxed space-y-4 text-base">
        <p>{item.content}</p>

        {item.list && item.list.length > 0 && (
          <ul className="list-disc pl-5 space-y-3">
            {item.list.map((listItem, index) => (
              <li key={index} className="text-base">
                <p>
                  <span className="font-bold text-slate-800">{listItem.key}</span>{" "}
                  {listItem.text}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white"> 
      <Navbar />

      {/* === STICKY HEADER (Dipertahankan) === */}
      <header className="sticky top-[100px] z-40 bg-white border-b border-black flex items-center justify-between px-8 py-4 shadow-sm">
        <button
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 bg-[#FFB800] hover:bg-[#FF9500] text-black font-medium px-4 py-2 rounded-lg transition-all duration-300"
          aria-label="Back"
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </button>
        
        <h1 className="text-2xl md:text-3xl font-semibold text-[#246afe] truncate">
          Mengenal Museum Raja Ali Haji
        </h1>

        <div className="w-[150px] hidden md:block" /> 
      </header>

      {/* === MAIN CONTENT LAYOUT === */}
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:items-start mt-4 md:mt-8 px-4 lg:px-8 pb-12">
        
        {/* === KONTEN UTAMA (KIRI) === */}
        <main className="w-full lg:w-3/4 pr-0 lg:pr-8 mb-8 lg:mb-0 max-w-[800px] lg:max-w-none">
          
          {/* 1. Judul Halaman & Subjudul */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800">
              {moduleContent.title}
            </h2>
            <p className="text-lg text-slate-600 mt-1">
              {moduleContent.subtitle}
            </p>
          </div>
          
          {/* 2. Gambar Utama */}
          <div className="w-full h-auto mb-10 rounded-lg overflow-hidden">
            <img
              src={module1Image} 
              alt={moduleContent.imageAlt}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* 3. Bagian-bagian Konten */}
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
        
        {/* === SIDEBAR MODUL (KANAN) - PERBAIKAN === */}
        <aside className="w-full lg:w-1/4 hidden lg:flex lg:flex-col border-l border-black pl-8 pt-4 lg:self-stretch">
            
            {/* Bagian Atas: Daftar Modul - flex-grow untuk mengisi ruang */}
            <div className="flex-grow space-y-3 mt-20">
                {modules.map((m) => (
                    <ModuleSidebarCard
                        key={m.id}
                        m={m}
                        navigate={navigate}
                        currentPath={currentPath}
                    />
                ))}
            </div>

            {/* Bagian Bawah: Tombol Navigasi - flex-shrink-0 untuk tetap di bawah */}
            <div className="flex-shrink-0 mt-8 pt-4 border-t border-gray-200"> 
                <button
                    onClick={() => navigate("/museum-raja-ali-haji/module-2")}
                    className="flex items-center justify-center gap-2 w-full bg-[#246afe] hover:bg-[#1a58e0] text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 text-base shadow-md hover:shadow-lg"
                    aria-label="Next Module: Pesona Sejarah & Budaya Kepulauan Riau"
                >
                    <span>Pesona Sejarah & Budaya Kepulauan Riau</span>
                    <ChevronRight size={18} />
                </button>
            </div>
            
        </aside>
      </div>

      <Footer />
    </div>
  );
}