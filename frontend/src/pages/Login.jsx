// src/pages/Login.jsx
import React, { useState } from "react";
import MuseumImage from "../assets/images/museum-community.svg";

export default function Login({
  onClose,
  onGoRegister,
  onForgotPassword,
  onLoginSuccess,
}) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "", general: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.username.trim()) newErrors.username = "Username wajib diisi.";
    if (!form.password.trim()) newErrors.password = "Password wajib diisi.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Call BE API
    const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3001";
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          username: form.username,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors({ general: data.message || "Login failed" });
        return;
      }

      // save token & user info if succeed
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      if (onLoginSuccess) onLoginSuccess();
      if (onClose) onClose();
    } catch (err) {
      console.error(err);
      setErrors({ general: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
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

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* USERNAME */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="ex. imamganteng123"
                  value={form.username}
                  onChange={(e) => handleChange("username", e.target.value)}
                  disabled={loading}
                  className={`w-full border rounded-lg px-4 py-3 bg-[#f5f7ff] focus:ring-2 text-sm ${
                    errors.username
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-[#246afe]"
                  }`}
                />
                {errors.username && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.username}
                  </p>
                )}
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="ex. qwerty432"
                  value={form.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  disabled={loading}
                  className={`w-full border rounded-lg px-4 py-3 bg-[#f5f7ff] focus:ring-2 text-sm ${
                    errors.password
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-[#246afe]"
                  }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password}
                  </p>
                )}
              </div>

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2 text-gray-700">
                  <input type="checkbox" className="accent-[#246afe]" disabled={loading} />
                  Remember me
                </label>
                <button
                  type="button"
                  className="text-[#246afe] hover:underline"
                  onClick={onForgotPassword}
                  disabled={loading}
                >
                  Forgot Password?
                </button>
              </div>
              <p className="text-sm mb-3 h-4 text-red-500">
                {errors.general || ""}
              </p>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#246afe] hover:bg-[#1e55c9] text-white font-semibold py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Logging in..." : "Login now"}
              </button>
            </form>

            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="px-3 text-gray-500">Or Login with</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>

            <div className="flex justify-center space-x-6">
              <button type="button" className="border p-3 rounded-full hover:bg-gray-100" disabled={loading}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  className="w-6"
                  alt="facebook"
                />
              </button>
              <button type="button" className="border p-3 rounded-full hover:bg-gray-100" disabled={loading}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                  className="w-6"
                  alt="google"
                />
              </button>
            </div>

            <p className="text-center mt-6 text-gray-700 text-sm">
              Don't have an account?{" "}
              <button
                type="button"
                className="text-[#246afe] font-medium hover:underline"
                onClick={onGoRegister}
                disabled={loading}
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