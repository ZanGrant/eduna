// middleware/upload.js
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "uploads/quiz",
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  }
});

export const upload = multer({ storage });

