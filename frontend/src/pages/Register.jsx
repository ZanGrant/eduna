// src/pages/Register.jsx
import React, { useState, useRef } from "react";
import MuseumImage from "../assets/images/museum-community.svg";

export default function Register({ onClose, onGoLogin }) {
  // step: form -> otp -> success
  const [step, setStep] = useState("form");

  // form state
  const [form, setForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    day: "",
    month: "",
    year: "",
  });

  const [errors, setErrors] = useState({});

  // OTP state
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [otpError, setOtpError] = useState("");
  const otpRefs = useRef([]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.username.trim()) newErrors.username = "Username is required.";
    if (!form.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required.";

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!form.day.trim()) newErrors.day = "Day required.";
    if (!form.month.trim()) newErrors.month = "Month required.";
    if (!form.year.trim()) newErrors.year = "Year required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStep("otp");
  };

  // ===== OTP HANDLER =====
  const handleOtpChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return; // hanya angka

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setOtpError("");

    if (value && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpContinue = () => {
    const code = otp.join("");
    if (code.length < otp.length) {
      setOtpError("Please enter the full OTP.");
      return;
    }
    setStep("success");
  };

  return (
    // === OVERLAY PENUH LAYAR ===
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/60">
      {/* klik area gelap di luar card -> close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* CARD UTAMA (1 SAJA) */}
      <div
        className="
          relative flex w-full
          max-w-[1150px]
          bg-white rounded-3xl shadow-xl
          overflow-hidden z-10
          h-[580px]
        "
      >
        {/* tombol X */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>

        {/* LEFT CONTENT (FORM / OTP / SUCCESS) */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          {/* STEP 1: CREATE ACCOUNT FORM */}
          {step === "form" && (
            <div className="max-w-sm w-full mx-auto">
              <div className="text-center mb-6">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
                  Create an Account!
                </h1>
                <p className="text-gray-600 mt-1 text-sm">
                  Already have account?{" "}
                  <button
                    type="button"
                    className="text-[#246afe] font-medium hover:underline"
                    onClick={onGoLogin}
                  >
                    Login
                  </button>
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmitForm}>
                {/* Username */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="ex. imamganteng123"
                    value={form.username}
                    onChange={(e) => handleChange("username", e.target.value)}
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

                {/* First & Last name */}
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-1">
                      First name
                    </label>
                    <input
                      type="text"
                      placeholder="ex. imam"
                      value={form.firstName}
                      onChange={(e) =>
                        handleChange("firstName", e.target.value)
                      }
                      className={`w-full border rounded-lg px-4 py-3 bg-[#f5f7ff] focus:ring-2 text-sm ${
                        errors.firstName
                          ? "border-red-500 focus:ring-red-400"
                          : "border-gray-300 focus:ring-[#246afe]"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-1">
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="ex. maulana"
                      value={form.lastName}
                      onChange={(e) =>
                        handleChange("lastName", e.target.value)
                      }
                      className={`w-full border rounded-lg px-4 py-3 bg-[#f5f7ff] focus:ring-2 text-sm ${
                        errors.lastName
                          ? "border-red-500 focus:ring-red-400"
                          : "border-gray-300 focus:ring-[#246afe]"
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="ex. imamganteng123@gmail.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={`w-full border rounded-lg px-4 py-3 bg-[#f5f7ff] focus:ring-2 text-sm ${
                      errors.email
                        ? "border-red-500 focus:ring-red-400"
                        : "border-gray-300 focus:ring-[#246afe]"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Date of birth – hanya angka */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Date of birth
                  </label>
                  <div className="flex gap-3">
                    {/* DAY */}
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="DD"
                        value={form.day}
                        inputMode="numeric"
                        onChange={(e) => {
                          const val = e.target.value;
                          if (/^\d{0,2}$/.test(val)) {
                            handleChange("day", val);
                          }
                        }}
                        className={`w-full border rounded-lg px-4 py-3 bg-[#f5f7ff] focus:ring-2 text-sm text-center ${
                          errors.day
                            ? "border-red-500 focus:ring-red-400"
                            : "border-gray-300 focus:ring-[#246afe]"
                        }`}
                      />
                      {errors.day && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.day}
                        </p>
                      )}
                    </div>

                    {/* MONTH */}
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="MM"
                        value={form.month}
                        inputMode="numeric"
                        onChange={(e) => {
                          const val = e.target.value;
                          if (/^\d{0,2}$/.test(val)) {
                            handleChange("month", val);
                          }
                        }}
                        className={`w-full border rounded-lg px-4 py-3 bg-[#f5f7ff] focus:ring-2 text-sm text-center ${
                          errors.month
                            ? "border-red-500 focus:ring-red-400"
                            : "border-gray-300 focus:ring-[#246afe]"
                        }`}
                      />
                      {errors.month && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.month}
                        </p>
                      )}
                    </div>

                    {/* YEAR */}
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="YYYY"
                        value={form.year}
                        inputMode="numeric"
                        onChange={(e) => {
                          const val = e.target.value;
                          if (/^\d{0,4}$/.test(val)) {
                            handleChange("year", val);
                          }
                        }}
                        className={`w-full border rounded-lg px-4 py-3 bg-[#f5f7ff] focus:ring-2 text-sm text-center ${
                          errors.year
                            ? "border-red-500 focus:ring-red-400"
                            : "border-gray-300 focus:ring-[#246afe]"
                        }`}
                      />
                      {errors.year && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.year}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <p className="text-[11px] text-gray-500 leading-snug">
                  By clicking Create account, I agree that I read and accepted{" "}
                  <span className="text-[#246afe]">The terms of use</span> and{" "}
                  <span className="text-[#246afe]">Privacy and Policy</span>.
                </p>

                <button
                  type="submit"
                  className="w-full bg-[#246afe] hover:bg-[#1e55c9] text-white font-semibold py-3 rounded-lg text-sm mt-2"
                >
                  Create account
                </button>
              </form>
            </div>
          )}

          {/* STEP 2: CHECK YOUR MAIL / OTP */}
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

              {otpError && (
                <p className="text-red-500 text-xs mt-3">{otpError}</p>
              )}

              <button
                type="button"
                onClick={handleOtpContinue}
                className="mt-8 w-full bg-[#246afe] hover:bg-[#1e55c9] text-white font-semibold py-3 rounded-lg text-sm"
              >
                Continue
              </button>
            </div>
          )}

          {/* STEP 3: CREATE ACCOUNT SUCCESSFUL */}
          {step === "success" && (
            <div className="max-w-sm w-full mx-auto text-center">
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-full bg-[#246afe]/10 flex items-center justify-center">
                  <span className="text-[#246afe] text-3xl">✔</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
                  Create Account
                </span>{" "}
                <span className="text-[#246afe]">Successful</span>
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                You now have an account. Please sign in.
              </p>

              <button
                type="button"
                onClick={onGoLogin}
                className="mt-8 w-full bg-[#246afe] hover:bg-[#1e55c9] text-white font-semibold py-3 rounded-lg text-sm"
              >
                Login now
              </button>
            </div>
          )}
        </div>

        {/* RIGHT IMAGE MIRING */}
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