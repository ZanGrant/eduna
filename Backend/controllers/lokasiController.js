import db from '../db.js';

// GET semua lokasi
export const getAllLokasi = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM lokasi");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET lokasi berdasarkan nama
export const getLokasiByName = async (req, res) => {
  const { nama } = req.params;
  try {
    const [rows] = await db.query("SELECT * FROM lokasi WHERE nama_lokasi = ?", [nama]);
    if (rows.length === 0) return res.status(404).json({ error: "Lokasi tidak ditemukan" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST lokasi baru
export const createLokasi = async (req, res) => {
  const { nama_lokasi, deskripsi, learning_tersedia, active } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO lokasi (nama_lokasi, deskripsi, learning_tersedia, active) VALUES (?, ?, ?, ?)",
      [nama_lokasi, deskripsi, learning_tersedia, active]
    );
    res.json({ id: result.insertId, nama_lokasi, deskripsi, learning_tersedia, active });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT update lokasi
export const updateLokasi = async (req, res) => {
  const { id } = req.params;
  const { nama_lokasi, deskripsi, learning_tersedia, active } = req.body;
  try {
    await db.query(
      "UPDATE lokasi SET nama_lokasi=?, deskripsi=?, learning_tersedia=?, active=? WHERE id=?",
      [nama_lokasi, deskripsi, learning_tersedia, active, id]
    );
    res.json({ id, nama_lokasi, deskripsi, learning_tersedia, active });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE lokasi
export const deleteLokasi = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM lokasi WHERE id=?", [id]);
    res.json({ message: "Lokasi dihapus", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
