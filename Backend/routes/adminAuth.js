import express from "express";
import { adminLogin, getAdminProfile } from "../controllers/adminAuthController.js";
import { adminAuthMiddleware } from "../middleware/adminAuth.js";

const router = express.Router();

router.post("/login", adminLogin);
router.get("/profile", adminAuthMiddleware, getAdminProfile);

export default router;