function Card({ suit = "♠", rank = "A" }) {
  // ♠♥♣♦
  return (
    <svg viewBox="0 0 60 100" width="60%" height="100%">
      <rect x="0" y="0" width="60" height="100" rx={6} fill="white" className="card" />
      <g className="cardRank">
        <g transform="rotate(180 45 80)">
          <text x="45" y="80" fontSize={28} dominantBaseline="middle" textAnchor="middle">{rank}</text>
        </g>
        <text className="invert" x="15" y="20" fontSize={28} dominantBaseline="middle" textAnchor="middle">{rank}</text>
      </g>
      <text x="30" y="50" fontSize={32} dominantBaseline="middle" textAnchor="middle">{suit}</text>
    </svg>
  );
}

export default Card; 
