//routes/coupon.js
import express from "express";
import {
  getCoupons,
  addCoupon,
  updateCoupon,
  deleteCoupon
} from "../controllers/couponController.js";

const router = express.Router();

router.get("/", getCoupons);
router.post("/", addCoupon);
router.put("/:id", updateCoupon);
router.delete("/:id", deleteCoupon);

export default router;
