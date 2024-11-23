const TaskStats = ({ tasks }) => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed).length;
  
    return (
      <div
        style={{
          marginTop: "20px",
          padding: "10px 15px",
          backgroundColor: "#FFF8DC", // Light wheat
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          color: "#8B4513", // Dark brown
        }}
      >
        <p style={{ fontSize: "1rem", margin: "0" }}>
          Total Tasks: <strong>{totalTasks}</strong>
        </p>
        <p style={{ fontSize: "1rem", margin: "0" }}>
          Completed Tasks: <strong>{completedTasks}</strong>
        </p>
      </div>
    );
  };
  
  export default TaskStats;
  