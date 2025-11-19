import React from "react";
import { Link } from "react-router-dom";
import MuseumImage from "../assets/images/museum-community.svg";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-6">
      <div className="flex w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* LEFT FORM */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">

            {/* Title */}
            <div className="text-center mb-6">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
                Create an Account!
              </h1>
              <p className="text-gray-600 mt-1 text-sm">
                Already have account?{" "}
                <Link to="/login" className="text-[#246afe] font-medium hover:underline">
                  Login
                </Link>
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-5">
              {/* Username */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Username</label>
                <input
                  type="text"
                  placeholder="ex. imamganteng123"
                  className="w-full bg-[#f5f7ff] border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#246afe]"
                />
              </div>

              {/* First & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">First name</label>
                  <input
                    type="text"
                    placeholder="ex. imam"
                    className="w-full bg-[#f5f7ff] border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#246afe]"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Last name</label>
                  <input
                    type="text"
                    placeholder="ex. maulana"
                    className="w-full bg-[#f5f7ff] border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#246afe]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email address</label>
                <input
                  type="email"
                  placeholder="ex. imamganteng123@gmail.com"
                  className="w-full bg-[#f5f7ff] border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#246afe]"
                />
              </div>

              {/* DOB */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Date of birth</label>
                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="01"
                    className="bg-[#f5f7ff] border border-gray-300 rounded-lg px-4 py-3 text-center focus:ring-2 focus:ring-[#246afe]"
                  />
                  <input
                    type="text"
                    placeholder="02"
                    className="bg-[#f5f7ff] border border-gray-300 rounded-lg px-4 py-3 text-center focus:ring-2 focus:ring-[#246afe]"
                  />
                  <input
                    type="text"
                    placeholder="2004"
                    className="bg-[#f5f7ff] border border-gray-300 rounded-lg px-4 py-3 text-center focus:ring-2 focus:ring-[#246afe]"
                  />
                </div>
              </div>

              {/* Terms */}
              <p className="text-xs text-gray-600 leading-relaxed">
                By clicking Create account, I agree that I read and accepted{" "}
                <a className="text-[#246afe] hover:underline">The terms of use</a> and{" "}
                <a className="text-[#246afe] hover:underline">Privacy and Policy</a>
              </p>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#246afe] text-white py-3 rounded-lg font-semibold hover:bg-[#1f59d1]"
              >
                Create account
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT IMAGE (MIRING) */}
        <div className="hidden md:block w-1/2">
          <img
            src={MuseumImage}
            alt="Museum"
            className="w-full h-full object-cover 
              [clip-path:polygon(15%_0%,100%_0%,100%_100%,0%_100%)]"
          />
        </div>
      </div>
    </div>
  );
}