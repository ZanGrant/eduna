//src/pages/admin/AdminPanel.jsx
import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

export default function AdminPanel() {
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("adminUser");
    if (!stored) {
      navigate("/admin/login");
      return;
    }
    setAdmin(JSON.parse(stored));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    navigate("/admin/login");
  };

  if (!admin) return <p>Loading...</p>;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-50 min-h-screen">
        <div className="bg-white shadow p-4 flex justify-end items-center gap-4">
          <div className="text-right">
            <p className="font-semibold text-gray-800">{admin.fullname || "Default Admin"}</p>
            <p className="text-sm text-gray-500">{admin.username || "Administrator"}</p>
          </div>

          {admin.image ? (
            <img
              src={admin.image}
              alt="admin"
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

        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
