import React, { useState } from "react";

export const GlassmorphismProfileCard = ({
  name = "Aditya Sharma",
  role = "Full Stack Developer",
  avatar = "",
  bio = "Building modern web apps with clean UI & scalable architecture.",
  online = true,
  stats = [
    { label: "Projects", value: "24" },
    { label: "Followers", value: "2.1k" },
    { label: "Following", value: "180" }
  ],
  links = [
    { icon: "𝕏", href: "#" },
    { icon: "in", href: "#" },
    { icon: "◯", href: "#" }
  ],
  accentColor = "#6366f1"
}) => {
  const [followed, setFollowed] = useState(false);

  const initial = name.charAt(0).toUpperCase();

  return (
    <div
      style={{
        width: "320px",
        borderRadius: "20px",
        padding: "22px",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.1)",
        fontFamily: "system-ui, sans-serif",
        color: "#fff",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
      }}
    >
      {/* Branding */}
      <div
        style={{
          fontSize: "12px",
          color: "#64748b",
          marginBottom: "10px"
        }}
      >
        VyronUI Profile
      </div>

      {/* Avatar */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: accentColor + "33",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            fontWeight: "700",
            position: "relative"
          }}
        >
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover"
              }}
            />
          ) : (
            initial
          )}

          {/* Online dot */}
          <div
            style={{
              position: "absolute",
              bottom: "4px",
              right: "4px",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: online ? "#22c55e" : "#555",
              border: "2px solid #020617"
            }}
          />
        </div>
      </div>

      {/* Name */}
      <div style={{ textAlign: "center", marginTop: "12px" }}>
        <div style={{ fontSize: "18px", fontWeight: "700" }}>
          {name}
        </div>
        <div style={{ fontSize: "12px", color: "#94a3b8" }}>
          {role}
        </div>
      </div>

      {/* Bio */}
      <p
        style={{
          fontSize: "12px",
          color: "#94a3b8",
          textAlign: "center",
          marginTop: "10px"
        }}
      >
        {bio}
      </p>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          marginTop: "14px",
          background: "#020617",
          borderRadius: "10px"
        }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              textAlign: "center",
              padding: "10px"
            }}
          >
            <div style={{ fontWeight: "700" }}>
              {s.value}
            </div>
            <div style={{ fontSize: "11px", color: "#64748b" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: "10px", marginTop: "14px" }}>
        <button
          onClick={() => setFollowed(!followed)}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            background: followed ? "#1e293b" : accentColor,
            color: "#fff",
            fontWeight: "600"
          }}
        >
          {followed ? "Following" : "Follow"}
        </button>

        <button
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #1e293b",
            background: "transparent",
            color: "#94a3b8",
            cursor: "pointer"
          }}
        >
          Message
        </button>
      </div>

      {/* Social */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "14px"
        }}
      >
        {links.map((l, i) => (
          <a
            key={i}
            href={l.href}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              background: "#020617",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#94a3b8",
              textDecoration: "none"
            }}
          >
            {l.icon}
          </a>
        ))}
      </div>
    </div>
  );
};