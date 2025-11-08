import { useState } from "react";
import Destinations from "./Destinations";
import Users from "./Users";
import Quiz from "./Quiz";

export default function AdminPanel() {
  const [tab, setTab] = useState("destinations");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setTab("destinations")}
          className={`px-4 py-2 rounded ${tab === "destinations" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Destinations
        </button>
        <button
          onClick={() => setTab("users")}
          className={`px-4 py-2 rounded ${tab === "users" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Users
        </button>
        <button
          onClick={() => setTab("quiz")}
          className={`px-4 py-2 rounded ${tab === "quiz" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Quiz
        </button>
      </div>

      {tab === "destinations" && <Destinations />}
      {tab === "users" && <Users />}
      {tab === "quiz" && <Quiz />}
    </div>
  );
}
