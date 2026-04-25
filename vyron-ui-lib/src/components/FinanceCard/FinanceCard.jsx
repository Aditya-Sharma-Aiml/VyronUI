import React from "react";

export const FinanceCard = ({ title = "Income", amount = 0, type = "income", currency = "$" }) => {
  const isIncome = type === "income";
  return (
    <div style={{
      background: isIncome ? "#f0fff4" : "#fff5f5",
      borderRadius: "12px",
      padding: "16px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "300px",
      color: isIncome ? "#065f46" : "#b91c1c",
      fontFamily: "system-ui, -apple-system, sans-serif"
    }}>
      <h3 style={{ fontSize: "18px", fontWeight: "700", margin: "0 0 8px" }}>{title}</h3>
      <p style={{ fontSize: "24px", fontWeight: "800", margin: "0" }}>{currency}{Math.abs(amount)}</p>
    </div>
  );
};