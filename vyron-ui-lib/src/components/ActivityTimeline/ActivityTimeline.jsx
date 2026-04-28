import React from "react";

export const ActivityTimeline = ({
  events = []
}) => {
  const data = events.length
    ? events
    : [
        { text: "User signed up", time: "2h ago" },
        { text: "Payment completed", time: "5h ago" }
      ];

  return (
    <div style={{ fontFamily: "system-ui", color: "#fff" }}>
      <div style={{ fontSize: "12px", color: "#64748b" }}>
        VyronUI Timeline
      </div>

      <div style={{ marginTop: "10px" }}>
        {data.map((e, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "12px"
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#6366f1",
                marginTop: "6px"
              }}
            />
            <div>
              <div>{e.text}</div>
              <div style={{ fontSize: "11px", color: "#64748b" }}>
                {e.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};