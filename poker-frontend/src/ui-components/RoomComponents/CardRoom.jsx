import LeaveRoomButton from "../Miscellaneous/LeaveRoomButton"; 
import PokerTable from "./PokerTable"; 
import './CardRoom.css'
import Player from "./Player"; 

function CardRoom( {onLeaveClicked} ) {
  return (
    <div className="card-room-container">
      welcome to the card room!
      <PokerTable className="table" /> 
      <Player />
      <LeaveRoomButton onBtnClick={onLeaveClicked} />
    </div>
  );
}

export default CardRoom;
