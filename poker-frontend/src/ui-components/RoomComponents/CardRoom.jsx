import LeaveRoomButton from "../Miscellaneous/LeaveRoomButton";
import PokerTable from "./PokerTable";
import "./CardRoom.css";
import Seat from "./Seat";
import Card from "./Card";

function CardRoom({ onLeaveClicked }) {
  return (
    <div className="card-room-container">
      welcome to the card room!
      <div className="poker-table-container">
        <PokerTable />
        <div className="card-container"> <Card suit = "♠" rank = "10"/> </div>
        <div className="player bottom-1"><Seat /></div>
        <div className="player bottom-2"><Seat /></div>
        <div className="player bottom-3"><Seat /></div>
        <div className="player top-1"><Seat /></div>
        <div className="player top-2"><Seat /></div>
        <div className="player top-3"><Seat /></div>
        <div className="player left-1"><Seat /></div>
        <div className="player left-2"><Seat /></div>
        <div className="player right-1"><Seat /></div>
        <div className="player right-2"><Seat /></div>
      </div>
      <LeaveRoomButton onBtnClick={onLeaveClicked} />
    </div>
  );
}

export default CardRoom;
