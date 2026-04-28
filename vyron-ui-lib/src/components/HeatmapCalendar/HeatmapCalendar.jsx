import React, { useState } from "react";

export const HeatmapCalendar = ({
  data = {},
  year = 2024
}) => {
  const [hover, setHover] = useState(null);

  const colors = [
    "#020617",
    "#1e293b",
    "#6366f1",
    "#8b5cf6",
    "#a78bfa"
  ];

  const getColor = (count) => {
    if (count === 0) return colors[0];
    if (count < 3) return colors[1];
    if (count < 6) return colors[2];
    if (count < 10) return colors[3];
    return colors[4];
  };

  // 👇 Direct calculation (no useMemo)
  const days = [];
  const start = new Date(year, 0, 1);

  for (let i = 0; i < 365; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);

    const key = d.toISOString().slice(0, 10);
    const count =
      data[key] ?? Math.floor(Math.random() * 10);

    days.push({ key, count });
  }

  return (
    <div
      style={{
        background: "#0b1220",
        padding: "20px",
        borderRadius: "16px",
        fontFamily: "system-ui",
        color: "#fff",
        width: "fit-content",
        boxShadow: "0 20px 50px rgba(0,0,0,0.6)"
      }}
    >
      {/* VyronUI Branding */}
      <div
        style={{
          fontSize: "12px",
          color: "#64748b",
          marginBottom: "10px"
        }}
      >
        VyronUI Heatmap
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(30, 12px)",
          gap: "4px"
        }}
      >
        {days.map((d, i) => (
          <div
            key={i}
            onMouseEnter={() => setHover(d)}
            onMouseLeave={() => setHover(null)}
            style={{
              width: "12px",
              height: "12px",
              background: getColor(d.count),
              borderRadius: "3px",
              cursor: "pointer"
            }}
          />
        ))}
      </div>

      {/* Tooltip */}
      {hover && (
        <div
          style={{
            marginTop: "12px",
            fontSize: "12px",
            color: "#94a3b8"
          }}
        >
          {hover.count} contributions on {hover.key}
        </div>
      )}
    </div>
  );
};