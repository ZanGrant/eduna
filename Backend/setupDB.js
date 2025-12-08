//setupDB.js (one time run script to setup database)
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// User password is "password123"
// Admin password is "admin123"
const queries = [
  `DROP DATABASE IF EXISTS eduna_db;`,
  `CREATE DATABASE eduna_db;`,
  `USE eduna_db;`,

  /* ADMIN */
  `CREATE TABLE admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    fullname VARCHAR(255),
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`,

  `INSERT INTO admin (username, password_hash, fullname)
   VALUES ('admin', '$2b$10$VFYoDKKO5j67pua.6jNUwOlWy.6yU1oXBiLOgNnz/PK43Xipmk.nK', 'Administrator');`,

  /* USERS */
  `CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    fullname VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    birth_date DATE,
    gender ENUM('Male', 'Female'),
    total_points INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`,

  `INSERT INTO users (username, password_hash, fullname, email, phone, birth_date, gender)
   VALUES ('testuser', '$2b$10$OzRh5szqVoFBtJysnupWFe3hYw3OXH/b.IANiiLATBWWDnU0PbGxW',
   'Test User', 'test@example.com', '081234567890', '1990-01-15', 'Male');`,

  /* DESTINATIONS */
  `CREATE TABLE lokasi (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_lokasi VARCHAR(255) NOT NULL,
    tipe VARCHAR(100),
    learning_tersedia BOOLEAN DEFAULT FALSE,
    active BOOLEAN DEFAULT TRUE,
    image VARCHAR(255),
    path VARCHAR(255),
    gmaps_iframe TEXT
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

  /* LEARNING PROGRESS */
  `CREATE TABLE user_learning (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    lokasi_id INT NOT NULL,
    sequence INT NOT NULL,
    path VARCHAR(255),
    is_completed BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (lokasi_id) REFERENCES lokasi(id) ON DELETE CASCADE,
    UNIQUE KEY unique_user_step (user_id, lokasi_id, sequence)
  );`,

  /* QUIZ */
  `CREATE TABLE quiz (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lokasi_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (lokasi_id) REFERENCES lokasi(id) ON DELETE CASCADE
  );`,

  /* QUIZ QUESTIONS */
  `CREATE TABLE quiz_questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quiz_id INT NOT NULL,
    question TEXT NOT NULL,
    correct_answer VARCHAR(255) NOT NULL,
    wrong_answer_one VARCHAR(255),
    wrong_answer_two VARCHAR(255),
    wrong_answer_three VARCHAR(255),
    points INT DEFAULT 0,
    image VARCHAR(255),
    FOREIGN KEY (quiz_id) REFERENCES quiz(id) ON DELETE CASCADE
  );`,

  /* COUPON */
  `CREATE TABLE coupon (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    points_required INT NOT NULL,
    active BOOLEAN DEFAULT TRUE
  );`,

  /* USER COUPON REDEMPTION */
  `CREATE TABLE user_coupon (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    coupon_id INT NOT NULL,
    redeemed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (coupon_id) REFERENCES coupon(id) ON DELETE CASCADE
  );`,

  /* POSTS */
  `CREATE TABLE post (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    lokasi_id INT NOT NULL,
    description TEXT,
    image1 VARCHAR(255),
    image2 VARCHAR(255),
    image3 VARCHAR(255),
    likes INT DEFAULT 0,
    dislikes INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (lokasi_id) REFERENCES lokasi(id) ON DELETE CASCADE
  );`
];

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