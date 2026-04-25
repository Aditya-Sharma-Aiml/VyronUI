import React from "react";

export const Dashboard = ({ brand = "VyronUI", accent = "#6366f1", bg = "#0f172a" }) => {
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div style={{ background: bg, padding: "20px", borderRadius: "12px", fontFamily: "system-ui,sans-serif", width: "600px", boxShadow: "0 10px 40px rgba(0,0,0,0.4)" }}>
      <h1 style={{ color: "#fff", margin: "0 0 20px", fontSize: "24px", fontWeight: "800" }}>{brand}</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ background: alpha(accent, 0.1), borderRadius: "12px", padding: "20px", flex: 1, boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
          <h2 style={{ color: "#fff", margin: "0 0 10px", fontSize: "18px" }}>Card 1</h2>
          <p style={{ color: "rgba(255,255,255,0.7)" }}>Content for card 1.</p>
        </div>
        <div style={{ background: alpha(accent, 0.1), borderRadius: "12px", padding: "20px", flex: 1, boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
          <h2 style={{ color: "#fff", margin: "0 0 10px", fontSize: "18px" }}>Card 2</h2>
          <p style={{ color: "rgba(255,255,255,0.7)" }}>Content for card 2.</p>
        </div>
      </div>
      <div style={{ marginTop: "20px", display: "flex", gap: "20px" }}>
        <div style={{ background: alpha(accent, 0.1), borderRadius: "12px", padding: "20px", flex: 1, boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
          <h2 style={{ color: "#fff", margin: "0 0 10px", fontSize: "18px" }}>Card 3</h2>
          <p style={{ color: "rgba(255,255,255,0.7)" }}>Content for card 3.</p>
        </div>
        <div style={{ background: alpha(accent, 0.1), borderRadius: "12px", padding: "20px", flex: 1, boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
          <h2 style={{ color: "#fff", margin: "0 0 10px", fontSize: "18px" }}>Card 4</h2>
          <p style={{ color: "rgba(255,255,255,0.7)" }}>Content for card 4.</p>
        </div>
      </div>
    </div>
  );
};