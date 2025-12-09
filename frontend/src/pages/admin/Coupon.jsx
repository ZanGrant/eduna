import { useEffect, useState } from "react";
import axios from "axios";

export default function Coupon() {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "", points_required: "", active: true });
  const [editingId, setEditingId] = useState(null);

  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3001";

  const fetchCoupons = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/coupon`);
      if (!res.ok) throw new Error("Failed to fetch coupons");
      const data = await res.json();
      setCoupons(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);(() => {
    fetchCoupons();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await fetch(`${API_BASE}/api/coupon/${editingId}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) })(`/api/coupon/${editingId}`, form);
      } else {
        await fetch(`${API_BASE}/api/coupon`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) })("/api/coupon", form);
      }

      setForm({ name: "", points_required: "", active: true });
      setEditingId(null);
      fetchCoupons();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (c) => {
    setForm({ name: c.name, points_required: c.points_required, active: c.active });
    setEditingId(c.id);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this coupon?")) return;
    try {
      await fetch(`${API_BASE}/api/coupon/${id}`, { method: "DELETE" })(`/api/coupon/${id}`);
      fetchCoupons();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Coupon Management</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow space-y-4 max-w-lg">
        <div>
          <label className="font-semibold">Coupon Name</label>
          <input
            className="w-full border p-2 rounded mt-1"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="font-semibold">Points Required</label>
          <input
            type="number"
            className="w-full border p-2 rounded mt-1"
            value={form.points_required}
            onChange={(e) => setForm({ ...form, points_required: e.target.value })}
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.active}
            onChange={(e) => setForm({ ...form, active: e.target.checked })}
          />
          <label>Active</label>
        </div>

        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" type="submit">
          {editingId ? "Update" : "Create"} Coupon
        </button>
      </form>

      {/* TABLE */}
      <div className="bg-white p-4 rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Points</th>
              <th className="p-2 border">Active</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4" className="text-center p-4">Loading...</td>
              </tr>
            ) : coupons.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-4 text-gray-500">No coupons found</td>
              </tr>
            ) : (
              coupons.map((c) => (
                <tr key={c.id}>
                  <td className="border p-2">{c.name}</td>
                  <td className="border p-2">{c.points_required}</td>
                  <td className="border p-2">{c.active ? "Yes" : "No"}</td>
                  <td className="border p-2 space-x-2">
                    <button
                      className="px-2 py-1 bg-yellow-500 text-white rounded"
                      onClick={() => handleEdit(c)}
                    >
                      Edit
                    </button>

                    <button
                      className="px-2 py-1 bg-red-600 text-white rounded"
                      onClick={() => handleDelete(c.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
