import { useState } from "react";

export default function Quiz() {
  const [quizzes, setQuizzes] = useState([]);
  const [quizTitle, setQuizTitle] = useState("");
  const [quizQuestions, setQuizQuestions] = useState("");

  const handleAddQuiz = () => {
    const newQuiz = {
      title: quizTitle,
      questions: quizQuestions.split(",").map(q => q.trim()),
    };
    setQuizzes([...quizzes, newQuiz]);
    setQuizTitle("");
    setQuizQuestions("");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Quiz Management</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Quiz Title"
          value={quizTitle}
          onChange={(e) => setQuizTitle(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Questions (comma separated)"
          value={quizQuestions}
          onChange={(e) => setQuizQuestions(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={handleAddQuiz} className="bg-blue-600 text-white px-4 py-2">
          Add Quiz
        </button>
      </div>
      <ul>
        {quizzes.map((quiz, index) => (
          <li key={index} className="border-b py-2">
            <strong>{quiz.title}</strong>
            <ul>
              {quiz.questions.map((question, qIndex) => (
                <li key={qIndex}>{question}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}