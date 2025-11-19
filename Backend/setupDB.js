// setupDB.js
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const queries = [
  `DROP DATABASE IF EXISTS eduna_db;`,
  `CREATE DATABASE eduna_db;`,
  `USE eduna_db;`,

  `CREATE TABLE lokasi (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_lokasi VARCHAR(255) NOT NULL,
    tipe VARCHAR(100),
    learning_tersedia BOOLEAN DEFAULT FALSE,
    active BOOLEAN DEFAULT TRUE,
    image VARCHAR(255)
  );`,

  `INSERT INTO lokasi (nama_lokasi, tipe, learning_tersedia, active, image) VALUES
  ('Museum Raja Ali Haji Batam', 'History', TRUE, TRUE, 'Museum.png'),
  ('Kampung Vietnam', 'History', FALSE, FALSE, 'VietnamCamp.png'),
  ('Ranoh Island Resort', 'Beach', FALSE, FALSE, 'RanohIsland.png'),
  ('Waterpark Top 100 Batu Aji', 'Waterpark', FALSE, FALSE, 'Waterpark.png'),
  ('Hutan Wisata Mata Kucing', 'Nature', FALSE, FALSE, 'HutanWisataMataKucing.png'),
  ('Taman Rusa Sekupang', 'Nature', FALSE, FALSE, 'TamanRusa.png'),
  ('Mega Wisata Ocarina', 'Waterpark', FALSE, FALSE, 'MegaWisataOcarina.png'),
  ('Batam Zoo Paradise', 'Nature', FALSE, FALSE, 'BatamZooParadise.png');`
];

const setupDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || "127.0.0.1",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASS || "",
      multipleStatements: true // penting supaya bisa run beberapa query sekaligus
    });

    for (let q of queries) {
      await connection.query(q);
    }

    console.log("✅ Database, tabel, dan data dummy berhasil dibuat!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error setup database:", err.message);
    process.exit(1);
  }
};

setupDB();
