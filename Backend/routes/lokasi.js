// routes/lokasi.js
import express from 'express';
import {
  getAllLokasi,
  getLokasiByName,
  createLokasi,
  updateLokasi,
  deleteLokasi
} from '../controllers/lokasiController.js';

const router = express.Router();

router.get('/', getAllLokasi); // GET /api/lokasi
router.get('/:nama', getLokasiByName); // GET /api/lokasi/:nama
router.post('/', createLokasi); // POST /api/lokasi
router.put('/:id', updateLokasi); // PUT /api/lokasi/:id
router.delete('/:id', deleteLokasi); // DELETE /api/lokasi/:id

export default router;
