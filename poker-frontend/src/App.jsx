import { useState, useEffect, Button } from "react";
import { fetchRooms } from "./api/roomApi";
import JoinRoomButton from "./ui-components/Miscellaneous/JoinRoomButton";
import './App.css';
import RoomList from "./ui-components/RoomList";

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
        if (err.name === "AbortError") return; // request was cancelled
        setError(err.message || "Failed to load rooms");
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  if (loading) return <div>Loading rooms...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <RoomList rooms={rooms}/>
    </>
  );
}

export default App;
