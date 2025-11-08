import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // ubah sesuai konfigurasi MySQL kamu
  database: "eduna_db"
});

export default db;
