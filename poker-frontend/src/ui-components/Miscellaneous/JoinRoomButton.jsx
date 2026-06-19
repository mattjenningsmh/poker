import './JoinRoomButton.css';

function JoinRoomButton({onBtnClick}) {
  return (
    <button className="join-room-button" onClick={onBtnClick}>
      Join Room
    </button>
  );
}

export default JoinRoomButton;
