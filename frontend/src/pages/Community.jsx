import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  MessageCircle,
  Bookmark,
  Send,
  Image as ImageIcon,
  X,
  PencilLine,
  Home,
} from "lucide-react";

import museumImg from "../assets/images/Museum.png";
import ranohImg from "../assets/images/RanohIsland.png";
import vietnamImg from "../assets/images/VietnamCamp.png";
import hutanImg from "../assets/images/HutanWisataMataKucing.png";

// ==== DATA AWAL POST ====
const initialPosts = [
  {
    id: 1,
    name: "Bobi",
    time: "12 jam",
    text: `Beberapa tempat yang harus kamu datengin kalo ke batam

1. Museum Raja Ali Haji
2. Kampung Vietnam
3. Ranoh Island Resort
4. Waterpark Top 100 Batu Aji`,
    images: [],
  },
  {
    id: 2,
    name: "Amel",
    time: "12 jam",
    text: "Aku pernah ke Museum Raja Ali Haji ini beberapa foto nya",
    images: [museumImg, ranohImg, vietnamImg],
  },
  {
    id: 3,
    name: "Johnson",
    time: "12 jam",
    text: "Aku pernah ke Museum Raja Ali Haji ini beberapa foto nya",
    images: [museumImg],
  },
  {
    id: 4,
    name: "Naufal",
    time: "12 jam",
    text: "Aku pernah ke Museum Raja Ali Haji ini beberapa foto nya",
    images: [museumImg, ranohImg, hutanImg],
  },
];

// avatar sederhana dari inisial
const Avatar = ({ name, size = "md" }) => {
  const initial = name?.[0]?.toUpperCase() || "?";
  const sizeClass =
    size === "lg"
      ? "w-10 h-10 text-base"
      : size === "sm"
      ? "w-7 h-7 text-xs"
      : "w-9 h-9 text-sm";

  return (
    <div
      className={`rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold ${sizeClass}`}
    >
      {initial}
    </div>
  );
};

