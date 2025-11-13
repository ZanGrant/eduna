import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft, Lock, CheckCircle, ChevronRight } from "lucide-react";
// Pastikan path gambar ini benar (berdasarkan Modul 2.jpg)
import module2Image from "../assets/images/MuseumModul2.svg"; 

// Data Navigasi Modul (Disesuaikan untuk flow Modul 2)
const modules = [
  // Module 1: Completed
  { id: 1, title: "Mengenal Museum Raja Ali Haji", locked: false, completed: true, path: "/museum-raja-ali-haji/module-1" },
  // Module 2: Current and Completed
  { id: 2, title: "Pesona Sejarah & Budaya Kepulauan Riau", locked: false, completed: true, path: "/museum-raja-ali-haji/module-2" },
  // Module 3: Next and Locked
  { id: 3, title: "Petualangan Kuliner & Kerajinan Khas", locked: true, completed: false, path: "/museum-raja-ali-haji/module-3" }, 
  // Module 4: Locked
  { id: 4, title: "Sejarah Terbentuknya Kota Batam", locked: true, completed: false, path: "/museum-raja-ali-haji/module-4" },
];

// Konten Detail Modul 2
const moduleContent = {
  title: "Pesona Sejarah & Budaya Kepulauan Riau",
  subtitle: "Gimana sih sejarah dan apa aja sih budaya di Kepulauan Riau",
  imageAlt: "Pesona Sejarah & Budaya Kepulauan Riau",
  sections: [
    {
      heading: "Kepulauan Riau : Jantung Peradaban Melayu",
      content: `Kepulauan Riau (Kepri) memiliki posisi strategis di jalur perdagangan internasional, menjadikan wilayah ini tempat bertemunya berbagai budaya. Sejak zaman dahulu, Kepri telah menjadi pusat kerajaan-kerajaan besar, termasuk Kesultanan Riau-Lingga yang memainkan peran kunci dalam sejarah maritim dan kebudayaan Melayu.`,
      list: [
        {
          key: "Pusat Ekonomi dan Budaya:",
          text: "Dengan pelabuhan-pelabuhan yang ramai, Kepri menjadi pusat perdagangan penting yang menghubungkan Nusantara dengan dunia luar.",
        },
        {
          key: "Pusat Keilmuan:",
          text: "Pada masa Kesultanan, Kepri juga dikenal sebagai pusat keilmuan Islam dan sastra, tempat di mana para ulama dan sastrawan besar lahir dan berkarya.",
        },
      ],
    },
    {
      heading: "Raja Ali Haji : Sang Penjaga Peradaban",
      content: `Di antara tokoh-tokoh besar tersebut, nama Raja Ali Haji (1808-1873) bersinar terang. Beliau bukan hanya seorang bangsawan, melainkan juga seorang intelektual dan budayawan yang sangat berpengaruh. Karyanya tidak hanya mencatat sejarah, tetapi juga membentuk masa depan.`,
      list: [
        {
          key: "Gurindam 12:",
          text: "Karya fenomenal ini adalah serangkaian puisi berisi nasihat moral dan etika kehidupan. Gurindam ini menjadi cerminan dari kebijaksanaan dan nilai-nilai luhur masyarakat Melayu.",
        },
        {
          key: "Tuhfat al-Nafis:",
          text: "Sebuah kitab sejarah yang luar biasa, mencatat silsilah raja-raja dan peristiwa-peristiwa penting di Kesultanan Melayu, menjadikannya sumber referensi utama bagi sejarawan hingga kini.",
        },
      ],
      extraContent: `Kontribusi Raja Ali Haji terhadap bahasa Melayu juga sangat besar. Beliau dianggap sebagai salah satu pelopor modernisasi bahasa yang menjadi cikal bakal Bahasa Indonesia.`
    },
    {
      heading: "Museum Raja Ali Haji: Jendela Budaya & Sejarah",
      content: `Terletak di pusat Kota Batam, Museum Raja Ali Haji adalah tempat terbaik untuk merasakan secara langsung kekayaan warisan Kepulauan Riau. Museum ini menyimpan ribuan koleksi yang terbagi dalam beberapa kategori, menceritakan kembali perjalanan peradaban Melayu.`,
      list: [
        {
          key: "Koleksi Etnografi:",
          text: "Pameran ini menampilkan pakaian adat, perhiasan, dan perlengkapan rumah tangga yang digunakan masyarakat Melayu tempo dulu. Anda bisa melihat keindahan kain songket dan detail ukiran yang mencerminkan cita rasa seni yang tinggi.",
        },
        {
          key: "Koleksi Sejarah & Kerajinan:",
          text: "Di sini, kita bisa menemukan berbagai artefak penting, seperti replika mata uang kuno, senjata tradisional, dan dokumen bersejarah yang membuktikan peran Kepri dalam kancah dunia. Koleksi Seni & Kerajinan: Bagian ini didedikasikan untuk menampilkan kerajinan tangan khas Riau, seperti ukiran kayu, anyaman, dan alat musik tradisional yang menjadi bagian tak terpisahkan dari kehidupan sehari-hari masyarakat Melayu.",
        },
      ],
    },
    {
      heading: "Nilai-Nilai Abadi dari Sejarah Kepri",
      content: `Kunjungan ke Museum Raja Ali Haji dan pemahaman akan sejarah Kepulauan Riau membawa kita pada beberapa kesadaran penting:`,
      list: [
        {
          key: "Nilai Kebesaran:",
          text: "Sejarah Kepri mengajarkan kita tentang kebesaran peradaban Melayu yang pernah menjadi pusat maritim, perdagangan, dan keilmuan dunia.",
        },
        {
          key: "Nilai Kemanusiaan:",
          text: "Nasihat dalam Gurindam 12 tetap relevan, mengingatkan kita akan pentingnya kejujuran, kerendahan hati, dan saling menghormati.",
        },
        {
          key: "Nilai Budaya:",
          text: "Warisan seni dan kerajinan menunjukkan kreativitas dan ketekunan para leluhur, yang patut kita jaga dan lestarikan.",
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

// --- Komponen Utama Modul 2 ---
export default function Module2RajaAliHaji() {
  const navigate = useNavigate();
  const currentPath = "/museum-raja-ali-haji/module-2"; 

  const renderContent = (item) => {
  return (
    <div className="text-slate-700 leading-relaxed space-y-4 text-base">
      {/* Konten utama */}
      <p>{item.content}</p>

      {/* Daftar list (kalau ada) */}
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

      {/* Tambahan extraContent di bawah list */}
      {item.extraContent && (
        <p className="mt-4">{item.extraContent}</p>
      )}
    </div>
  );
};


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
        
        <h1 className="text-2xl md:text-3xl font-semibold text-[#246afe] truncate">
          Pesona Sejarah & Budaya Kepulauan Riau
        </h1>

        <div className="w-[150px] hidden md:block" /> 
      </header>

      {/* === MAIN CONTENT LAYOUT (Struktur Flexbox untuk Sidebar Panjang) === */}
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row mt-4 md:mt-8 px-4 lg:px-8 pb-12">
        
        {/* === KONTEN UTAMA (KIRI) === */}
        <main className="w-full lg:w-3/4 pr-0 lg:pr-8 mb-8 lg:mb-0 max-w-[800px] lg:max-w-none lg:flex-grow">
          
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
              src={module2Image} 
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
        
        {/* === SIDEBAR MODUL (KANAN) - Struktur untuk Sidebar Panjang === */}
        <aside className="w-full lg:w-1/4 hidden lg:block border-l border-black pl-8 pt-4">
            {/* Div ini yang akan meregang setinggi aside dan membagi kontennya. */}
            <div className="bg-white flex flex-col justify-between h-full"> 
                
                {/* Bagian Atas: Daftar Modul */}
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

                {/* Bagian Bawah: Tombol Navigasi (Didorong ke bawah oleh justify-between) */}
                <div className="mt-8"> 
                    <button
                        // Mengarah ke Modul 3
                        onClick={() => navigate("/museum-raja-ali-haji/module-3")}
                        className="flex items-center justify-center gap-2 w-full bg-[#246afe] hover:bg-[#1a58e0] text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 text-base shadow-md hover:shadow-lg"
                        aria-label="Next Module: Petualangan Kuliner & Kerajinan Khas"
                    >
                        <span>Petualangan Kuliner & Kerajinan Khas</span>
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