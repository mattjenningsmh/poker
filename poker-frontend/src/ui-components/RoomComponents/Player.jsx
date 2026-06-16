function Player({ cx = 60, cy = 60, radius = 40, color = "#0084ff", label }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={radius} fill={color} stroke="#000" strokeWidth="4" />
      {label && (
        <text x={cx} y={cy + radius + 18} textAnchor="middle" fontSize="14" fill="#000">
          {label}
        </text>
      )}
    </g>
  );
}

export default Player; 