const PostCard = ({ post, onToggleSave, isSaved }) => {
  return (
    <article className="bg-white rounded-2xl border border-gray-200 px-5 py-4 mb-6">
      {/* header */}
      <div className="flex items-start gap-3 mb-3">
        <Avatar name={post.name} />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900 leading-tight">
                {post.name}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">{post.time}</p>
            </div>
          </div>
        </div>
      </div>

      {/* text */}
      <p className="text-sm text-gray-800 whitespace-pre-line mb-3">
        {post.text}
      </p>

      {/* images */}
      {post.images && post.images.length > 0 && (
        <div className="mt-2 mb-3 grid gap-2 grid-cols-3">
          {post.images.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl h-28 md:h-32 border border-gray-100"
            >
              <img
                src={img}
                alt="Post"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      )}

      {/* actions */}
      <div className="flex items-center gap-4 pt-1 text-gray-500 text-sm">
        <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
          <Heart size={16} />
        </button>
        <button className="flex items-center gap-1.5 hover:text-blue-500 transition-colors">
          <MessageCircle size={16} />
        </button>
        <button
          onClick={() => onToggleSave(post.id)}
          className={`flex items-center gap-1.5 transition-colors ${
            isSaved ? "text-blue-600" : "hover:text-blue-500"
          }`}
        >
          <Bookmark size={16} />
          <span className="text-xs hidden sm:inline">
            {isSaved ? "Saved" : "Save"}
          </span>
        </button>
      </div>
    </article>
  );
};

const NewReviewModal = ({ open, onClose, onAddPost }) => {
  const [text, setText] = useState("");
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  if (!open) return null;

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);
    setImageFiles(files);

    const urls = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(urls);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() && imagePreviews.length === 0) return;

    const newPost = {
      id: Date.now(),
      name: "Fauzan",
      time: "Baru saja",
      text: text.trim(),
      images: imagePreviews,
    };

    onAddPost(newPost);
    setText("");
    setImageFiles([]);
    setImagePreviews([]);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-xl overflow-hidden">
        {/* header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Batal
          </button>
          <p className="text-sm font-semibold text-gray-900">Ulasan Baru</p>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={18} />
          </button>
        </div>

        {/* body */}
        <form onSubmit={handleSubmit} className="px-4 pt-4 pb-3">
          <div className="flex items-start gap-3 mb-3">
            <Avatar name="Fauzan" size="lg" />
            <div>
              <p className="font-semibold text-gray-900 text-sm">Fauzan</p>
              <p className="text-xs text-gray-400">Tambahkan topik</p>
            </div>
          </div>

          <textarea
            rows={4}
            className="w-full text-sm text-gray-800 placeholder-gray-400 border-none outline-none resize-none focus:ring-0"
            placeholder="Apa yang baru?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {/* preview gambar yang diupload */}
          {imagePreviews.length > 0 && (
            <div className="mt-3 grid grid-cols-3 gap-2">
              {imagePreviews.map((src, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-xl h-20 border border-gray-100"
                >
                  <img
                    src={src}
                    alt={`preview-${idx}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-2 text-sm">
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageChange}
              />
              <label
                htmlFor="imageUpload"
                className="flex items-center gap-1.5 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl border border-dashed border-gray-300 flex items-center justify-center">
                  <ImageIcon size={18} />
                </div>
                <span className="hidden sm:inline">Tambah foto</span>
              </label>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-1.5 rounded-full px-5 py-1.5 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Kirim
              <Send size={14} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Community = ({ isLoggedIn, openLogin, openRegister }) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [posts, setPosts] = useState(initialPosts);
  const [savedIds, setSavedIds] = useState([]);
  const [filterSaved, setFilterSaved] = useState(false);

  const handleAddPost = (newPost) => {
    // taruh di paling atas feed
    setPosts((prev) => [newPost, ...prev]);
  };

  const handleToggleSave = (postId) => {
    setSavedIds((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  const displayedPosts = filterSaved
    ? posts.filter((p) => savedIds.includes(p.id))
    : posts;

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <Navbar
        isLoggedIn={isLoggedIn}
        openLogin={openLogin}
        openRegister={openRegister}
      />

      {/* MAIN */}
      <main className="flex-1 w-full pt-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6 pt-10 pb-16">
          {/* sidebar kiri */}
          <div className="hidden lg:flex flex-col gap-3 fixed left-8 top-40">
            {/* tombol home */}
            <button
              onClick={() => navigate("/")}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center shadow-sm hover:bg-gray-50"
            >
              <Home size={18} className="text-gray-700" />
            </button>

            {/* tombol save */}
            <button
              onClick={() => setFilterSaved((prev) => !prev)}
              className={`w-10 h-10 rounded-full border bg-white flex items-center justify-center shadow-sm hover:bg-gray-50 ${
                filterSaved ? "border-blue-500" : "border-gray-200"
              }`}
            >
              <Bookmark
                size={18}
                className={filterSaved ? "text-blue-600" : "text-gray-700"}
              />
            </button>
          </div>

          {/* share box */}
          <section className="mb-8">
            <button
              onClick={() => setOpenModal(true)}
              className="w-full flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-sm border border-gray-100 text-left hover:shadow-md transition-shadow"
            >
              <Avatar name="Fauzan" />
              <span className="flex-1 text-sm text-gray-400">
                Share your thoughts
              </span>
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-900 text-white">
                <PencilLine size={18} />
              </span>
            </button>
          </section>

          {/* feed */}
          <section className="space-y-0">
            {displayedPosts.length === 0 ? (
              <p className="text-sm text-gray-500 text-center mt-6">
                {filterSaved
                  ? "Belum ada ulasan yang kamu save."
                  : "Belum ada ulasan."}
              </p>
            ) : (
              displayedPosts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  onToggleSave={handleToggleSave}
                  isSaved={savedIds.includes(post.id)}
                />
              ))
            )}
          </section>
        </div>
      </main>

      <Footer />

      <NewReviewModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onAddPost={handleAddPost}
      />
    </div>
  );
};

export default Community;