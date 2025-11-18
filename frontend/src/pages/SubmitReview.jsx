import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Star, ChevronLeft, Image as ImageIcon, Send, XCircle, Check, CornerUpLeft } from "lucide-react"; 
import museumImg from "../assets/images/museum-community.svg"; 

// KOMPONEN MODAL SUKSES (Tombol dikembalikan ke Pojok Kanan Atas)
const SuccessModal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    // Fixed inset-0 dengan latar belakang putih akan mengambil alih seluruh layar.
    return (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 p-6"> 
            
            {/* 🟢 TOMBOL DIPOSISIKAN KEMBALI di KANAN ATAS */}
            <button 
                onClick={onClose} 
                className="absolute top-8 right-8 flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
                Go back to Community
                <CornerUpLeft size={16} />
            </button>
            
            {/* Konten Utama di tengah */}
            <div className="flex flex-col items-center justify-center">
                {/* Icon Centang Biru */}
                <div className="bg-blue-600 p-4 rounded-full mb-6">
                    <Check size={48} className="text-white" strokeWidth={3} />
                </div>
                
                {/* Teks Sukses */}
                <h2 className="text-xl font-semibold text-blue-600">
                    Ulasan kamu telah berhasil dibuat
                </h2>
            </div>
        </div>
    );
};


