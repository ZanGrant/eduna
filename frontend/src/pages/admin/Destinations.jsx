//src/pages/admin/Destinations.jsx
import { useState, useEffect } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3001";

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [newData, setNewData] = useState({
    nama_lokasi: "",
    tipe: "",
    image: "",
    path: ""
  });

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/lokasi`);
      if (!response.ok) throw new Error("Failed to fetch destinations");
      const data = await response.json();
      setDestinations(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE}/api/lokasi`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData)
      });
      if (!response.ok) throw new Error("Failed to add destination");

      setNewData({ nama_lokasi: "", tipe: "", image: "", path: "" });
      fetchDestinations();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_BASE}/api/lokasi/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete");

      fetchDestinations();
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Destinations</h2>

      <form onSubmit={handleAdd} className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Name"
          value={newData.nama_lokasi}
          onChange={(e) => setNewData({ ...newData, nama_lokasi: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Type"
          value={newData.tipe}
          onChange={(e) => setNewData({ ...newData, tipe: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newData.image}
          onChange={(e) => setNewData({ ...newData, image: e.target.value })}
        />
        <input
          type="text"
          placeholder="Path"
          value={newData.path}
          onChange={(e) => setNewData({ ...newData, path: e.target.value })}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {destinations.map((d) => (
          <li key={d.id} className="flex justify-between w-80">
            {d.nama_lokasi} ({d.tipe})
            <button onClick={() => handleDelete(d.id)} className="text-red-600">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
