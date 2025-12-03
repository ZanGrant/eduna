// routes/user.js
import express from "express";
import { getProfile, updateProfile } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

// GET /api/user/profile
router.get("/profile", authMiddleware, getProfile);

// PUT /api/user/profile
router.put("/profile", authMiddleware, updateProfile);

export default router;