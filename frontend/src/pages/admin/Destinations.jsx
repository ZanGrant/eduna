import { useState, useEffect } from "react";

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newDestination, setNewDestination] = useState({ name: "", type: "", image: "", path: "" });

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const response = await fetch("/api/destinations");
      if (!response.ok) throw new Error("Failed to fetch destinations");
      const data = await response.json();
      setDestinations(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddDestination = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/destinations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newDestination),
      });
      if (!response.ok) throw new Error("Failed to add destination");
      fetchDestinations(); // Refresh the list
      setNewDestination({ name: "", type: "", image: "", path: "" }); // Reset form
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteDestination = async (id) => {
    try {
      const response = await fetch(`/api/destinations/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete destination");
      fetchDestinations(); // Refresh the list
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Destinations</h2>
      <form onSubmit={handleAddDestination} className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={newDestination.name}
          onChange={(e) => setNewDestination({ ...newDestination, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Type"
          value={newDestination.type}
          onChange={(e) => setNewDestination({ ...newDestination, type: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newDestination.image}
          onChange={(e) => setNewDestination({ ...newDestination, image: e.target.value })}
        />
        <input
          type="text"
          placeholder="Path"
          value={newDestination.path}
          onChange={(e) => setNewDestination({ ...newDestination, path: e.target.value })}
        />
        <button type="submit">Add Destination</button>
      </form>
      <ul>
        {destinations.map((destination) => (
          <li key={destination.id}>
            {destination.name} - {destination.type}
            <button onClick={() => handleDeleteDestination(destination.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}