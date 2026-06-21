import LeaveRoomButton from "../Miscellaneous/LeaveRoomButton";
import PokerTable from "./PokerTable";
import "./CardRoom.css";
import Player from "./Player";

function CardRoom({ onLeaveClicked }) {
  return (
    <div className="card-room-container">
      welcome to the card room!
      <div className="poker-table-container">
        <PokerTable />
        <div className="player bottom-1"><Player /></div>
        <div className="player bottom-2"><Player /></div>
        <div className="player top-1"><Player /></div>
        <div className="player top-2"><Player /></div>
        <div className="player left-1"><Player /></div>
        <div className="player left-2"><Player /></div>
        <div className="player right-1"><Player /></div>
        <div className="player right-2"><Player /></div>
      </div>
      <LeaveRoomButton onBtnClick={onLeaveClicked} />
    </div>
  );
}

export default CardRoom;
