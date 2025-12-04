import { query } from "../db.js";

export async function findAdminByUsername(username) {
  const [rows] = await query("SELECT id, username, password_hash, fullname, image FROM admin WHERE username = ?", [username]);
  return rows[0];
}

export async function findAdminById(id) {
  const [rows] = await query("SELECT id, username, fullname, image FROM admin WHERE id = ?", [id]);
  return rows[0];
}

export async function updateAdminProfile(id, data) {
  const { fullname, image } = data;
  const [result] = await query(
    "UPDATE admin SET fullname = ?, image = ? WHERE id = ?",
    [fullname, image, id]
  );
  return result;
}