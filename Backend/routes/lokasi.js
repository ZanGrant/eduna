// routes/lokasi.js
import express from "express";
import { getLokasi } from "../controllers/lokasiController.js";

const router = express.Router();

router.get("/", getLokasi);

export default router;
