// src/pages/admin/QuizManager.jsx
import { useEffect, useState } from "react";
import { useRef } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3001";
const authHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
  "Content-Type": "application/json"
});

function Spinner() {
  return <div className="p-4">Loading...</div>;
}

export default function QuizManager() {
  const [quizzes, setQuizzes] = useState([]);
  const [loadingQuizzes, setLoadingQuizzes] = useState(true);
  const [error, setError] = useState("");

  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const fileRef = useRef(null);
  const [preview, setPreview] = useState("");
  const [quizForm, setQuizForm] = useState({ lokasi_id: "", title: "" });
  const [questionForm, setQuestionForm] = useState({
    id: null,
    question: "",
    correct_answer: "",
    wrong_answer_one: "",
    wrong_answer_two: "",
    wrong_answer_three: "",
    points: 0,
    image: ""
  });

  const [lokasiOptions, setLokasiOptions] = useState([]);

  useEffect(() => {
    loadQuizzes();
    loadLokasi();
  }, []);

  // Load all quizzes
  const loadQuizzes = async () => {
    setLoadingQuizzes(true);
    try {
      const res = await fetch(`${API_BASE}/api/quiz`, {
        headers: authHeader()
      });
      if (!res.ok) throw new Error("Failed to fetch quizzes");
      const data = await res.json();
      setQuizzes(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingQuizzes(false);
    }
  };

  // Load lokasi list for select
  const loadLokasi = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/lokasi`, {
        headers: authHeader()
      });
      if (!res.ok) return;
      const data = await res.json();
      setLokasiOptions(data);
    } catch (err) {
      // silent
    }
  };

  // Select a quiz and load its questions
  const selectQuiz = async (q) => {
    setSelectedQuiz(q);
    setLoadingQuestions(true);
    setQuestions([]);
    setQuestionForm({
      id: null,
      question: "",
      correct_answer: "",
      wrong_answer_one: "",
      wrong_answer_two: "",
      wrong_answer_three: "",
      points: 0,
      image: ""
    });
    try {
      const res = await fetch(`${API_BASE}/api/quiz/${q.id}/questions`, {
        headers: authHeader()
      });
      if (!res.ok) throw new Error("Failed to fetch questions");
      const data = await res.json();
      setQuestions(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingQuestions(false);
    }
  };

  // Create or update quiz
  const submitQuiz = async (e) => {
    e.preventDefault();
    setError("");
    if (!quizForm.lokasi_id || !quizForm.title) {
      setError("Lokasi and title are required");
      return;
    }

    try {
      if (quizForm.id) {
        const res = await fetch(`${API_BASE}/api/quiz/${quizForm.id}`, {
          method: "PUT",
          headers: authHeader(),
          body: JSON.stringify({
            lokasi_id: quizForm.lokasi_id,
            title: quizForm.title
          })
        });
        if (!res.ok) throw new Error("Failed to update quiz");
      } else {
        const res = await fetch(`${API_BASE}/api/quiz`, {
          method: "POST",
          headers: authHeader(),
          body: JSON.stringify({
            lokasi_id: quizForm.lokasi_id,
            title: quizForm.title
          })
        });
        if (!res.ok) throw new Error("Failed to create quiz");
      }
      await loadQuizzes();
      setQuizForm({ lokasi_id: "", title: "" });
    } catch (err) {
      setError(err.message);
    }
  };

  // Upload image for question
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // preview only
    const localUrl = URL.createObjectURL(file);
    setPreview(localUrl);

    // keep the file in state, DO NOT upload yet
    setQuestionForm((prev) => ({
      ...prev,
      imageFile: file,   // temp file only
      image: ""          // server path will be filled after submit
    }));
  };

  // Edit an existing quiz (populate form)
  const editQuiz = (quiz) => {
    setQuizForm({ id: quiz.id, lokasi_id: quiz.lokasi_id, title: quiz.title });
    // also select it
    selectQuiz(quiz);
  };

  const deleteQuiz = async (id) => {
    if (!window.confirm("Delete this quiz?")) return;
    try {
      const res = await fetch(`${API_BASE}/api/quiz/${id}`, {
        method: "DELETE",
        headers: authHeader()
      });
      if (!res.ok) throw new Error("Failed to delete quiz");
      if (selectedQuiz?.id === id) {
        setSelectedQuiz(null);
        setQuestions([]);
      }
      await loadQuizzes();
    } catch (err) {
      setError(err.message);
    }
  };

  // Questions: create or update
  const submitQuestion = async (e) => {
    e.preventDefault();
    setError("");
    if (!selectedQuiz) {
      setError("Select a quiz first");
      return;
    }
    if (!questionForm.question || !questionForm.correct_answer) {
      setError("Question and correct answer are required");
      return;
    }

    try {
      // upload image only if a new file was selected
      let finalImagePath = questionForm.image || null;

      if (questionForm.imageFile) {
        const fd = new FormData();
        fd.append("image", questionForm.imageFile);

        const up = await fetch(`${API_BASE}/api/quiz/upload`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
          body: fd,
        });
        if (!up.ok) throw new Error("Image upload failed");
        const upData = await up.json();
        finalImagePath = upData.imagePath;
      }

      if (questionForm.id) {
        const res = await fetch(`${API_BASE}/api/quiz/questions/${questionForm.id}`, {
          method: "PUT",
          headers: authHeader(),
          body: JSON.stringify({
            question: questionForm.question,
            correct_answer: questionForm.correct_answer.trim(),
            wrong_answer_one: questionForm.wrong_answer_one.trim(),
            wrong_answer_two: questionForm.wrong_answer_two.trim(),
            wrong_answer_three: questionForm.wrong_answer_three.trim(),
            points: Number(questionForm.points) || 0,
            image: finalImagePath || null
          })
        });
        if (!res.ok) throw new Error("Failed to update question");
      } else {
        const res = await fetch(`${API_BASE}/api/quiz/questions`, {
          method: "POST",
          headers: authHeader(),
          body: JSON.stringify({
            quiz_id: selectedQuiz.id,
            question: questionForm.question,
            correct_answer: questionForm.correct_answer,
            wrong_answer_one: questionForm.wrong_answer_one,
            wrong_answer_two: questionForm.wrong_answer_two,
            wrong_answer_three: questionForm.wrong_answer_three,
            points: Number(questionForm.points) || 0,
            image: finalImagePath || null
          })
        });
        if (!res.ok) throw new Error("Failed to create question");
      }

      // reload questions
      await selectQuiz(selectedQuiz);
      setQuestionForm({
        id: null,
        question: "",
        correct_answer: "",
        wrong_answer_one: "",
        wrong_answer_two: "",
        wrong_answer_three: "",
        points: 0,
        image: ""
      });
      if (fileRef.current) {
        fileRef.current.value = "";
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const editQuestion = (q) => {
    setQuestionForm({
      id: q.id,
      question: q.question,
      correct_answer: q.correct_answer,
      wrong_answer_one: q.wrong_answer_one || "",
      wrong_answer_two: q.wrong_answer_two || "",
      wrong_answer_three: q.wrong_answer_three || "",
      points: q.points || 0,
      image: q.image || ""
    });
    setPreview(q.image ? `${API_BASE}${q.image}` : "");
    setPhotoFile(null);
    if (fileRef.current) {
      fileRef.current.value = "";}
    // if (!q.image) setPreview("");
  };

  const deleteQuestion = async (id) => {
    if (!window.confirm("Delete this question?")) return;
    try {
      const res = await fetch(`${API_BASE}/api/quiz/questions/${id}`, {
        method: "DELETE",
        headers: authHeader()
      });
      if (!res.ok) throw new Error("Failed to delete question");
      await selectQuiz(selectedQuiz);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-4">
        <div className="bg-white p-4 shadow rounded">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-lg">Quizzes</h3>
            <button
              onClick={() => {
                setQuizForm({ id: null, lokasi_id: "", title: "" });
                setSelectedQuiz(null);
                setQuestions([]);
              }}
              className="text-sm px-2 py-1 bg-gray-100 rounded"
            >
              New
            </button>
          </div>

          {loadingQuizzes ? (
            <Spinner />
          ) : (
            <ul className="space-y-2 max-h-[60vh] overflow-auto">
              {quizzes.length === 0 && <li className="text-sm text-gray-500">No quizzes</li>}
              {quizzes.map((q) => (
                <li
                  key={q.id}
                  className={`p-2 rounded border flex justify-between items-center cursor-pointer ${
                    selectedQuiz?.id === q.id ? "bg-gray-50 border-gray-300" : "border-transparent hover:border-gray-200"
                  }`}
                >
                  <div className="flex-1" onClick={() => selectQuiz(q)}>
                    <div className="font-medium">{q.title}</div>
                    <div className="text-xs text-gray-500">{q.nama_lokasi || `lokasi ${q.lokasi_id}`}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button onClick={() => editQuiz(q)} className="text-blue-600 text-sm">Edit</button>
                    <button onClick={() => deleteQuiz(q.id)} className="text-red-600 text-sm">Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <form onSubmit={submitQuiz} className="mt-4 space-y-2">
            <select
              value={quizForm.lokasi_id}
              onChange={(e) => setQuizForm({ ...quizForm, lokasi_id: e.target.value })}
              className="w-full border p-2 rounded"
              required
            >
              <option value="">Select Lokasi</option>
              {lokasiOptions.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.nama_lokasi}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Quiz Title"
              value={quizForm.title}
              onChange={(e) => setQuizForm({ ...quizForm, title: e.target.value })}
              className="w-full border p-2 rounded"
              required
            />

            <div className="flex gap-2">
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                {quizForm.id ? "Update Quiz" : "Create Quiz"}
              </button>
              {quizForm.id && (
                <button
                  type="button"
                  onClick={() => setQuizForm({ id: null, lokasi_id: "", title: "" })}
                  className="px-4 py-2 bg-gray-100 rounded"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="col-span-12 md:col-span-8">
        <div className="bg-white p-4 shadow rounded">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-lg">Quiz Details</h3>
            <div>{selectedQuiz ? <span className="text-sm text-gray-600">Selected: {selectedQuiz.title}</span> : <span className="text-sm text-gray-400">No quiz selected</span>}</div>
          </div>

          {error && <div className="mb-3 text-red-600">{error}</div>}

          {!selectedQuiz ? (
            <div className="text-sm text-gray-500">Select a quiz to manage its questions</div>
          ) : (
            <>
              <div className="mb-4">
                <h4 className="font-medium">Questions</h4>
                {loadingQuestions ? (
                  <Spinner />
                ) : (
                  <ul className="space-y-3">
                    {questions.length === 0 && <li className="text-sm text-gray-500">No questions yet</li>}
                    {questions.map((q) => (
                      <li key={q.id} className="border p-3 rounded">
                        <div className="flex justify-between">
                          <div>
                            <div className="font-medium">{q.question}</div>
                            <div className="text-xs text-gray-600">Points: {q.points || 0}</div>
                            <div className="text-xs text-gray-600">Correct: {q.correct_answer}</div>
                          </div>

                          <div className="flex gap-2 items-start">
                            <button onClick={() => editQuestion(q)} className="text-blue-600 text-sm">Edit</button>
                            <button onClick={() => deleteQuestion(q.id)} className="text-red-600 text-sm">Delete</button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="border-t pt-4">
                <h4 className="font-medium mb-2">{questionForm.id ? "Edit Question" : "Add Question"}</h4>
                <form onSubmit={submitQuestion} className="space-y-2">
                  <textarea
                    rows="3"
                    placeholder="Question text"
                    value={questionForm.question}
                    onChange={(e) => setQuestionForm({ ...questionForm, question: e.target.value })}
                    className="w-full border p-2 rounded"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Correct answer"
                    value={questionForm.correct_answer}
                    onChange={(e) => setQuestionForm({ ...questionForm, correct_answer: e.target.value })}
                    className="w-full border p-2 rounded"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Wrong answer one"
                    value={questionForm.wrong_answer_one}
                    onChange={(e) => setQuestionForm({ ...questionForm, wrong_answer_one: e.target.value })}
                    className="w-full border p-2 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Wrong answer two"
                    value={questionForm.wrong_answer_two}
                    onChange={(e) => setQuestionForm({ ...questionForm, wrong_answer_two: e.target.value })}
                    className="w-full border p-2 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Wrong answer three"
                    value={questionForm.wrong_answer_three}
                    onChange={(e) => setQuestionForm({ ...questionForm, wrong_answer_three: e.target.value })}
                    className="w-full border p-2 rounded"
                  />
                  <div className="mt-3 flex gap-2 items-start">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1">Image (Optional)</label>

                      {/* Only show file input kalau nggak ada preview */}
                      {!preview && (
                        <input
                          key={questionForm.id || "new"} // optional, tapi aman
                          type="file"
                          accept="image/*"
                          ref={fileRef}
                          onChange={handleImageSelect}
                          className="w-full border p-2 rounded bg-white"
                        />
                      )}

                      {preview && (
                        <div className="mt-2">
                          <img
                            src={preview}
                            alt="preview"
                            className="w-32 h-32 object-cover rounded"
                          />

                          <button
                            type="button"
                            onClick={async () => {
                              // delete server file only if editing existing question
                              if (questionForm.image) {
                                try {
                                  await fetch(`${API_BASE}/api/quiz/image`, {
                                    method: "DELETE",
                                    headers: {
                                      "Content-Type": "application/json",
                                      Authorization: `Bearer ${localStorage.getItem("adminToken")}`
                                    },
                                    body: JSON.stringify({ path: questionForm.image })
                                  });
                                } catch (err) {
                                  console.error("Failed to delete image:", err);
                                }
                              }

                              // Reset form image
                              setQuestionForm((prev) => ({
                                ...prev,
                                image: ""
                              }));

                              // Remove preview → this will make file input appear again
                              setPreview("");

                              // extra safety
                              if (fileRef.current) fileRef.current.value = "";
                            }}
                            className="text-red-600 text-sm mt-1"
                          >
                            Remove
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="w-1/3">
                      <label className="block text-sm font-medium mb-1">Points Received</label>
                      <input
                        type="number"
                        value={questionForm.points}
                        onChange={(e) =>
                          setQuestionForm({ ...questionForm, points: e.target.value })
                        }
                        className="w-full border p-2 rounded"
                        placeholder="Points"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
                      {questionForm.id ? "Update Question" : "Add Question"}
                    </button>
                    {questionForm.id && (
                      <button
                        type="button"
                        onClick={() =>
                          setQuestionForm({
                            id: null,
                            question: "",
                            correct_answer: "",
                            wrong_answer_one: "",
                            wrong_answer_two: "",
                            wrong_answer_three: "",
                            points: 0,
                            image: ""
                          })
                        }
                        className="px-4 py-2 bg-gray-100 rounded"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
