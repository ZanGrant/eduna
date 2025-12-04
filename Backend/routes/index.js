// routes/index.js
import express from "express";
import lokasiRoute from "./lokasi.js";
import authRoutes from "./auth.js";
import userRoutes from "./user.js";
import adminRoutes from "./admin.js";

const router = express.Router();

router.use("/lokasi", lokasiRoute);
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/admin", adminRoutes);

export default router;