import React, { useState } from "react";

export const DateFilter = ({ startDate = "2023-01-01", endDate = "2023-12-31", accent = "#6366f1", bg = "#0f172a", onFilter = () => {} }) => {
  const [start, setStart] = useState(startDate);
  const [end, setEnd] = useState(endDate);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };

  const handleFilter = () => {
    onFilter({ start, end });
  };

  return (
    <div style={{ background: bg, borderRadius: "20px", padding: "20px", width: "400px", color: "#fff", fontFamily: "system-ui,sans-serif", boxShadow: "0 10px 40px rgba(0,0,0,0.5)" }}>
      <h3 style={{ margin: "0 0 16px", fontSize: "18px", fontWeight: "700" }}>Filter by Date</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "4px" }}>Start Date:</label>
          <input type="date" value={start} onChange={(e) => setStart(e.target.value)} style={{ padding: "10px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.08)", background: "transparent", color: "#fff", width: "100%" }} />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "4px" }}>End Date:</label>
          <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} style={{ padding: "10px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.08)", background: "transparent", color: "#fff", width: "100%" }} />
        </div>
        <button onClick={handleFilter} style={{ padding: "12px", borderRadius: "10px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")", color: "#fff", fontSize: "14px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }}>Apply Filter</button>
      </div>
    </div>
  );
};