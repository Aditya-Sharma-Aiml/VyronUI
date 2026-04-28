import React, { useState } from "react";

export const TabSwitcherAnimated = ({
  tabs,
  defaultTab,
  onChange = () => {}
}) => {
  const DEFAULT_TABS = [
    {
      id: "home",
      label: "Home",
      icon: "🏠",
      content: <div>🏠 Home Content</div>
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: "📊",
      content: <div>📊 Analytics Data</div>
    },
    {
      id: "settings",
      label: "Settings",
      icon: "⚙️",
      content: <div>⚙️ Settings Panel</div>
    }
  ];

  const data = tabs && tabs.length ? tabs : DEFAULT_TABS;

  const [active, setActive] = useState(
    defaultTab && data.find(t => t.id === defaultTab)
      ? defaultTab
      : data[0].id
  );

  const switchTab = (id) => {
    setActive(id);
    onChange(id);
  };

  const activeTab = data.find((t) => t.id === active);

  return (
    <div
      style={{
        width: "520px",
        background: "#0b1220",
        borderRadius: "16px",
        overflow: "hidden",
        fontFamily: "system-ui, sans-serif",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        border: "1px solid rgba(255,255,255,0.05)"
      }}
    >
      {/* Tabs */}
      <div
        style={{
          display: "flex",
          padding: "6px",
          background: "#020617"
        }}
      >
        {data.map((tab) => {
          const isActive = active === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => switchTab(tab.id)}
              style={{
                flex: 1,
                padding: "10px 14px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                background: isActive
                  ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                  : "transparent",
                color: isActive ? "#fff" : "#64748b",
                fontWeight: "600",
                transition: "all 0.25s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px"
              }}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div
        style={{
          padding: "24px",
          color: "#e2e8f0",
          minHeight: "120px",
          transition: "all 0.3s ease"
        }}
      >
        {activeTab?.content}
      </div>
    </div>
  );
};

/* ========= USAGE ========= */

export default function App() {
  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <TabSwitcherAnimated />
    </div>
  );
}