import React, { useState } from "react";

export const NotificationCenterPanel = ({
  notifications = [],
  position = "right"
}) => {
  const [open, setOpen] = useState(false);
  const [notifs, setNotifs] = useState(notifications);

  const unread = notifs.filter((n) => !n.read).length;

  const markRead = (id) => {
    setNotifs((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const remove = (id) => {
    setNotifs((prev) => prev.filter((n) => n.id !== id));
  };

  const side = position === "right" ? { right: 0 } : { left: 0 };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Bell Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "relative",
          background: "#0f0f1a",
          border: "1px solid #1c1c2e",
          borderRadius: "10px",
          padding: "10px 14px",
          cursor: "pointer",
          fontSize: "18px",
          color: "#fff"
        }}
      >
        🔔
        {unread > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              background: "#ef4444",
              color: "#fff",
              fontSize: "10px",
              borderRadius: "20px",
              padding: "2px 6px"
            }}
          >
            {unread}
          </span>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "50px",
            width: "320px",
            background: "#0f0f1a",
            border: "1px solid #1c1c2e",
            borderRadius: "12px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
            ...side
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "12px",
              borderBottom: "1px solid #1c1c2e",
              display: "flex",
              justifyContent: "space-between",
              color: "#fff"
            }}
          >
            <span>Notifications</span>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "#888",
                cursor: "pointer"
              }}
            >
              ✕
            </button>
          </div>

          {/* List */}
          <div style={{ maxHeight: "300px", overflowY: "auto" }}>
            {notifs.length === 0 ? (
              <div
                style={{
                  padding: "20px",
                  textAlign: "center",
                  color: "#666"
                }}
              >
                No notifications
              </div>
            ) : (
              notifs.map((n) => (
                <div
                  key={n.id}
                  style={{
                    padding: "12px",
                    borderBottom: "1px solid #1c1c2e",
                    background: n.read ? "transparent" : "#1a1a2e"
                  }}
                >
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: n.read ? "400" : "600",
                      color: "#fff"
                    }}
                  >
                    {n.title}
                  </div>

                  <div
                    style={{
                      fontSize: "12px",
                      color: "#888",
                      marginTop: "4px"
                    }}
                  >
                    {n.body}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "6px"
                    }}
                  >
                    <span style={{ fontSize: "10px", color: "#555" }}>
                      {n.time}
                    </span>

                    <div style={{ display: "flex", gap: "8px" }}>
                      {!n.read && (
                        <button
                          onClick={() => markRead(n.id)}
                          style={{
                            background: "none",
                            border: "none",
                            color: "#6366f1",
                            fontSize: "10px",
                            cursor: "pointer"
                          }}
                        >
                          Mark read
                        </button>
                      )}

                      <button
                        onClick={() => remove(n.id)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#ef4444",
                          fontSize: "10px",
                          cursor: "pointer"
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};