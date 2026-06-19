import LeaveRoomButton from "../Miscellaneous/LeaveRoomButton"

function CardRoom( {onLeaveClicked} ) {
  return (
    <div>
      welcome to the card room!
      <LeaveRoomButton onBtnClick={onLeaveClicked} />
    </div>
  );
}

export default CardRoom;
