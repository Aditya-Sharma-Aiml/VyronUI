import React, { useState } from "react";

export const PasswordStrengthMeter = ({
  label = "Create Password",
  placeholder = "Enter password...",
  onPasswordChange = () => {}
}) => {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);

  const rules = [
    (v) => v.length >= 8,
    (v) => /[A-Z]/.test(v),
    (v) => /[a-z]/.test(v),
    (v) => /\d/.test(v),
    (v) => /[^A-Za-z0-9]/.test(v)
  ];

  const passed = rules.filter((r) => r(value)).length;

  const getStrength = () => {
    if (passed <= 1) return { label: "Weak", color: "#ef4444" };
    if (passed === 2) return { label: "Fair", color: "#f59e0b" };
    if (passed === 3) return { label: "Good", color: "#22c55e" };
    if (passed >= 4) return { label: "Strong", color: "#6366f1" };
  };

  const strength = getStrength();

  const handleChange = (v) => {
    setValue(v);
    onPasswordChange(v);
  };

  return (
    <div
      style={{
        background: "#0f172a",
        padding: "20px",
        borderRadius: "14px",
        width: "320px",
        fontFamily: "system-ui, sans-serif",
        color: "#fff"
      }}
    >
      {/* Label */}
      <div style={{ fontSize: "14px", marginBottom: "10px" }}>
        {label}
      </div>

      {/* Input */}
      <div style={{ position: "relative" }}>
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #1e293b",
            background: "#020617",
            color: "#fff",
            outline: "none"
          }}
        />

        <button
          onClick={() => setShow(!show)}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#888"
          }}
        >
          {show ? "🙈" : "👁"}
        </button>
      </div>

      {/* Strength Bar */}
      <div
        style={{
          marginTop: "12px",
          height: "6px",
          background: "#1e293b",
          borderRadius: "10px",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            width: (passed / 5) * 100 + "%",
            height: "100%",
            background: strength.color,
            transition: "0.3s"
          }}
        />
      </div>

      {/* Strength Label */}
      <div
        style={{
          fontSize: "12px",
          marginTop: "6px",
          color: strength.color
        }}
      >
        {strength.label}
      </div>
    </div>
  );
};