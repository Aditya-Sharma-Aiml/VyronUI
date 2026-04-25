import React, { useState } from "react";

export const LoginPage = ({
  title = "Welcome Back!",
  buttonText = "Login",
  accent = "#0ea5e9",
  bg = "#0f172a"
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div style={{
      background: bg,
      borderRadius: "20px",
      padding: "40px",
      width: "400px",
      boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transition: "transform 0.3s ease",
      transform: "translateY(0px)"
    }}>
      <h2 style={{ color: "#fff", marginBottom: "20px", fontFamily: "system-ui,sans-serif" }}>{title}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid rgba(255,255,255,0.1)",
          marginBottom: "15px",
          background: "rgba(255,255,255,0.05)",
          color: "#fff",
          fontFamily: "system-ui,sans-serif"
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid rgba(255,255,255,0.1)",
          marginBottom: "20px",
          background: "rgba(255,255,255,0.05)",
          color: "#fff",
          fontFamily: "system-ui,sans-serif"
        }}
      />
      <button
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")",
          color: "#fff",
          fontSize: "15px",
          fontWeight: "700",
          cursor: "pointer",
          fontFamily: "system-ui,sans-serif"
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};