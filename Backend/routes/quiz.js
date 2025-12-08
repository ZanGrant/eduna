//routes/quiz.js
import express from "express";
import { upload } from "../middleware/upload.js";
import multer from "multer";
import path from "path";
import {
  getAllQuizzes,
  getQuizzesByLokasi,
  createQuiz,
  updateQuiz,
  deleteQuiz,
  getQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion
} from "../controllers/quizController.js";

const router = express.Router();

/* QUIZ */
router.get("/", getAllQuizzes);
router.get("/lokasi/:lokasi_id", getQuizzesByLokasi);
router.post("/", createQuiz);
router.put("/:id", updateQuiz);
router.delete("/:id", deleteQuiz);

/* QUESTIONS */
router.get("/:quiz_id/questions", getQuestions);
router.post("/questions", createQuestion);
router.put("/questions/:id", updateQuestion);
router.delete("/questions/:id", deleteQuestion);

// image upload endpoint
router.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  res.json({
    imagePath: "/uploads/quiz/" + req.file.filename
  });
});
// image delete endpoint
router.delete("/image", async (req, res) => {
  const { path: imagePath } = req.body; // e.g., "/uploads/quiz/123456.png"
  if (!imagePath) return res.status(400).json({ error: "No image path provided" });

  const filePath = `.${imagePath}`; // convert to relative path
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Failed to delete file:", err);
      return res.status(500).json({ error: "Failed to delete file" });
    }
    res.json({ message: "File deleted" });
  });
});

export default router;