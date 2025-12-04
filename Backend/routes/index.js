// routes/index.js
import express from "express";
import lokasiRoute from "./lokasi.js";
import authRoutes from "./auth.js";
import userRoutes from "./user.js";
import adminAuthRoutes from "./adminAuth.js";

const router = express.Router();

router.use("/lokasi", lokasiRoute);
router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/admin", adminAuthRoutes);

export default router;