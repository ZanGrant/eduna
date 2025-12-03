import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import DefaultProfile from "../assets/icons/Icon Leaderboard 1.svg";
import { Gift } from "lucide-react";

export default function Profile({ isLoggedIn, openLogin, openRegister, onLogout }) {
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);

  // DATA PROFIL
  const [profile, setProfile] = useState({
    username: "",
    name: "",
    email: "",
    phone: "",
    birth: "",
    gender: "",
  });

  // ✅ FETCH PROFILE ON MOUNT
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
        return;
      }

      const response = await fetch("http://localhost:3001/api/user/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch profile");
      }

      const data = await response.json();

      // Format birth date to YYYY-MM-DD
      let formattedBirth = "";
      if (data.birth) {
        const d = new Date(data.birth);
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        formattedBirth = `${y}-${m}-${day}`;
      }

      setProfile({
        username: data.username || "",
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        birth: formattedBirth,
        gender: data.gender || "Male",
      });
    } catch (err) {
      console.error(err);
      alert("Error loading profile");
    } finally {
      setLoading(false);
    }
  };

  const validate = () => {
    const newErrors = {};

    // EMAIL VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(profile.email)) {
      newErrors.email = "Email tidak valid";
    }

    // PHONE VALIDATION
    const phoneRegex = /^\+?\d{10,15}$/;
    if (profile.phone && !phoneRegex.test(profile.phone)) {
      newErrors.phone = "Nomor HP harus berupa angka dan minimal 10 digit";
    }

    // DATE VALIDATION
    if (profile.birth) {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(profile.birth)) {
        newErrors.birth = "Gunakan format YYYY-MM-DD";
      } else {
        const date = new Date(profile.birth);
        if (isNaN(date.getTime())) {
          newErrors.birth = "Tanggal tidak valid";
        }
      }
    }

    // GENDER VALIDATION
    if (!["Male", "Female"].includes(profile.gender)) {
      newErrors.gender = "Jenis kelamin tidak valid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  const handleSave = async () => {
    if (!validate()) return;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3001/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({
          name: profile.name,
          email: profile.email,
          phone: profile.phone,
          birth: profile.birth,
          gender: profile.gender,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        setErrors({ general: data.message || "Failed to update profile" });
        return;
      }

      setEditMode(false);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      setErrors({ general: "Error updating profile" });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    if (onLogout) onLogout();
    navigate("/");
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div className="bg-white min-h-screen">
      <Navbar
        isLoggedIn={isLoggedIn}
        openLogin={openLogin}
        openRegister={openRegister}
      />

      <div className="max-w-5xl mx-auto pt-28 px-6">

        {/* HEADER USER */}
        <div className="flex items-center gap-5 mb-10">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <img src={DefaultProfile} className="w-12 opacity-70" alt="" />
          </div>

          <div>
            <h1 className="text-3xl font-semibold">Hai, {profile.name.split(" ")[0]}</h1>
            <p className="text-gray-500 -mt-1">{profile.email}</p>
          </div>

          <div className="ml-auto">
            {editMode ? (
              <button
                onClick={handleSave}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setEditMode(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
              >
                Edit
              </button>
            )}
          </div>
        </div>

        {/* CARD DATA USER */}
        <div className="bg-white shadow-md rounded-xl border p-8 space-y-3">

          {errors.general && (
            <p className="text-red-500 text-sm mb-3">{errors.general}</p>
          )}
          
          <Field
            label="Name"
            editMode={editMode}
            value={profile.name}
            onChange={(v) => handleChange("name", v)}
            error={errors.name}
          />

          <Field
            label="Username"
            editMode={editMode}
            value={profile.username}
            onChange={() => {}}
            error={errors.username}
          />

          <Field
            label="Email"
            editMode={editMode}
            value={profile.email}
            onChange={(v) => handleChange("email", v)}
            error={errors.email}
          />

          <Field
            label="Phone Number"
            editMode={editMode}
            value={profile.phone}
            onChange={(v) => handleChange("phone", v)}
            error={errors.phone}
          />

          <Field
            label="Birth Date"
            type="date"
            editMode={editMode}
            value={profile.birth}
            onChange={(v) => handleChange("birth", v)}
            error={errors.birth}
          />

          {/* GENDER */}
          <div>
            <div className="flex justify-between items-center py-3">
              <p className="font-medium">Jenis Kelamin</p>

              {editMode ? (
                <select
                  className="border rounded-lg px-3 py-1 w-64 text-gray-700"
                  value={profile.gender}
                  onChange={(e) => handleChange("gender", e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <p className="text-gray-600">{profile.gender}</p>
              )}
            </div>

            {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
            <div className="border-b"></div>
          </div>
        </div>

        {/* PENGATURAN */}
        <h2 className="text-xl font-semibold mt-12">Pengaturan</h2>

        <div
          onClick={() => navigate("/rewards")}
          className="mt-3 border rounded-lg p-4 cursor-pointer hover:bg-gray-50 flex items-center gap-3"
        >
          <Gift className="w-5 h-5 text-black" />
          <p>Your Reward</p>
        </div>

        {/* BUTTONS */}
        <div className="w-full flex flex-col items-center mt-8">
          <button
            onClick={handleLogout}
            className="bg-blue-600 hover:bg-blue-700 text-white w-60 py-3 rounded-lg font-medium mb-3"
          >
            Log out
          </button>

          <button className="bg-red-600 hover:bg-red-700 text-white w-60 py-3 rounded-lg font-medium">
            Hapus Akun
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// COMPONENT FIELD REUSABLE
function Field({ label, editMode, value, onChange, type = "text", error }) {
  return (
    <div>
      <div className="flex justify-between items-center py-3">
        <p className="font-medium">{label}</p>

        {editMode ? (
          <input
            type={type}
            className="border rounded-lg px-3 py-1 w-64 text-gray-700"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        ) : (
          <p className="text-gray-600">{value}</p>
        )}
      </div>

      {error && <p className="text-red-500 text-sm -mt-2 mb-2">{error}</p>}
      <div className="border-b"></div>
    </div>
  );
}