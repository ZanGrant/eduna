// routes/index.js
import express from "express";
import lokasiRoute from "./lokasi.js";

const router = express.Router();

router.use("/lokasi", lokasiRoute);

export default router;
