// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js";
import { connectDB } from "./db.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect database sebelum listen
connectDB().then(() => {
  app.use("/api", router);

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
