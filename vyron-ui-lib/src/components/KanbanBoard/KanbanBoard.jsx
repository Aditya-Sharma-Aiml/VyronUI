import React, { useState, useCallback } from "react";

export const KanbanBoard = ({
  columns = [
    { id: "1", title: "Todo", color: "#6366f1", cards: [] },
    { id: "2", title: "In Progress", color: "#e11d48", cards: [] },
    { id: "3", title: "Review", color: "#0ea5e9", cards: [] },
    { id: "4", title: "Done", color: "#059669", cards: [] },
  ],
  onCardMove = () => {},
  accent = "#6366f1",
  bg = "#0f172a"
}) => {
  const [draggedCard, setDraggedCard] = useState(null);

  const handleDragStart = useCallback((card, columnId) => {
    setDraggedCard({ ...card, columnId });
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback((columnId) => {
    if (draggedCard) {
      onCardMove(draggedCard, columnId);
      setDraggedCard(null);
    }
  }, [draggedCard, onCardMove]);

  return (
    <div style={{ background: bg, padding: "20px", borderRadius: "12px", display: "flex", overflowX: "auto" }}>
      <div style={{ fontFamily: "system-ui,sans-serif", fontSize: "24px", color: "#fff", marginBottom: "20px" }}>VyronUI</div>
      {columns.map(column => (
        <div key={column.id} style={{ marginRight: "20px", background: "rgba(255,255,255,0.05)", borderRadius: "12px", width: "300px", overflow: "hidden" }}>
          <div style={{ background: column.color, padding: "10px", color: "#fff", position: "relative" }}>
            <h3 style={{ margin: "0 0 5px", fontWeight: "700" }}>{column.title}</h3>
            <span style={{ position: "absolute", top: "10px", right: "10px", background: "rgba(255,255,255,0.1)", borderRadius: "12px", padding: "4px 8px", fontSize: "12px" }}>{column.cards.length}</span>
            <button style={{ marginTop: "10px", padding: "8px", borderRadius: "10px", border: "none", background: accent, color: "#fff", cursor: "pointer", fontWeight: "700" }}>
              Add Card
            </button>
          </div>
          <div style={{ padding: "10px" }} onDragOver={handleDragOver} onDrop={() => handleDrop(column.id)}>
            {column.cards.map(card => (
              <div key={card.id} draggable onDragStart={() => handleDragStart(card, column.id)} style={{ background: "rgba(255,255,255,0.1)", marginBottom: "10px", padding: "10px", borderRadius: "8px", color: "#fff" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontWeight: "600" }}>{card.title}</div>
                  <span style={{ background: card.priority === 'High' ? '#e11d48' : card.priority === 'Medium' ? '#e0a500' : '#059669', color: '#fff', borderRadius: "8px", padding: "2px 6px", fontSize: "10px" }}>{card.priority}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
                  <img src={card.assignee.avatar} alt={card.assignee.name} style={{ width: "24px", height: "24px", borderRadius: "50%" }} />
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>{card.due}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};