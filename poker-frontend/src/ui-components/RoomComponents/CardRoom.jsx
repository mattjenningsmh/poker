import LeaveRoomButton from "../Miscellaneous/LeaveRoomButton"; 
import PokerTable from "./PokerTable"; 
import './CardRoom.css'

function CardRoom( {onLeaveClicked} ) {
  return (
    <div className="card-room-container">
      welcome to the card room!
      <PokerTable className="table" /> 
      <LeaveRoomButton onBtnClick={onLeaveClicked} />
    </div>
  );
}

export default CardRoom;
