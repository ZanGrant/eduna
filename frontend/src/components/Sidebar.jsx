import { Link, useLocation } from "react-router-dom";
import { MapPin, Users, HelpCircle } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100";

  return (
    <div className="w-64 bg-white shadow-lg min-h-screen p-4">
      {/* Logo */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-blue-600">Eduna</h2>
        <p className="text-gray-500 text-sm">Admin Panel</p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        <Link to="/admin/destinations" className={`block px-4 py-2 rounded-lg transition ${isActive("/admin/destinations")}`}>
          <span className="inline-flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            Destinations
          </span>
        </Link>
        <Link to="/admin/users" className={`block px-4 py-2 rounded-lg transition ${isActive("/admin/users")}`}>
          <span className="inline-flex items-center">
            <Users className="w-4 h-4 mr-2" />
            Users
          </span>
        </Link>
        <Link to="/admin/quiz" className={`block px-4 py-2 rounded-lg transition ${isActive("/admin/quiz")}`}>
          <span className="inline-flex items-center">
            <HelpCircle className="w-4 h-4 mr-2" />
            Quiz
          </span>
        </Link>
      </nav>
    </div>
  );
}