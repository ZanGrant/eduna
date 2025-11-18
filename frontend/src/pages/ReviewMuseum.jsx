import React, { useState, useRef, useMemo } from "react";
// 🟢 TAMBAHKAN: useNavigate untuk navigasi dari React Router
import { useNavigate } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Share2, PencilLine, MapPin, Clock, Ticket, Mail, Link, ChevronDown } from "lucide-react"; 
import museumImg from "../assets/images/museum-community.svg";
import userImg from "../assets/icons/Icon Leaderboard 3.svg";
import reviewbenda from "../assets/images/ReviewBendaSejarah.svg"

// Fungsi utilitas untuk memformat tanggal
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
};

// Data Dummy untuk Review
const dummyReviews = [
    {
        id: 1,
        user: "Imam M",
        rating: "★★★☆☆", 
        title: "Museumnya informatif dan sejuk",
        text: "Koleksi yang dipamerkan sangat terawat dan penataan sejarahnya rapi. Pengalaman yang menyenangkan untuk memahami budaya Melayu Riau.",
        image: museumImg,
        date: "2025-11-01",
    },
    {
        id: 2,
        user: "Sarah K",
        rating: "★★★★★", 
        title: "Lokasi Strategis!",
        text: "Lokasinya sangat strategis, berada di pusat kota dekat Kantor Walikota Batam dan Alun-alun Engku Putri, aksesnya mudah dan berkesan.",
        image: null, 
        date: "2025-11-18", // Paling baru
    },
    {
        id: 3,
        user: "Budi S",
        rating: "★★★★☆", 
        title: "Kunjungan yang mendidik",
        text: "Anak-anak suka dengan benda-benda sejarah di sini. Tempat yang bagus untuk edukasi.",
        image: reviewbenda, 
        date: "2025-10-20", // Paling lama
    },
];


