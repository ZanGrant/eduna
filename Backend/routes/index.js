// routes/index.js
import express from 'express';
import lokasiRouter from './lokasi.js';

const router = express.Router();

router.use('/lokasi', lokasiRouter); // /api/lokasi

export default router;
