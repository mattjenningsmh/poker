import { useState, useEffect } from "react";
import { fetchRooms } from "./api/roomApi";

function App() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetchRooms(signal)
      .then((data) => {
        setRooms(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === 'AbortError') return; // request was cancelled
        setError(err.message || "Failed to load rooms");
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  if (loading) return <div>Loading rooms...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Available Rooms</h1>
      <ul>
        {rooms.map((room, idx) => (
          <li key={idx}>{room}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
