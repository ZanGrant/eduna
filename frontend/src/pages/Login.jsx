// src/pages/Login.jsx
import React from "react";
import MuseumImage from "../assets/images/museum-community.svg";

export default function Login({
  onClose,
  onGoRegister,
  onForgotPassword,
  onLoginSuccess,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: di sini normalnya cek username/password ke backend
    if (onLoginSuccess) onLoginSuccess(); // kasih tahu Home kalo login sukses
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/60">
      {/* klik luar card = close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative flex w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden z-10">
        {/* tombol X */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>

        {/* LEFT IMAGE — MIRING */}
        <div className="hidden md:block w-1/2">
          <img
            src={MuseumImage}
            alt="Museum"
            className="w-full h-full object-cover [clip-path:polygon(0%_0%,100%_0%,85%_100%,0%_100%)]"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
                Welcome to Eduna
              </h1>
              <p className="text-gray-600 mt-2">Login to continue</p>
            </div>

            {/* PENTING: pakai onSubmit={handleSubmit} */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="ex. imamganteng123"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-[#f5f7ff] focus:ring-2 focus:ring-[#246afe]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="ex. qwerty432"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-[#f5f7ff] focus:ring-2 focus:ring-[#246afe]"
                />
              </div>

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2 text-gray-700">
                  <input type="checkbox" className="accent-[#246afe]" />
                  Remember me
                </label>
                <button
                  type="button"
                  className="text-[#246afe] hover:underline"
                  onClick={onForgotPassword}
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-[#246afe] hover:bg-[#1e55c9] text-white font-semibold py-3 rounded-lg"
              >
                Login now
              </button>
            </form>

            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="px-3 text-gray-500">Or Login with</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>

            <div className="flex justify-center space-x-6">
              <button className="border p-3 rounded-full hover:bg-gray-100">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  className="w-6"
                  alt="facebook"
                />
              </button>
              <button className="border p-3 rounded-full hover:bg-gray-100">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                  className="w-6"
                  alt="google"
                />
              </button>
            </div>

            <p className="text-center mt-6 text-gray-700 text-sm">
              Don’t have an account?{" "}
              <button
                type="button"
                className="text-[#246afe] font-medium hover:underline"
                onClick={onGoRegister}
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}