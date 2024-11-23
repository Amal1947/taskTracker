const TaskList = ({ tasks, onToggleCompletion }) => {
    return (
      <div>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div
              key={task.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 15px",
                marginBottom: "10px",
                borderRadius: "8px",
                backgroundColor: task.completed ? "#DFF2BF" : "#FFD2D2", // Green for completed, red for not completed
                color: task.completed ? "#4F8A10" : "#D8000C",
                border: `1px solid ${task.completed ? "#4F8A10" : "#D8000C"}`,
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  fontSize: "1rem",
                }}
              >
                {task.title}
              </span>
              <button
                onClick={() => onToggleCompletion(task.id)}
                style={{
                  padding: "5px 10px",
                  fontSize: "0.8rem",
                  backgroundColor: "#8B4513", // Dark brown button
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
            </div>
          ))
        ) : (
          <p style={{ fontSize: "1.2rem", color: "#8B4513" }}>
            No tasks to display
          </p>
        )}
      </div>
    );
  };
  
  export default TaskList;
  