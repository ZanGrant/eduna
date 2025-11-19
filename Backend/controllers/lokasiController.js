// controllers/lokasiController.js
import { connectDB } from "../db.js";

export const getLokasi = async (req, res) => {
  try {
    const db = await connectDB(); // ambil connection
    const [rows] = await db.query("SELECT * FROM lokasi");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
