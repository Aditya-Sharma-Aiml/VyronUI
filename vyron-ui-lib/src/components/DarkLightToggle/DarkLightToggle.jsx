import React, { useState } from "react";

export const DarkLightToggle = ({ accent = "#e11d48", bg = "#0f172a" }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      style={{
        background: bg,
        border: "none",
        borderRadius: "10px",
        width: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "background 0.3s, transform 0.3s",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        transform: isDarkMode ? "scale(1.1)" : "scale(1)"
      }}
    >
      {isDarkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" style={{ color: accent }}>
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
          <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m17.657-7.657l-1.414 1.414M4.343 19.657l-1.414-1.414m16.97-1.414l1.414 1.414M4.343 4.343l1.414 1.414" stroke="currentColor" strokeWidth="2" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" style={{ color: accent }}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
          <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m17.657-7.657l-1.414 1.414M4.343 19.657l-1.414-1.414m16.97-1.414l1.414 1.414M4.343 4.343l1.414 1.414" stroke="currentColor" strokeWidth="2" />
        </svg>
      )}
    </button>
  );
};