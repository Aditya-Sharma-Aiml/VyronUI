import React, { useState } from "react";

export const WalletBalanceCard = ({
  balance = "24,831.50",
  currency = "USD",
  username = "Aditya",
  cardNumber = "4291",
  transactions = []
}) => {
  const [show, setShow] = useState(true);

  const data = transactions.length
    ? transactions
    : [
        { label: "Salary", icon: "💼", date: "Apr 27", amount: 4500 },
        { label: "Netflix", icon: "🎬", date: "Apr 26", amount: -15 },
        { label: "Freelance", icon: "💻", date: "Apr 25", amount: 850 }
      ];

  return (
    <div
      style={{
        width: "360px",
        borderRadius: "18px",
        overflow: "hidden",
        fontFamily: "system-ui, sans-serif",
        background: "#0b1220",
        boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
        border: "1px solid rgba(255,255,255,0.05)"
      }}
    >
      {/* Top Card */}
      <div
        style={{
          padding: "22px",
          background:
            "linear-gradient(135deg, #6366f1, #8b5cf6)",
          color: "#fff"
        }}
      >
        {/* Branding */}
        <div
          style={{
            fontSize: "12px",
            opacity: 0.8,
            marginBottom: "10px"
          }}
        >
          VyronUI Wallet
        </div>

        {/* Balance */}
        <div style={{ fontSize: "28px", fontWeight: "800" }}>
          {show ? `$${balance}` : "••••••"}
          <span style={{ fontSize: "14px", marginLeft: "6px" }}>
            {currency}
          </span>
        </div>

        {/* User */}
        <div style={{ marginTop: "10px", fontSize: "13px" }}>
          {username} •••• {cardNumber}
        </div>

        {/* Toggle */}
        <button
          onClick={() => setShow(!show)}
          style={{
            marginTop: "12px",
            background: "rgba(255,255,255,0.2)",
            border: "none",
            padding: "6px 10px",
            borderRadius: "8px",
            cursor: "pointer",
            color: "#fff"
          }}
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>

      {/* Transactions */}
      <div style={{ padding: "16px", background: "#020617" }}>
        <div
          style={{
            fontSize: "13px",
            marginBottom: "10px",
            color: "#94a3b8"
          }}
        >
          Recent Activity
        </div>

        {data.map((tx, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              padding: "8px",
              borderRadius: "8px",
              background: "#0f172a"
            }}
          >
            <div>
              <div style={{ fontSize: "13px", color: "#fff" }}>
                {tx.icon} {tx.label}
              </div>
              <div style={{ fontSize: "11px", color: "#64748b" }}>
                {tx.date}
              </div>
            </div>

            <div
              style={{
                color: tx.amount > 0 ? "#22c55e" : "#ef4444",
                fontWeight: "600"
              }}
            >
              {tx.amount > 0 ? "+" : ""}${tx.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};