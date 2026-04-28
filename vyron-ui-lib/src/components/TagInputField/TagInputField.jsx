import React, { useState } from "react";

export const TagInputField = ({
  initialTags = [],
  placeholder = "Add tags...",
  maxTags = 10,
  onChange = () => {}
}) => {
  const [tags, setTags] = useState(initialTags);
  const [input, setInput] = useState("");

  const addTag = () => {
    const value = input.trim().toLowerCase();
    if (value && !tags.includes(value) && tags.length < maxTags) {
      const newTags = [...tags, value];
      setTags(newTags);
      onChange(newTags);
    }
    setInput("");
  };

  const removeTag = (tag) => {
    const newTags = tags.filter((t) => t !== tag);
    setTags(newTags);
    onChange(newTags);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    }
    if (e.key === "Backspace" && !input && tags.length) {
      removeTag(tags[tags.length - 1]);
    }
  };

  return (
    <div
      style={{
        width: "350px",
        fontFamily: "system-ui, sans-serif"
      }}
    >
      {/* Input Box */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          padding: "10px",
          border: "1px solid #1e293b",
          borderRadius: "10px",
          background: "#020617"
        }}
      >
        {tags.map((tag, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              background: "#6366f1",
              color: "#fff",
              padding: "4px 8px",
              borderRadius: "20px",
              fontSize: "12px"
            }}
          >
            {tag}
            <button
              onClick={() => removeTag(tag)}
              style={{
                marginLeft: "6px",
                background: "none",
                border: "none",
                color: "#fff",
                cursor: "pointer"
              }}
            >
              ×
            </button>
          </div>
        ))}

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder={tags.length === 0 ? placeholder : ""}
          style={{
            flex: 1,
            minWidth: "80px",
            border: "none",
            outline: "none",
            background: "transparent",
            color: "#fff"
          }}
        />
      </div>

      {/* Footer */}
      <div
        style={{
          fontSize: "12px",
          marginTop: "6px",
          color: tags.length >= maxTags ? "#ef4444" : "#666"
        }}
      >
        {tags.length}/{maxTags} tags
      </div>
    </div>
  );
};