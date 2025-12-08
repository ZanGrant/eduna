// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js";
import { connectDB } from "./db.js";

dotenv.config();
const app = express();

// Middleware global
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

// Mount router
app.use("/api", router);

app.use("/uploads", express.static("uploads"));

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err);
  res.status(500).json({ error: err.message });
});

// Connect DB, lalu listen
connectDB().then(() => {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
