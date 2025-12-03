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
    image VARCHAR(255),
    path VARCHAR(255)
  );`,

  `INSERT INTO lokasi (nama_lokasi, tipe, learning_tersedia, active, image, path) VALUES
  ('Museum Raja Ali Haji Batam', 'History', TRUE, TRUE, 'Museum.png', '/museum-raja-ali-haji'),
  ('Kampung Vietnam', 'History', FALSE, FALSE, 'VietnamCamp.png', '/vietnam-camp'),
  ('Ranoh Island Resort', 'Beach', FALSE, FALSE, 'RanohIsland.png', '/ranoh-island-resort'),
  ('Waterpark Top 100 Batu Aji', 'Waterpark', FALSE, FALSE, 'Waterpark.png', '/waterpark-top-100'),
  ('Hutan Wisata Mata Kucing', 'Nature', FALSE, FALSE, 'HutanWisataMataKucing.png', '/hutan-mata-kucing'),
  ('Taman Rusa Sekupang', 'Nature', FALSE, FALSE, 'TamanRusa.png', '/taman-rusa'),
  ('Mega Wisata Ocarina', 'Waterpark', FALSE, FALSE, 'MegaWisataOcarina.png', '/ocarina'),
  ('Batam Zoo Paradise', 'Nature', FALSE, FALSE, 'BatamZooParadise.png', '/zoo-paradise');`,

  `CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  fullname VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(20),
  birth_date DATE,
  gender ENUM('Male', 'Female'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`,

  `INSERT INTO users (username, password_hash, fullname, email, phone, birth_date, gender)
  VALUES ('testuser', '$2b$10$OzRh5szqVoFBtJysnupWFe3hYw3OXH/b.IANiiLATBWWDnU0PbGxW', 'Test User', 'test@example.com', '081234567890', '1990-01-15', 'Male');`
];
// password_hash is bcrypt hash for 'password123'

const setupDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || "127.0.0.1",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASS || "",
      multipleStatements: true
    });

    for (let q of queries) {
      await connection.query(q);
    }

    console.log("✅ Database, tabel, dan data dummy berhasil dibuat!");
    await connection.end();
    process.exit(0);
  } catch (err) {
    console.error("❌ Error setup database:", err.message);
    process.exit(1);
  }
};

setupDB();