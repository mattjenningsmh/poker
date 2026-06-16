import "./RoomList.css";
import JoinRoomButton from "./Miscellaneous/JoinRoomButton";

function RoomList({ rooms }) {
  return (
    <div className="room-grid">
      {rooms.map((room) => (
        <div className="room-card">
          <h3>{room}</h3>
          <JoinRoomButton />
        </div>
      ))}
    </div>
  );
}

export default RoomList;
