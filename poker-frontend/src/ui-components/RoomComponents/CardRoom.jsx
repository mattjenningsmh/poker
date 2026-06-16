import Player from "../Player";
import DefaultCardBack from "./Room/CardBack";

function CardRoom({ players = [] }) {
  return (
    <div>
      <ul>
        {players.map((player, number) => (
          <li key={number}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default CardRoom;
