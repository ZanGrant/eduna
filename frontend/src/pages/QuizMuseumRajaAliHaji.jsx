import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import museumImage from "../assets/images/museum-community.svg";
import logo from "../assets/images/eduna-logo.png";
import profileIcon from "../assets/icons/Icon Leaderboard 1.svg";
import heroImage from "../assets/images/RajaAliHaji.svg";

// Avatar & Badge
import IrfanIcon from "../assets/icons/Icon Leaderboard 1.svg";
import MarvelIcon from "../assets/icons/Icon Leaderboard 2.svg";
import ImamIcon from "../assets/icons/Icon Leaderboard 3.svg";

import BadgeGold from "../assets/icons/Badge 1.svg";
import BadgeSilver from "../assets/icons/Badge 2.svg";
import BadgeBronze from "../assets/icons/Badge 3.svg";

export default function QuizMuseumRajaAliHaji() {
  const navigate = useNavigate();

  const [start, setStart] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);

  // ✅ ADDED: answer feedback
  const [answerStatus, setAnswerStatus] = useState(null);
  // null | "correct" | "incorrect"

  const [timer, setTimer] = useState(15);
  const timerRef = useRef(null);

  const [finishedAt, setFinishedAt] = useState(null);
  const startAtRef = useRef(null);

  /* ==================== QUESTIONS ==================== */
  const questions = [
    {
      img: heroImage,
      question:
        "Siapakah nama pahlawan nasional yang disematkan pada nama Museum Batam Raja Ali Haji?",
      options: [
        "Raja Ali Haji",
        "Cut Nyak Dien",
        "Raja Haji Fisabilillah",
        "Tuanku Tambusai",
      ],
      answer: 0,
    },
    {
      img: null,
      question:
        "Karya Raja Ali Haji yang paling terkenal dan berisi nasihat moral dan etika kehidupan adalah?",
      options: [
        "Tuhfat al-Nafis",
        "Syair Perahu",
        "Gurindam 12",
        "Hikayat Abdullah",
      ],
      answer: 2,
    },
    {
      img: null,
      question: "Raja Ali Haji dikenal sebagai pelopor modernisasi bahasa apa?",
      options: [
        "Bahasa Arab",
        "Bahasa Belanda",
        "Bahasa Melayu",
        "Bahasa Inggris",
      ],
      answer: 2,
    },
    {
      img: null,
      question:
        "Koleksi Museum Raja Ali Haji yang menampilkan pakaian adat dan perlengkapan rumah tangga Melayu tempo dulu disebut?",
      options: [
        "Koleksi Seni & Kerajinan",
        "Koleksi Etnografi",
        "Koleksi Sejarah",
        "Koleksi Arkeologi",
      ],
      answer: 1,
    },
    {
      img: null,
      question:
        "Hidangan ikonik khas Kepri yang direbus dan disantap dengan sambal spesial adalah?",
      options: ["Mie Tarempa", "Otak-Otak", "Lempeng Sagu", "Gonggong"],
      answer: 3,
    },
    {
      img: null,
      question: "Kerajinan Miniatur Perahu Lancang Kuning melambangkan apa?",
      options: [
        "Semangat pelaut & warisan maritim Kepri",
        "Ketekunan para pengrajin",
        "Kekayaan hasil laut Kepri",
        "Kemakmuran kota Batam",
      ],
      answer: 0,
    },
    {
      img: null,
      question:
        "Motif pada Kerajinan Batik Gonggong terinspirasi dari apa?",
      options: [
        "Bentuk perahu lancang kuning",
        "Tumbuhan pesisir",
        "Cangkang gonggong",
        "Bunga tanjung",
      ],
      answer: 2,
    },
    {
      img: null,
      question: "Pada tahun berapa Batam ditetapkan sebagai kota otonom?",
      options: ["1971", "1999", "1973", "2002"],
      answer: 1,
    },
    {
      img: null,
      question:
        "Makanan pokok masyarakat Melayu zaman dahulu yang diolah menjadi lempengan yang dibakar, biasanya disajikan dengan ikan kuah pedas, disebut?",
      options: ["Lempeng Sagu", "Otak-Otak", "Gonggong", "Mie Tarempa"],
      answer: 0,
    },
    {
      img: null,
      question:
        "Selain sebagai pusat peradaban Melayu, Kepri juga menjadi tempat yang selalu bertemunya apa?",
      options: [
        "Nelayan",
        "Kapal militer",
        "Berbagai kebudayaan",
        "Wisatawan asing",
      ],
      answer: 2,
    },
  ];

  /* ==================== LEADERBOARD ==================== */
  const leaderboard = [
    { id: 1, name: "Irfan", score: 1000, avatar: IrfanIcon, badge: BadgeGold },
    { id: 2, name: "Marvel", score: 900, avatar: MarvelIcon, badge: BadgeSilver },
    { id: 3, name: "Imam", score: 800, avatar: ImamIcon, badge: BadgeBronze },
  ];

  /* ==================== COUNTDOWN ==================== */
  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      setTimeout(() => setShowQuiz(true), 300);
      return;
    }

    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown]);

  useEffect(() => {
    if (showQuiz === true) {
      startAtRef.current = Date.now();
      setTimer(15);
    }
  }, [showQuiz]);

  useEffect(() => {
    if (!showQuiz || showQuiz === "finish") return;

    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          handleSelect(-1);
          return 15;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [current, showQuiz]);

  /* SOUND */
  const correctSound =
    typeof window !== "undefined"
      ? new Audio("/assets/sounds/correct.mp3")
      : null;
  const wrongSound =
    typeof window !== "undefined"
      ? new Audio("/assets/sounds/wrong.mp3")
      : null;

  const tryPlay = (audio) => audio?.play?.().catch(() => {});

  const circleColor = { 3: "#E63946", 2: "#FFB800", 1: "#06C270" }[countdown];

  /* ==================== HANDLE SELECT ==================== */
  const handleSelect = (i) => {
    if (locked) return;

    clearInterval(timerRef.current);
    setLocked(true);
    setSelected(i);

    const correct = questions[current].answer;
    const isCorrect = i === correct;

    // ✅ ADDED
    if (i !== -1) {
      setAnswerStatus(isCorrect ? "correct" : "incorrect");
    }

    if (i !== -1 && isCorrect) {
      setScore((s) => s + 1);
      tryPlay(correctSound);
    } else {
      tryPlay(wrongSound);
    }

    setTimeout(() => {
      const next = current + 1;
      if (next < questions.length) {
        setCurrent(next);
        setSelected(null);
        setLocked(false);
        setTimer(15);
        setAnswerStatus(null); // ✅ reset
      } else {
        setShowQuiz("finish");
        setFinishedAt(Date.now());
      }
    }, 1200);
  };

  const progressPercent = Math.round(
    ((current + 1) / questions.length) * 100
  );

  /* ===================== UI ===================== */
  return (
    <div className="min-h-screen bg-white flex flex-col relative">

      {/* TOP BAR */}
      <div className="w-full relative flex items-center px-10 py-6">
        <img src={logo} className="w-32" />
        <h1 className="absolute left-1/2 -translate-x-1/2 text-[28px] font-[600]">
          QUIZ MUSEUM RAJA ALI HAJI
        </h1>
        <img src={profileIcon} className="w-10 h-10 ml-auto" />
      </div>

      {/* START SCREEN */}
      {!start && countdown === null && !showQuiz && (
        <div className="flex flex-col items-center mt-6 px-4">
          <img src={museumImage} className="w-full max-w-[800px] rounded-2xl shadow" />
          <h2 className="text-[32px] font-[550] text-[#246afe] mt-10 tracking-[1px]">
            READY TO START?
          </h2>
          <div className="flex gap-6 mt-6">
            <button
              onClick={() => navigate("/challenge")}
              className="px-10 py-3 border border-[#246afe] rounded-xl text-[#246afe]"
            >
              Back
            </button>
            <button
              onClick={() => {
                setStart(true);
                setCountdown(3);
              }}
              className="px-12 py-3 bg-[#246afe] text-white rounded-xl"
            >
              Start
            </button>
          </div>
        </div>
      )}

      {/* COUNTDOWN SCREEN */}
      {start && countdown !== null && !showQuiz && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-[40px] font-[600] mb-8">Starting in</h2>
          <div
            className="w-52 h-52 rounded-full flex items-center justify-center text-[48px] font-bold"
            style={{ border: `18px solid ${circleColor}` }}
          >
            {countdown}
          </div>
        </div>
      )}

      {/* QUIZ PAGE */}
      {showQuiz === true && (
        <div className="px-10 mt-6 mb-10 flex flex-col items-center">

          {/* PROGRESS BAR */}
          <div className="w-full flex justify-center mb-6">
            <div className="w-[70%] h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#246afe] transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="max-w-[1000px] w-full relative">
            <div className="absolute right-0 -top-6 bg-white px-3 py-1 shadow rounded-lg font-semibold">
              ⏱ {timer}s
            </div>

            {/* QUESTION */}
            <div className="flex flex-col lg:flex-row gap-8 justify-center">
              {questions[current].img && (
                <img
                  src={questions[current].img}
                  className="w-[260px] h-[260px] object-cover rounded-xl shadow"
                />
              )}
              <div className="bg-white shadow p-6 rounded-2xl max-w-[640px]">
                <p className="font-medium mb-3">
                  {current + 1}/{questions.length}
                </p>
                <h2 className="text-[20px] leading-relaxed font-semibold">
                  {questions[current].question}
                </h2>
              </div>
            </div>

            {/* ANSWERS GRID */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {questions[current].options.map((opt, i) => {
                const correct = questions[current].answer;
                let bg = ["#e63946", "#e6a823", "#2a9d47", "#246afe"][i];

                if (selected !== null) {
                  if (i === correct) bg = "#06C270";
                  else if (i === selected) bg = "#E63946";
                  else bg = "#9CA3AF";
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    disabled={locked}
                    style={{ backgroundColor: bg }}
                    className="h-[120px] rounded-xl text-white font-semibold text-lg shadow-md"
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {/* ✅ FEEDBACK UI */}
            {answerStatus && (
              <div
                className={`mt-6 w-full py-4 rounded-xl text-center font-semibold text-white text-lg
                  ${
                    answerStatus === "correct"
                      ? "bg-[#06C270]"
                      : "bg-[#E63946]"
                  }
                `}
              >
                {answerStatus === "correct" ? "Correct!" : "Incorrect"}
              </div>
            )}
          </div>
        </div>
      )}

      {/* FINISH SCREEN */}
      {showQuiz === "finish" && (
       <div className="px-10 py-16 flex flex-col items-center">


         <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-10">


           {/* RESULT CARD */}
           <div>
             <h2 className="text-[40px] font-[550]">
               <span className="inline-block bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
                 Result
               </span>
             </h2>
             <p className="text-gray-600 mb-6">Hasil kuis kamu</p>


             <div className="bg-white rounded-3xl shadow-md p-10 flex items-center gap-10">


               {/* FIXED CIRCLE */}
               <div className="relative w-32 h-32">
                 <svg className="w-full h-full -rotate-90">
                   <circle
                     cx="50%"
                     cy="50%"
                     r="45"
                     stroke="#E63946"
                     strokeWidth="12"
                     fill="none"
                   />
                   <circle
                     cx="50%"
                     cy="50%"
                     r="45"
                     stroke="#06C270"
                     strokeWidth="12"
                     fill="none"
                     strokeDasharray={2 * Math.PI * 45}
                     strokeDashoffset={
                       (2 * Math.PI * 45) -
                       (2 * Math.PI * 45 * (score / questions.length))
                     }
                     className="transition-all duration-700"
                   />
                 </svg>


                 <div className="absolute inset-0 flex items-center justify-center text-[22px] font-bold">
                   {Math.round((score / questions.length) * 100)}%
                 </div>
               </div>


               {/* TEXT RESULT */}
               <div className="flex flex-col justify-center gap-2">
                 <p className="text-[20px] font-semibold">Correct</p>
                 <p className="text-[20px]">{score}/{questions.length}</p>


                 <p className="mt-3 text-[20px] font-semibold">Points</p>
                 <p className="text-[20px] text-[#246afe] font-bold">
                   + {score * 100}
                 </p>
               </div>
             </div>
           </div>


           {/* LEADERBOARD */}
           <div>
             <h2 className="text-[40px] font-[550]">
               <span className="inline-block bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent">
                 Leaderboard
               </span>
             </h2>
             <p className="text-gray-600 mb-6">User dengan skor kuis tertinggi</p>


             <div className="bg-white rounded-2xl shadow-md p-6 space-y-5">
               {leaderboard.map((user) => (
                 <div
                   key={user.id}
                   className="flex items-center justify-between border-b last:border-none pb-4 last:pb-0"
                 >
                   <div className="flex items-center space-x-3">
                     <span className="text-white bg-gradient-to-r from-[#246afe] to-[#9747ff] w-7 h-7 flex items-center justify-center rounded-full font-semibold">
                       {user.id}
                     </span>
                     <img src={user.avatar} className="w-10 h-10 rounded-full" />
                     <p className="font-medium text-gray-800">{user.name}</p>
                   </div>


                   <div className="relative flex items-center justify-end w-[120px]">
                     <img
                       src={user.badge}
                       className="absolute right-0 w-24 h-24 object-contain"
                     />
                     <span className="text-[#ff8508] font-semibold">{user.score}</span>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </div>


         {/* BUTTONS */}
         <div className="flex gap-6 mt-14">
           <button
             onClick={() => navigate("/challenge")}
             className="px-12 py-3 bg-[#246afe] text-white rounded-xl text-lg font-semibold hover:bg-[#1d56c9]"
           >
             Back To Challenge
           </button>
         </div>
       </div>
      )}
    </div>
  );
}
