import React from "react";

const TaskItem = React.memo(({ task, onToggleCompletion }) => {
  console.log(`Rendering TaskItem: ${task.title}`);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        marginBottom: "10px",
      }}
    >
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </span>
      <button
        onClick={() => onToggleCompletion(task.id)}
        style={{
          padding: "5px 10px",
          backgroundColor: task.completed ? "#f44336" : "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {task.completed ? "Undo" : "Complete"}
      </button>
    </div>
  );
});

export default TaskItem;
