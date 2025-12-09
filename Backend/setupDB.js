// setupDB.js (one time run script to setup database)
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// User password hash = password123
const userHash = "$2b$10$OzRh5szqVoFBtJysnupWFe3hYw3OXH/b.IANiiLATBWWDnU0PbGxW";
// Admin password hash = admin123
const adminHash = "$2b$10$VFYoDKKO5j67pua.6jNUwOlWy.6yU1oXBiLOgNnz/PK43Xipmk.nK";

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
   VALUES ('admin', '${adminHash}', 'Administrator');`,

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
   VALUES
   ('testuser', '${userHash}', 'Test User', 'test@example.com', '081234567890', '1990-01-15', 'Male'),
   ('user2', '${userHash}', 'User Dua', 'user2@example.com', '081111111111', '1995-05-20', 'Female'),
   ('user3', '${userHash}', 'User Tiga', 'user3@example.com', '082222222222', '1998-12-01', 'Male');`,

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
  `INSERT INTO quiz (lokasi_id, title) VALUES
    (1, 'Museum Quiz'),
    (2, 'Vietnam Camp Quiz'),
    (3, 'Ranoh Island Quiz');`,

  /* QUIZ QUESTIONS */
  `CREATE TABLE quiz_questions ( 
  id INT AUTO_INCREMENT PRIMARY KEY, 
  quiz_id INT NOT NULL, 
  question TEXT NOT NULL, 
  correct_answer VARCHAR(255) NOT NULL, 
  wrong_answer_one VARCHAR(255), 
  wrong_answer_two VARCHAR(255), 
  wrong_answer_three VARCHAR(255), points INT DEFAULT 0, 
  image VARCHAR(255), 
  FOREIGN KEY (quiz_id) REFERENCES quiz(id) ON DELETE CASCADE );`,
  /* 10 QUESTIONS QUIZ */
  `INSERT INTO quiz_questions 
  (quiz_id, question, correct_answer, wrong_answer_one, wrong_answer_two, wrong_answer_three, points)
  VALUES
  (1, 'Siapakah nama pahlawan nasional yang disematkan pada nama Museum Batam Raja Ali Haji?', 'Raja Ali Haji', 'Cut Nyak Dien', 'Raja Haji Fisabilillah', 'Tuanku Tambusai', 10),
  (1, 'Karya Raja Ali Haji yang paling terkenal dan berisi nasihat moral dan etika kehidupan adalah?', 'Gurindam 12', 'Tuhfat al-Nafis', 'Syair Perahu', 'Hikayat Abdullah', 10),
  (1, 'Raja Ali Haji dikenal sebagai pelopor modernisasi bahasa apa?', 'Bahasa Melayu', 'Bahasa Arab', 'Bahasa Belanda', 'Bahasa Inggris', 10),
  (1, 'Koleksi Museum Raja Ali Haji yang menampilkan pakaian adat dan perlengkapan rumah tangga Melayu tempo dulu disebut?', 'Koleksi Etnografi', 'Koleksi Seni & Kerajinan', 'Koleksi Sejarah', 'Koleksi Arkeologi', 10),
  (1, 'Hidangan ikonik khas Kepri yang direbus dan disantap dengan sambal spesial adalah?', 'Gonggong', 'Mie Tarempa', 'Otak-Otak', 'Lempeng Sagu', 10),
  (1, 'Kerajinan Miniatur Perahu Lancang Kuning melambangkan apa?', 'Semangat pelaut & warisan maritim Kepri', 'Ketekunan para pengrajin', 'Kekayaan hasil laut Kepri', 'Kemakmuran kota Batam', 10),
  (1, 'Motif pada Kerajinan Batik Gonggong terinspirasi dari apa?', 'Cangkang gonggong', 'Bentuk perahu lancang kuning', 'Tumbuhan pesisir', 'Bunga tanjung', 10),
  (1, 'Pada tahun berapa Batam ditetapkan sebagai kota otonom?', '1999', '1971', '1973', '2002', 10),
  (1, 'Makanan pokok masyarakat Melayu zaman dahulu yang diolah menjadi lempengan yang dibakar, biasanya disajikan dengan ikan kuah pedas, disebut?', 'Lempeng Sagu', 'Otak-Otak', 'Gonggong', 'Mie Tarempa', 10),
  (1, 'Selain sebagai pusat peradaban Melayu, Kepri juga menjadi tempat yang selalu bertemunya apa?', 'Berbagai kebudayaan', 'Nelayan', 'Kapal militer', 'Wisatawan asing', 10);`,

  /* COUPON */
  `CREATE TABLE coupon (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    points_required INT NOT NULL,
    active BOOLEAN DEFAULT TRUE
  );`,
  `INSERT INTO coupon (name, points_required, active) VALUES
  ('Discount 10%', 100, TRUE),
  ('Discount 25%', 250, TRUE),
  ('Free Gift', 300, TRUE);`,

  /* POST (Postingan) */
  `CREATE TABLE postingan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    deskripsi TEXT,
    image_path1 VARCHAR(255),
    image_path2 VARCHAR(255),
    image_path3 VARCHAR(255),
    liked INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );`,

  /* 3 POSTINGAN */
  `INSERT INTO postingan (user_id, deskripsi, image_path1, image_path2, image_path3, liked)
   VALUES
   (1, 'Postingan dari user 1', 'p1a.png', 'p1b.png', 'p1c.png', 5),
   (2, 'Postingan dari user 2', 'p2a.png', 'p2b.png', 'p2c.png', 3),
   (3, 'Postingan dari user 3', 'p3a.png', 'p3b.png', 'p3c.png', 7);`,

  /* COMMENTS */
  `CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    deskripsi TEXT,
    liked INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES postingan(id) ON DELETE CASCADE
  );`,

  /* 3 COMMENTS */
  `INSERT INTO comments (user_id, post_id, deskripsi, liked)
   VALUES
   (1, 1, 'Comment dari user 1', 1),
   (2, 2, 'Comment dari user 2', 2),
   (3, 3, 'Comment dari user 3', 3);`
];

const setupDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || "127.0.0.1",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASS || "",
      multipleStatements: true
    });

    for (let q of queries.flat()) {
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
