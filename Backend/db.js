import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

let db;

export const connectDB = async () => {
  if (!db) {
    try {
      db = await mysql.createConnection({
        host: process.env.DB_HOST || "127.0.0.1",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASS || "",
        database: process.env.DB_NAME || "eduna_db",
        port: process.env.DB_PORT || 3306,
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
