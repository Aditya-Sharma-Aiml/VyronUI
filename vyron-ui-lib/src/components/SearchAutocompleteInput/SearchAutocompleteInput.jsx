import React, { useState } from "react";

export const SearchAutocompleteInput = ({
  suggestions = [],
  placeholder = "Search...",
  onSearch = () => {}
}) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const data = suggestions.length
    ? suggestions
    : [
        { label: "Dashboard", icon: "📊" },
        { label: "Users", icon: "👥" },
        { label: "Billing", icon: "💳" },
        { label: "Settings", icon: "⚙️" }
      ];

  const filtered = data.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (value) => {
    setQuery(value);
    setOpen(false);
    onSearch(value);
  };

  return (
    <div
      style={{
        width: "420px",
        position: "relative",
        fontFamily: "system-ui, sans-serif"
      }}
    >
      {/* Branding */}
      <div
        style={{
          fontSize: "12px",
          color: "#64748b",
          marginBottom: "6px"
        }}
      >
        VyronUI Search
      </div>

      {/* Input */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#0f172a",
          border: "1px solid #1e293b",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <span style={{ marginRight: "8px", color: "#64748b" }}>
          🔍
        </span>

        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "#fff"
          }}
        />

        {query && (
          <button
            onClick={() => setQuery("")}
            style={{
              background: "none",
              border: "none",
              color: "#64748b",
              cursor: "pointer"
            }}
          >
            ×
          </button>
        )}
      </div>

      {/* Dropdown */}
      {open && filtered.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            width: "100%",
            background: "#020617",
            border: "1px solid #1e293b",
            borderRadius: "10px",
            marginTop: "6px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
            zIndex: 10
          }}
        >
          {filtered.map((item, i) => (
            <div
              key={i}
              onClick={() => handleSelect(item.label)}
              style={{
                padding: "10px",
                cursor: "pointer",
                display: "flex",
                gap: "10px",
                color: "#e2e8f0"
              }}
            >
              <span>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};