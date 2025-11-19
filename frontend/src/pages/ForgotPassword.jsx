// src/pages/ForgotPassword.jsx
import React, { useState, useRef } from "react";
import MuseumImage from "../assets/images/museum-community.svg";

export default function ForgotPassword({ onClose, onBackToLogin }) {
  const [step, setStep] = useState("email"); // "email" | "otp" | "reset" | "success"
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpRefs = useRef([]);

  const handleOtpChange = (index, value) => {
    // hanya angka & 1 karakter
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // auto-focus ke box berikutnya
    if (value && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    // backspace dan box kosong -> mundur
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  return (
    // === OVERLAY PENUH LAYAR (SAMA KAYA LOGIN) ===
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/60">
      {/* klik area gelap di luar card -> close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* CARD UTAMA, UKURAN SAMA DENGAN LOGIN */}
      <div className="relative flex w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden z-10 h-[520px]">
        {/* tombol X */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          {/* STEP 1 – EMAIL */}
          {step === "email" && (
            <div className="max-w-sm w-full mx-auto text-center">
              <h2 className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
                  Forgot
                </span>{" "}
                <span className="text-[#246afe]">Password</span>
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Don’t worry, it happens to the best of us.
              </p>

              <div className="mt-8 text-left">
                <label className="block text-gray-700 font-medium mb-2">
                  Email aktif
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ex. imamganteng321@gmail.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-[#f5f7ff] focus:ring-2 focus:ring-[#246afe] text-sm"
                />
              </div>

              <button
                type="button"
                onClick={() => setStep("otp")}
                className="mt-8 w-full bg-[#246afe] hover:bg-[#1e55c9] text-white font-semibold py-3 rounded-lg text-sm"
              >
                Continue
              </button>
            </div>
          )}

          {/* STEP 2 – OTP */}
          {step === "otp" && (
            <div className="max-w-sm w-full mx-auto text-center">
              <h2 className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
                  Check your mail
                </span>
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                We just sent an OTP to your registered email address.
              </p>

              <div className="flex justify-center gap-3 mt-8">
                {otp.map((v, i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength={1}
                    value={v}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(i, e)}
                    ref={(el) => (otpRefs.current[i] = el)}
                    className="w-10 h-10 border border-gray-300 rounded-lg text-center bg-[#f5f7ff] focus:ring-2 focus:ring-[#246afe] text-lg"
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setStep("reset")}
                className="mt-8 w-full bg-[#246afe] hover:bg-[#1e55c9] text-white font-semibold py-3 rounded-lg text-sm"
              >
                Continue
              </button>
            </div>
          )}

          {/* STEP 3 – RESET PASSWORD */}
          {step === "reset" && (
            <div className="max-w-sm w-full mx-auto text-center">
              <h2 className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
                  Reset your
                </span>{" "}
                <span className="text-[#246afe]">Password</span>
              </h2>

              <div className="mt-8 text-left">
                <label className="block text-gray-700 font-medium mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="enter your new password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-[#f5f7ff] focus:ring-2 focus:ring-[#246afe] text-sm"
                />
              </div>

              <button
                type="button"
                onClick={() => setStep("success")}
                className="mt-8 w-full bg-[#246afe] hover:bg-[#1e55c9] text-white font-semibold py-3 rounded-lg text-sm"
              >
                Verify OTP
              </button>
            </div>
          )}

          {/* STEP 4 – SUCCESS */}
          {step === "success" && (
            <div className="max-w-sm w-full mx-auto text-center">
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-full bg-[#246afe]/10 flex items-center justify-center">
                  <span className="text-[#246afe] text-3xl">✔</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
                  Reset Successful
                </span>
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                You can now log in to your account.
              </p>

              <button
                type="button"
                onClick={onBackToLogin}
                className="mt-8 w-full bg-[#246afe] hover:bg-[#1e55c9] text-white font-semibold py-3 rounded-lg text-sm"
              >
                Login now
              </button>
            </div>
          )}
        </div>

        {/* RIGHT IMAGE MIRING – sama seperti login */}
        <div className="hidden md:block w-1/2">
          <img
            src={MuseumImage}
            alt="Museum"
            className="w-full h-full object-cover [clip-path:polygon(15%_0%,100%_0%,100%_100%,0%_100%)]"
          />
        </div>
      </div>
    </div>
  );
}