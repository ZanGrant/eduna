import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Destinations from "./Destinations";
import Users from "./Users";
import Quiz from "./Quiz";
import Sidebar from "../../components/Sidebar";

export default function AdminPanel() {
  const [tab, setTab] = useState("destinations");
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const adminData = localStorage.getItem("adminUser");
    if (!adminData) {
      navigate("/admin-login");
      return;
    }
    setAdmin(JSON.parse(adminData));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    navigate("/admin-login");
  };

  if (!admin) return <p>Loading...</p>;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-50 min-h-screen">
        {/* Top Right Profile */}
        <div className="bg-white shadow p-4 flex justify-end items-center gap-4">
          <div className="text-right">
            <p className="font-semibold text-gray-800">{admin.fullname || admin.username}</p>
            <p className="text-sm text-gray-500">Administrator</p>
          </div>
          {admin.image ? (
            <img
              src={admin.image}
              alt={admin.username}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
              {admin.username.charAt(0).toUpperCase()}
            </div>
          )}
          <button
            onClick={handleLogout}
            className="ml-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setTab("destinations")}
              className={`px-4 py-2 rounded transition ${tab === "destinations" ? "bg-blue-600 text-white" : "bg-white text-gray-700 border border-gray-300"}`}
            >
              Destinations
            </button>
            <button
              onClick={() => setTab("users")}
              className={`px-4 py-2 rounded transition ${tab === "users" ? "bg-blue-600 text-white" : "bg-white text-gray-700 border border-gray-300"}`}
            >
              Users
            </button>
            <button
              onClick={() => setTab("quiz")}
              className={`px-4 py-2 rounded transition ${tab === "quiz" ? "bg-blue-600 text-white" : "bg-white text-gray-700 border border-gray-300"}`}
            >
              Quiz
            </button>
          </div>

          {tab === "destinations" && <Destinations />}
          {tab === "users" && <Users />}
          {tab === "quiz" && <Quiz />}
        </div>
      </div>
    </div>
  );
}