//controllers/adminController.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findAdminByUsername, findAdminById } from "../models/adminModel.js";
import dotenv from "dotenv";
dotenv.config();

export async function adminLogin(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "username and password required" });
    }

    const admin = await findAdminByUsername(username);
    if (!admin) {
      return res.status(401).json({ message: "Invalid Username or Password" });
    }

    const ok = await bcrypt.compare(password, admin.password_hash);
    if (!ok) {
      return res.status(401).json({ message: "Invalid Username or Password" });
    }

    const payload = { id: admin.id, username: admin.username, role: "admin" };
    const token = jwt.sign(payload, process.env.JWT_SECRET || "secret", {
      expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    });

    return res.json({
      token,
      admin: {
        id: admin.id,
        username: admin.username,
        fullname: admin.fullname,
        image: admin.image,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
}

export async function getAdminProfile(req, res) {
  try {
    const adminId = req.admin.id;
    const admin = await findAdminById(adminId);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    return res.json({
      id: admin.id,
      username: admin.username,
      fullname: admin.fullname,
      image: admin.image,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
}