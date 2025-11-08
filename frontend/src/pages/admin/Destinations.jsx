import { useEffect, useState } from "react";

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", category: "", status: "available" });

  useEffect(() => {
    fetch("http://localhost:5000/api/destinations")
      .then(res => res.json())
      .then(data => setDestinations(data))
      .catch(console.error);
  }, []);

  const addDestination = () => {
    fetch("http://localhost:5000/api/destinations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem)
    })
      .then(res => res.json())
      .then(data => {
        setDestinations([...destinations, data]);
        setNewItem({ name: "", category: "", status: "available" });
      });
  };

  const deleteDestination = (id) => {
    fetch(`http://localhost:5000/api/destinations/${id}`, { method: "DELETE" })
      .then(() => setDestinations(destinations.filter(d => d.id !== id)));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Destinations</h2>

      <div className="flex gap-2 mb-4">
        <input
          placeholder="Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          placeholder="Category"
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
          className="border p-2 rounded"
        />
        <select
          value={newItem.status}
          onChange={(e) => setNewItem({ ...newItem, status: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="available">Available</option>
          <option value="coming-soon">Coming Soon</option>
        </select>
        <button onClick={addDestination} className="bg-green-500 text-white px-4 py-2 rounded">Add</button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {destinations.map(d => (
            <tr key={d.id}>
              <td className="border p-2">{d.name}</td>
              <td className="border p-2">{d.category}</td>
              <td className="border p-2">{d.status}</td>
              <td className="border p-2">
                <button onClick={() => deleteDestination(d.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
