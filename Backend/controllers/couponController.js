//controllers/couponController.js
import { query } from "../db.js";

/** GET all coupons */
export const getCoupons = async (req, res) => {
  try {
    const [rows] = await query("SELECT * FROM coupon");
    res.json(rows);
  } catch (err) {
    console.error("GET coupon error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/** INSERT coupon */
export const addCoupon = async (req, res) => {
  const { name, points_required, active } = req.body;

  if (!name || !points_required) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    await query(
      "INSERT INTO coupon (name, points_required, active) VALUES (?, ?, ?)",
      [name, points_required, active ?? true]
    );

    res.json({ message: "Coupon added" });
  } catch (err) {
    console.error("POST coupon error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/** UPDATE coupon */
export const updateCoupon = async (req, res) => {
  const { id } = req.params;
  const { name, points_required, active } = req.body;

  try {
    await query(
      "UPDATE coupon SET name = ?, points_required = ?, active = ? WHERE id = ?",
      [name, points_required, active, id]
    );

    res.json({ message: "Coupon updated" });
  } catch (err) {
    console.error("PUT coupon error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/** DELETE coupon */
export const deleteCoupon = async (req, res) => {
  const { id } = req.params;

  try {
    await query("DELETE FROM coupon WHERE id = ?", [id]);

    res.json({ message: "Coupon deleted" });
  } catch (err) {
    console.error("DELETE coupon error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
