import { findUserById, updateUserProfile } from "../models/userModel.js";

// GET /api/user/profile
export async function getProfile(req, res) {
  try {
    const userId = req.user.id;
    const user = await findUserById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({
      id: user.id,
      username: user.username,
      name: user.fullname,
      email: user.email,
      phone: user.phone || "",
      birth: user.birth_date || "",
      gender: user.gender || "",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
}

// PUT /api/user/profile
export async function updateProfile(req, res) {
  try {
    const userId = req.user.id;
    const { name, email, phone, birth, gender } = req.body;

    // validation
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Email tidak valid" });
    }

    const phoneRegex = /^\+?\d{10,15}$/;
    if (phone && !phoneRegex.test(phone)) {
      return res.status(400).json({ message: "Nomor HP harus berupa angka dan minimal 10 digit" });
    }

    if (gender && !["Male", "Female"].includes(gender)) {
      return res.status(400).json({ message: "Gender must be Male or Female" });
    }

    // update user
    await updateUserProfile(userId, {
      fullname: name,
      email,
      phone,
      birth_date: birth,
      gender,
    });

    return res.json({ message: "Profile updated successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
}