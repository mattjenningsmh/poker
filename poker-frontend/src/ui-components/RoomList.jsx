import "./RoomList.css";
import JoinRoomButton from "./Miscellaneous/JoinRoomButton";

function RoomList({ rooms, onRoomClicked }) {
  return (
    <div className="room-grid">
      {rooms.map((room) => (
        <div className="room-card">
          <h3>{room}</h3>
          <JoinRoomButton onBtnClick={onRoomClicked}/>
        </div>
      ))}
    </div>
  );
}

export default RoomList;
