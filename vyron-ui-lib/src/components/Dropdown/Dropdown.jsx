import React, { useState } from "react";

export const Dropdown = ({ brandName = "VyronUI", entries = ["Entry 1", "Entry 2", "Entry 3", "Entry 4", "Entry 5"], accent = "#6366f1", bg = "#0f172a" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div style={{ position: "relative", width: "300px", fontFamily: "system-ui,sans-serif" }}>
      <button onClick={toggleDropdown} style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.08)", background: bg, color: "#fff", fontSize: "15px", fontWeight: "700", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>{brandName}</span>
        <span style={{ fontSize: "12px" }}>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div style={{ position: "absolute", top: "100%", left: "0", right: "0", background: bg, borderRadius: "12px", boxShadow: "0 10px 40px rgba(0,0,0,0.4)", marginTop: "8px", zIndex: 1000 }}>
          {entries.map((entry, index) => (
            <div key={index} style={{ padding: "10px 12px", borderBottom: index !== entries.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", cursor: "pointer", color: "#fff", fontSize: "14px", fontWeight: "500" }} onClick={() => { setIsOpen(false); }}>
              {entry}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};