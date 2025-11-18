-- ========================================
-- DATABASE: eduna_db
-- ========================================


CREATE DATABASE IF NOT EXISTS eduna_db;

USE eduna_db;

--Tabel lokasi
CREATE TABLE IF NOT EXISTS lokasi (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_lokasi VARCHAR(255) NOT NULL,
    tipe VARCHAR(100),
    learning_tersedia BOOLEAN DEFAULT FALSE,
    active BOOLEAN DEFAULT TRUE
);

--Insert data lokasi
INSERT INTO lokasi (nama_lokasi, tipe, learning_available, active) VALUES
('Museum Raja Ali Haji Batam', 'History', TRUE, TRUE),
('Kampung Vietnam', 'History', FALSE, FALSE),
('Ranoh Island Resort', 'Beach', FALSE, FALSE),
('Waterpark Top 100 Batu Aji', 'Waterpark', FALSE, FALSE),
('Hutan Wisata Mata Kucing', 'Nature', FALSE, FALSE),
('Taman Rusa Sekupang', 'Nature', FALSE, FALSE),
('Mega Wisata Ocarina', 'Waterpark', FALSE, FALSE),
('Batam Zoo Paradise', 'Nature', FALSE, FALSE);
