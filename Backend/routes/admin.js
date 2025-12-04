// routes/admin.js
import express from "express";
import { adminLogin, getAdminProfile } from "../controllers/adminController.js";
import { getAllUsers, deleteUser } from "../controllers/userController.js";
import { adminMiddleware } from "../middleware/admin.js";

const router = express.Router();

// Auth
router.post("/login", adminLogin);

// Profile
router.get("/profile", adminMiddleware, getAdminProfile);

// User management
router.get("/users", adminMiddleware, getAllUsers);
router.delete("/users/:id", adminMiddleware, deleteUser);

// Destination management
router.get("/destinations", adminMiddleware, (req, res) => {
  return res.json({ message: "Destination endpoint under development" });
});

export default router;

