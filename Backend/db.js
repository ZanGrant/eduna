import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

let db;

export const connectDB = async () => {
  if (!db) {
    try {
      db = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        multipleStatements: true
      });

      console.log("✅ MySQL connected!");
    } catch (err) {
      console.error("❌ MySQL connection error:", err.message);
      process.exit(1); // stop server kalau koneksi gagal
    }
  }
  return db;
};

export default db;
