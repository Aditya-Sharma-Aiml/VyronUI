import React from "react";

export const SkeletonLoader = () => {
  return (
    <div
      style={{
        width: "300px",
        padding: "16px",
        background: "#0f172a",
        borderRadius: "10px"
      }}
    >
      <div
        style={{
          height: "20px",
          background: "#1e293b",
          marginBottom: "10px"
        }}
      />
      <div
        style={{
          height: "14px",
          background: "#1e293b",
          marginBottom: "6px"
        }}
      />
      <div
        style={{
          height: "14px",
          width: "70%",
          background: "#1e293b"
        }}
      />
    </div>
  );
};