const SubmitReview = () => {
  const navigate = useNavigate();

  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); 

  const handleNavigateBack = () => {
    navigate(-1); 
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file)); 
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
    const fileInput = document.getElementById('imageUpload');
    if (fileInput) {
      fileInput.value = null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || !title || !reviewText) {
      alert("Mohon lengkapi rating, judul, dan ulasan Anda.");
      return;
    }
    
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Review Data Submitted:", {
        rating,
        title,
        reviewText,
        imageFileName: imageFile ? imageFile.name : 'N/A',
      });
      
      setIsSubmitting(false);
      setShowSuccessModal(true); // Tampilkan modal
    }, 1500);
  };

  const handleCloseModalAndNavigate = () => {
      setShowSuccessModal(false);
      handleNavigateBack(); // Kembali ke halaman sebelumnya
  }
  
  const RatingInput = () => (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((starValue) => (
        <Star
          key={starValue}
          size={32}
          onClick={() => setRating(starValue)}
          className={`cursor-pointer transition-colors ${
            starValue <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-100"
          }`}
        />
      ))}
    </div>
  );

  return (
    <>
      {/* 🟢 HANYA RENDER NAVBAR JIKA MODAL TIDAK AKTIF */}
      {!showSuccessModal && <Navbar />}
      
      {/* KONTEN UTAMA HANYA TAMPIL JIKA MODAL BELUM MUNCUL */}
      {!showSuccessModal && (
        <div className="max-w-[1200px] mx-auto px-6 pt-[120px] pb-20">
          
          {/* ====== MAIN LAYOUT: 2 KOLOM ====== */}
          <div className="flex flex-col lg:flex-row">
              
              {/* ====== KOLOM KIRI: Header & Destinasi Info ====== */}
              <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
                  
                  {/* Tombol Back */}
                  <div className="mb-10"> 
                      <button 
                          onClick={handleNavigateBack} 
                          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                          <ChevronLeft size={28} className="text-gray-800" />
                      </button>
                  </div>
                  
                  <h1 
                      className="text-4xl lg:text-5xl leading-loose text-transparent bg-clip-text bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] inline-block"
                      style={{ fontWeight: 550 }}
                  >
                      Ceritakan<br/>tentang<br/>pengalaman<br/>wisata kamu.
                  </h1>

                  {/* Card Informasi Destinasi */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 max-w-sm mt-8"> 
                      <img src={museumImg} alt="Museum Raja Ali Haji" className="w-full h-48 object-cover" />
                      <div className="p-5">
                          <h2 className="text-xl font-semibold text-gray-900 mb-1">Museum Raja Ali Haji</h2>
                          <p className="text-sm text-gray-600 leading-relaxed">
                              Jl. Engku Putri Utara No.1, Tlk. Tering, Kec. Batam Kota, Kepulauan Riau 29432.
                          </p>
                      </div>
                  </div>
              </div>

              {/* ====== KOLOM KANAN: Formulir Review ====== */}
              <div className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-xl lg:border-l lg:border-gray-300 lg:pl-12"> 
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Berikan penilaian rating untuk destinasi ini</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                      {/* ... (Konten Formulir) ... */}
                      <div>
                          <label className="block text-base font-medium text-gray-800 mb-2">
                              Penilaian <span className="text-red-500">*</span>
                          </label>
                          <RatingInput />
                          {rating > 0 && (
                              <p className="text-sm mt-1 text-gray-600">Anda memberi {rating} dari 5 bintang.</p>
                          )}
                      </div>

                      <div>
                          <label htmlFor="title" className="block text-base font-medium text-gray-800 mb-2">
                              Judul Ulasan <span className="text-red-500">*</span>
                          </label>
                          <input
                              id="title"
                              type="text"
                              placeholder="Tulis judul ulasan..."
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                              required
                          />
                      </div>

                      <div>
                          <label htmlFor="reviewText" className="block text-base font-medium text-gray-800 mb-2">
                              Tulis Ulasan <span className="text-red-500">*</span>
                          </label>
                          <textarea
                              id="reviewText"
                              rows="6"
                              placeholder="Tulis pengalaman kamu di destinasi ini..."
                              value={reviewText}
                              onChange={(e) => setReviewText(e.target.value)}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 resize-none text-sm"
                              required
                          />
                      </div>

                      <div className="pt-2">
                          <label className="block text-base font-medium text-gray-800 mb-2">
                              Tambahkan beberapa foto (Opsional)
                          </label>
                          {imagePreview ? (
                              <div className="relative w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden group">
                                  <img src={imagePreview} alt="Preview" className="object-cover w-full h-full" />
                                  <button 
                                      type="button" 
                                      onClick={handleRemoveImage} 
                                      className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity"
                                      title="Hapus foto"
                                  >
                                      <XCircle size={24} fill="white" className="stroke-current"/>
                                  </button>
                              </div>
                          ) : (
                              <>
                                  <input
                                      id="imageUpload"
                                      type="file"
                                      accept="image/*"
                                      onChange={handleImageChange}
                                      className="hidden" 
                                  />
                                  <label 
                                      htmlFor="imageUpload" 
                                      className="cursor-pointer flex items-center justify-center p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors"
                                  >
                                      <ImageIcon size={20} className="mr-2" />
                                      Upload foto atau video (opsional)
                                  </label>
                              </>
                          )}
                      </div>
                      
                      {/* 5. TOMBOL SUBMIT & CANCEL */}
                      <div className="pt-6 space-y-3">
                          <button
                              type="submit"
                              disabled={isSubmitting}
                              className={`w-full flex items-center justify-center gap-2 px-4 py-3 text-lg font-semibold text-white rounded-lg transition-colors ${
                                  isSubmitting ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                              }`}
                          >
                              {isSubmitting ? (
                                  <>
                                  <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                                  Mengirim...
                                  </>
                              ) : (
                                  <>
                                  <Send size={20} />
                                  Submit
                                  </>
                              )}
                          </button>
                          <button
                              type="button" 
                              onClick={handleNavigateBack}
                              className="w-full px-4 py-3 text-lg font-semibold text-red-600 bg-red-100 rounded-lg hover:bg-red-200 transition-colors"
                          >
                              Cancel
                          </button>
                      </div>
                  </form>
              </div>
          </div>
          
        </div>
      )}

      {/* 🟢 HANYA RENDER FOOTER JIKA MODAL TIDAK AKTIF */}
      {!showSuccessModal && <Footer />}

      {/* Modal selalu dirender di atas semua elemen saat aktif */}
      <SuccessModal isVisible={showSuccessModal} onClose={handleCloseModalAndNavigate} />
    </>
  );
};

export default SubmitReview;