const ReviewMuseum = () => {
  // 🟢 INISIALISASI useNavigate
  const navigate = useNavigate();
    
  const [isShareDropdownOpen, setIsShareDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); 
  
  const [sortBy, setSortBy] = useState("relevant"); 
  const [filterRating, setFilterRating] = useState(null); 
  
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false); 
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false); 

  const overviewRef = useRef(null);
  const detailsRef = useRef(null);
  const reviewRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      const NAVBAR_HEIGHT = 100; 
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - NAVBAR_HEIGHT;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // 🟢 FUNGSI BARU UNTUK NAVIGASI KE SUBMIT REVIEW
  const handleNavigateToReview = () => {
      navigate('/submit-review'); // Arahkan ke path yang diinginkan
  };

  const handleRatingFilter = (rating) => {
      if (rating !== null && filterRating === rating) {
          setFilterRating(null);
      } else {
          setFilterRating(rating);
      }
      setIsFilterDropdownOpen(false); 
  };
  
  const handleSortSelection = (option) => {
      setSortBy(option);
      setIsSortDropdownOpen(false);
  };

  const processedReviews = useMemo(() => {
    let filtered = dummyReviews.filter(review => {
        const lowerCaseSearch = searchTerm.toLowerCase();
        return (
            review.title.toLowerCase().includes(lowerCaseSearch) ||
            review.text.toLowerCase().includes(lowerCaseSearch) ||
            review.user.toLowerCase().includes(lowerCaseSearch)
        );
    });
    
    if (filterRating !== null) {
        filtered = filtered.filter(review => {
            const actualStars = review.rating.indexOf('☆'); 
            const reviewRatingNumber = actualStars === -1 ? 5 : actualStars;
            return reviewRatingNumber === filterRating;
        });
    }

    let sorted = [...filtered]; 

    if (sortBy === "date-desc") {
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === "relevant") {
        // Logika sortir Most Relevant
    }

    return sorted;
  }, [searchTerm, sortBy, filterRating]);
  
  const sortOptions = {
    'relevant': 'Most Relevant',
    'date-desc': 'Most Recent',
  };

  return (
    <>
      <Navbar />

      <div className="max-w-[1100px] mx-auto px-6 pt-[120px] pb-20"> 
        {/* ... (Code di atas Review Section) ... */}
        
        {/* ====== TITLE & TOP INFO ====== */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-semibold mb-2">Museum Raja Ali Haji</h1>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-lg font-semibold">3</span>
              <span className="text-yellow-400">★★★☆☆</span>
              <span>({dummyReviews.length} reviews)</span>
            </div>
          </div>

          <div className="flex gap-4 text-gray-600 text-sm">
            {/* 1. IMPLEMENTASI DROPDOWN SHARE */}
            <div className="relative">
              <button
                className="hover:text-black flex items-center gap-1 p-2 rounded-lg"
                onClick={() => setIsShareDropdownOpen(!isShareDropdownOpen)}
              >
                <Share2 size={24} /> Share
              </button>
              
              {isShareDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                  <button className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => {
                        window.location.href = `mailto:?subject=Cek Museum Ini&body=Lihat Museum Raja Ali Haji: ${window.location.href}`;
                        setIsShareDropdownOpen(false);
                    }}
                  >
                    <Mail size={18} /> Email
                  </button>
                  <button className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        setIsShareDropdownOpen(false);
                        alert("Link berhasil disalin!");
                    }}
                  >
                    <Link size={18} /> Copy Link
                  </button>
                </div>
              )}
            </div>

            {/* 2. IMPLEMENTASI NAVIGASI REVIEW */}
            <button
              className="hover:text-black flex items-center gap-1 p-2 rounded-lg"
              // 🟢 GANTI onClick={navigateToReviewPage}
              onClick={handleNavigateToReview}
            >
              <PencilLine size={24} /> Review
            </button>
          </div>
        </div>

        {/* ... (sisa JSX lainnya) ... */}

        {/* ====== MAIN IMAGE ====== */}
        <img
          src={museumImg}
          alt="Museum Raja Ali Haji"
          className="w-full rounded-2xl mb-10"
        />

        {/* ====== NAV TABS ====== */}
        <div className="flex gap-8 border-b mb-10 text-gray-600 text-sm">
          <button
            className="pb-3 border-b-2 border-black text-black font-medium"
            onClick={() => scrollToSection(overviewRef)}
          >
            Overview
          </button>
          <button
            className="pb-3 hover:text-black"
            onClick={() => scrollToSection(detailsRef)}
          >
            Details
          </button>
          <button
            className="pb-3 hover:text-black"
            onClick={() => scrollToSection(reviewRef)}
          >
            Review
          </button>
        </div>

        {/* ====== OVERVIEW SECTION ====== */}
        <div ref={overviewRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="text-xl font-semibold mb-4">Overview</h2>

            <p className="text-gray-700 leading-relaxed mb-3">
              Terletak strategis di pusat kota Batam, Museum Raja Ali Haji menawarkan panorama
              sejarah yang sarat nilai budaya Melayu. Museum ini terletak dekat dengan Kantor Walikota
              dan Alun-alun Engku Putri, menjadikannya destinasi yang mudah dijangkau.
            </p>

            <p className="text-gray-700 font-medium mt-4 mb-2">Kelebihan yang Mengesankan:</p>
            <ul className="list-disc ml-6 text-gray-700 leading-relaxed space-y-1">
              <li>Penyiapan sejarah yang rapi dan informatif.</li>
              <li>Koleksi peralatan rumah tangga kerajaan yang kuat dan penuh makna.</li>
              <li>Lokasi strategis dekat pusat pemerintahan Batam dan Alun-alun Engku Putri.</li>
            </ul>
          </div>

          {/* MAP */}
          <div className="w-full h-[260px] rounded-xl overflow-hidden border">
            <iframe
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Museum%20Raja%20Ali%20Haji&t=&z=15&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>

        {/* ====== DETAILS SECTION ====== */}
        <div ref={detailsRef} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Details</h2>

          <div className="text-gray-700 space-y-4 mb-6">
            <p className="flex items-center gap-3">
              <MapPin size={18} className="text-blue-600" />
              Jl. Engku Putri Utara No.1, Tlk. Tering, Kec. Batam Kota, Kepulauan Riau
            </p>

            <p className="flex items-center gap-3">
              <Clock size={18} className="text-blue-600" />
              Setiap Hari (Selasa – Minggu) — 09.00–16.00
            </p>
          </div>

          {/* PRICE LIST (FIXED, SINGLE ICON) */}
          <div className="text-gray-700 space-y-3">
            <div className="flex items-start gap-3">
              <Ticket size={18} className="text-blue-600 mt-1" />
              <div className="space-y-1">
                <p>Pelajar: Rp 5.000</p>
                <p>Umum: Rp 10.000</p>
                <p>WNA: Rp 15.000</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* ====== REVIEW SECTION ====== */}
        <div ref={reviewRef} className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Review</h2>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl font-semibold">3</span>
            <span className="text-yellow-400">★★★☆☆</span>
            <span className="text-gray-600 text-sm">({dummyReviews.length} reviews)</span>
          </div>

          {/* Rating bars */}
          <div className="max-w-[300px] space-y-2 mb-10">
            {["Excellent", "Very Good", "Average", "Poor", "Terrible"].map((label, i) => (
              <div key={i} className="flex items-center gap-3 w-full">
                <span className="text-sm text-gray-700 w-[80px]">{label}</span>
                <div className="bg-gray-200 h-2 rounded-full flex-1">
                  <div className="bg-blue-500 h-2 rounded-full w-[60%]"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-10">
            <input
              type="text"
              placeholder="Search reviews"
              className="border rounded-lg px-3 py-2 text-sm w-full md:w-[260px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex gap-2">
              {/* 1. FILTER RATING DROPDOWN */}
              <div className="relative">
                  <button 
                      className={`border px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-1 ${filterRating ? 'bg-blue-500 text-white border-blue-500' : 'border-gray-300 hover:bg-gray-100'}`}
                      onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                  >
                      Filter {filterRating ? `(${filterRating} Bintang)` : '(Rating)'}
                      <ChevronDown size={14} className={`transform transition-transform ${isFilterDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                  
                  {isFilterDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-20 p-2 space-y-1">
                          <p className="font-semibold text-xs text-gray-500 px-2 pt-1 pb-1 border-b">Filter Berdasarkan Rating</p>
                          
                          {[5, 4, 3, 2, 1].map((rating) => (
                              <button
                                  key={rating}
                                  className={`w-full text-left px-2 py-1 rounded transition-colors text-sm flex justify-between items-center 
                                            ${filterRating === rating ? 'bg-blue-500 text-white hover:bg-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                                  onClick={() => handleRatingFilter(rating)}
                              >
                                  {`${rating} Bintang`}
                                  {filterRating === rating && <span className={`text-base ${filterRating === rating ? 'text-white' : 'text-blue-500'}`}>✓</span>}
                              </button>
                          ))}
                          
                          {filterRating !== null && (
                              <button
                                  className="w-full text-center text-xs text-red-500 pt-2 border-t mt-1 hover:text-red-700"
                                  onClick={() => handleRatingFilter(null)}
                              >
                                  Hapus Filter
                              </button>
                          )}
                      </div>
                  )}
              </div>
              
              {/* 2. SORTIR DROPDOWN (Most Relevant / Most Recent) */}
              <div className="relative">
                  <button 
                      className={`border px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-1 ${sortBy !== 'relevant' ? 'bg-blue-500 text-white border-blue-500' : 'border-gray-300 hover:bg-gray-100'}`}
                      onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                  >
                      {sortOptions[sortBy]}
                      <ChevronDown size={14} className={`transform transition-transform ${isSortDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                  
                  {isSortDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-20 p-2 space-y-1">
                          <p className="font-semibold text-xs text-gray-500 px-2 pt-1 pb-1 border-b">Urutkan Berdasarkan</p>

                          {Object.entries(sortOptions).map(([key, value]) => (
                              <button
                                  key={key}
                                  className={`w-full text-left px-2 py-1 rounded transition-colors text-sm flex justify-between items-center 
                                            ${sortBy === key ? 'bg-blue-500 text-white hover:bg-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                                  onClick={() => handleSortSelection(key)}
                              >
                                  {value}
                                  {sortBy === key && <span className={`text-base ${sortBy === key ? 'text-white' : 'text-blue-500'}`}>✓</span>}
                              </button>
                          ))}
                      </div>
                  )}
              </div>
            </div>
          </div>
          
          {/* Tampilkan status filter */}
          {filterRating !== null && (
              <p className="text-sm text-gray-600 mb-4">
                  Menampilkan review dengan rating **{filterRating} bintang**.
              </p>
          )}

          {/* Single Review */}
          <div className="space-y-10">
            {processedReviews.length > 0 ? (
                processedReviews.map((review) => (
                    <div key={review.id} className="border-b pb-8">
                      <div className="flex items-center gap-3 mb-1">
                        <img src={userImg} className="w-10 h-10 rounded-full" alt={`${review.user} avatar`} />
                        <div>
                          <p className="font-medium">{review.user}</p>
                          <span className="text-yellow-400 text-sm">{review.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-xs text-gray-500 mb-3 ml-[52px]">
                         {formatDate(review.date)} 
                      </p>

                      <p className="font-medium mb-2">
                        {review.title}
                      </p>
                      <p className="text-gray-700 mb-4">
                        {review.text}
                      </p>

                      {review.image && (
                          <img src={review.image} className="w-full max-w-[350px] rounded-xl" alt="Review image" />
                      )}
                    </div>
                ))
            ) : (
                <p className="text-gray-500">Tidak ada review yang cocok dengan kriteria saat ini.</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ReviewMuseum;