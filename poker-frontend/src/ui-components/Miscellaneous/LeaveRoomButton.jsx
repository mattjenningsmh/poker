import './LeaveRoomButton.css';

function LeaveRoomButton( {onBtnClick} ) {
  return (
    <button className="leave-room-button" onClick={onBtnClick}>
        Leave Room 
    </button>
  );
}

export default LeaveRoomButton;
