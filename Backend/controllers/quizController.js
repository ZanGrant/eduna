//controllers/quizController.js
import { query } from "../db.js";

/* GET all quizzes */
export const getAllQuizzes = async (req, res) => {
  try {
    const [rows] = await query(`
      SELECT q.*, l.nama_lokasi
      FROM quiz q
      JOIN lokasi l ON q.lokasi_id = l.id
      ORDER BY q.id DESC
    `);
    res.json(rows);
  } catch (err) {
    console.error("Error getAllQuizzes:", err);
    res.status(500).json({ error: err.message });
  }
};

/* GET quizzes for one lokasi */
export const getQuizzesByLokasi = async (req, res) => {
  const { lokasi_id } = req.params;
  try {
    const [rows] = await query(
      `SELECT * FROM quiz WHERE lokasi_id = ?`,
      [lokasi_id]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* CREATE quiz */
export const createQuiz = async (req, res) => {
  const { lokasi_id, title } = req.body;

  if (!lokasi_id || !title)
    return res.status(400).json({ error: "Lokasi and title are required" });

  try {
    await query(`INSERT INTO quiz (lokasi_id, title) VALUES (?, ?)`, [
      lokasi_id,
      title
    ]);

    res.json({ message: "Quiz created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* UPDATE quiz */
export const updateQuiz = async (req, res) => {
  const { id } = req.params;
  const { lokasi_id, title } = req.body;

  try {
    await query(
      `UPDATE quiz SET lokasi_id = ?, title = ? WHERE id = ?`,
      [lokasi_id, title, id]
    );
    res.json({ message: "Quiz updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* DELETE quiz */
export const deleteQuiz = async (req, res) => {
  const { id } = req.params;

  try {
    await query(`DELETE FROM quiz WHERE id = ?`, [id]);
    res.json({ message: "Quiz deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* GET questions for a quiz */
export const getQuestions = async (req, res) => {
  const { quiz_id } = req.params;

  try {
    const [rows] = await query(
      `SELECT * FROM quiz_questions WHERE quiz_id = ? ORDER BY id DESC`,
      [quiz_id]
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* CREATE question */
export const createQuestion = async (req, res) => {
  const {
    quiz_id,
    question,
    correct_answer,
    wrong_answer_one,
    wrong_answer_two,
    wrong_answer_three,
    points,
    image
  } = req.body;

  if (!quiz_id || !question || !correct_answer)
    return res.status(400).json({ error: "Missing required fields" });

  try {
    await query(
      `INSERT INTO quiz_questions 
        (quiz_id, question, correct_answer, wrong_answer_one, wrong_answer_two, wrong_answer_three, points, image)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        quiz_id,
        question,
        correct_answer,
        wrong_answer_one,
        wrong_answer_two,
        wrong_answer_three,
        points || 0,
        image || null
      ]
    );

    res.json({ message: "Question added" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* UPDATE question */
export const updateQuestion = async (req, res) => {
  const { id } = req.params;
  const {
    question,
    correct_answer,
    wrong_answer_one,
    wrong_answer_two,
    wrong_answer_three,
    points,
    image
  } = req.body;

  try {
    await query(
      `UPDATE quiz_questions SET 
        question = ?, 
        correct_answer = ?, 
        wrong_answer_one = ?, 
        wrong_answer_two = ?, 
        wrong_answer_three = ?, 
        points = ?, 
        image = ?
       WHERE id = ?`,
      [
        question,
        correct_answer,
        wrong_answer_one,
        wrong_answer_two,
        wrong_answer_three,
        points,
        image,
        id
      ]
    );
    res.json({ message: "Question updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* DELETE question */
export const deleteQuestion = async (req, res) => {
  const { id } = req.params;

  try {
    await query(`DELETE FROM quiz_questions WHERE id = ?`, [id]);
    res.json({ message: "Question deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
