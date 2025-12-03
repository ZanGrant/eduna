// models\userModel.js
import { query } from "../db.js";

export async function findUserByUsername(username) {
  const [rows] = await query("SELECT id, username, password_hash, fullname, email FROM users WHERE username = ?", [username]);
  return rows[0];
}

export async function findUserById(id) {
  const [rows] = await query("SELECT id, username, fullname, email, phone, birth_date, gender FROM users WHERE id = ?", [id]);
  return rows[0];
}

export async function updateUserProfile(id, data) {
  const { fullname, email, phone, birth_date, gender } = data;
  const [result] = await query(
    "UPDATE users SET fullname = ?, email = ?, phone = ?, birth_date = ?, gender = ? WHERE id = ?",
    [fullname, email, phone, birth_date, gender, id]
  );
  return result;
}