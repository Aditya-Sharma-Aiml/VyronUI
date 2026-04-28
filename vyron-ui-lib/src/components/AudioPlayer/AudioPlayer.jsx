import React, { useState } from "react";

export const AudioPlayer = ({
  title = "Neon Dreams",
  artist = "The VyronUI Collective",
  duration = "2:43",
  current = "0:39",
  accent = "#6366f1"
}) => {
  const [progress, setProgress] = useState(25);
  const [playing, setPlaying] = useState(false);

  return (
    <div
      style={{
        width: "380px",
        borderRadius: "20px",
        padding: "22px",
        background: "#0b1220",
        color: "#fff",
        fontFamily: "system-ui",
        boxShadow: "0 30px 70px rgba(0,0,0,0.6)",
        border: "1px solid rgba(255,255,255,0.05)"
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontSize: "12px", color: "#64748b" }}>
          VyronUI AudioPlayer
        </div>
        <div
          style={{
            fontSize: "11px",
            padding: "4px 10px",
            borderRadius: "20px",
            background: "#1e293b",
            color: "#a78bfa"
          }}
        >
          MEDIA
        </div>
      </div>

      {/* Song Info */}
      <div style={{ display: "flex", gap: "14px", marginTop: "18px" }}>
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "12px",
            background: "linear-gradient(135deg,#6366f1,#22c55e)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px"
          }}
        >
          🎵
        </div>

        <div>
          <div style={{ fontSize: "18px", fontWeight: "700" }}>
            {title}
          </div>
          <div style={{ fontSize: "13px", color: "#64748b" }}>
            {artist}
          </div>
        </div>
      </div>

      {/* Progress */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="range"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
          style={{
            width: "100%",
            accentColor: accent,
            cursor: "pointer"
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "12px",
            color: "#64748b"
          }}
        >
          <span>{current}</span>
          <span>{duration}</span>
        </div>
      </div>

      {/* Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
          alignItems: "center"
        }}
      >
        <button style={btnStyle}>↻</button>
        <button style={btnStyle}>⏮</button>

        <button
          onClick={() => setPlaying(!playing)}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "none",
            background: accent,
            color: "#fff",
            fontSize: "20px",
            cursor: "pointer"
          }}
        >
          {playing ? "⏸" : "▶"}
        </button>

        <button style={btnStyle}>⏭</button>
        <button style={btnStyle}>⇄</button>
      </div>
    </div>
  );
};

const btnStyle = {
  background: "none",
  border: "none",
  color: "#64748b",
  fontSize: "18px",
  cursor: "pointer"
};