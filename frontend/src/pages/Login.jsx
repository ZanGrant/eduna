import React from "react";
import LoginIllustration from "../assets/images/museum-community.svg"; // ganti sesuai path ilustrasimu

export default function Login() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#246afe] via-[#9747ff] to-[#ffba08] items-center justify-center p-10">
        <img
          src={LoginIllustration}
          alt="Login Illustration"
          className="max-w-md w-full drop-shadow-2xl"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 px-8 md:px-16">
        <div className="max-w-md mx-auto w-full">
          {/* Logo / Title */}
          <h1 className="text-[40px] font-bold mb-6 bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
            Welcome Back 👋
          </h1>
          <p className="text-gray-600 mb-10">
            Silakan login untuk melanjutkan ke akun Eduna kamu.
          </p>

          {/* Form */}
          <form className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Masukkan email kamu"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9747ff] transition-all duration-300"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Masukkan password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9747ff] transition-all duration-300"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-[#9747ff]" />
                Remember me
              </label>
              <a
                href="#"
                className="text-[#9747ff] hover:underline hover:text-[#7a3fd1]"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-all duration-300"
            >
              Login
            </button>
          </form>

          {/* Register */}
          <p className="text-center text-gray-600 mt-8">
            Belum punya akun?{" "}
            <a
              href="#"
              className="text-[#9747ff] font-medium hover:underline hover:text-[#7a3fd1]"
            >
              Daftar Sekarang
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
