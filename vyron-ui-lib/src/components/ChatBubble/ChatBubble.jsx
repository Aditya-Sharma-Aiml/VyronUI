import React, { useState } from "react";

export const ChatBubble = ({
  messages = []
}) => {
  const [input, setInput] = useState("");

  const data = messages.length
    ? messages
    : [
        {
          text: "Hey! How can I help you today?",
          type: "bot",
          time: "10:30 AM"
        },
        {
          text: "I need help with the DataTable component.",
          type: "user",
          time: "10:31 AM"
        },
        {
          text: "Sure! DataTable supports sorting, filtering, and pagination.",
          type: "bot",
          time: "10:32 AM"
        }
      ];

  return (
    <div
      style={{
        width: "380px",
        height: "520px",
        background: "#0b1220",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        fontFamily: "system-ui",
        color: "#fff",
        border: "1px solid rgba(255,255,255,0.05)"
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "14px 16px",
          borderBottom: "1px solid #1e293b",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div style={{ fontSize: "12px", color: "#64748b" }}>
          VyronUI Chat
        </div>
        <div
          style={{
            fontSize: "11px",
            padding: "4px 10px",
            borderRadius: "20px",
            background: "#1e293b",
            color: "#a78bfa"
          }}
        >
          MESSAGING
        </div>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          padding: "16px",
          overflowY: "auto"
        }}
      >
        {data.map((msg, i) => {
          const isUser = msg.type === "user";

          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: isUser ? "row-reverse" : "row",
                marginBottom: "14px",
                alignItems: "flex-end",
                gap: "8px"
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: isUser ? "#f97316" : "#6366f1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px"
                }}
              >
                {isUser ? "U" : "V"}
              </div>

              {/* Bubble */}
              <div>
                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: "14px",
                    maxWidth: "240px",
                    background: isUser
                      ? "linear-gradient(135deg,#6366f1,#8b5cf6)"
                      : "#111827",
                    fontSize: "13px"
                  }}
                >
                  {msg.text}
                </div>

                <div
                  style={{
                    fontSize: "10px",
                    color: "#64748b",
                    marginTop: "4px",
                    textAlign: isUser ? "right" : "left"
                  }}
                >
                  {msg.time}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input */}
      <div
        style={{
          padding: "12px",
          borderTop: "1px solid #1e293b"
        }}
      >
        <div
          style={{
            display: "flex",
            background: "#020617",
            borderRadius: "12px",
            padding: "8px"
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              background: "transparent",
              color: "#fff"
            }}
          />

          <button
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "none",
              background: "#6366f1",
              color: "#fff",
              cursor: "pointer"
            }}
          >
            ↑
          </button>
        </div>
      </div>
    </div>
  );
};