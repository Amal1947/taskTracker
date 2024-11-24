import React, { useState, useMemo, useCallback } from "react";
import TaskList from "./TaskList";
import TaskStats from "./TaskStats";
import { FaSearch } from "react-icons/fa"; 

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [name, setname] = useState("");

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [tasks, search]);

  const toggleTaskCompletion = useCallback(
    (id) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    },
    [setTasks]
  );

  const addTask = useCallback(() => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: prevTasks.length + 1, title: name || "Default Title", completed: false },
    ]);
    setname("");
  }, [name, setTasks]);

  return (
    <div
      style={{
        padding: "20px",
        margin: "0 auto",
        maxWidth: "600px",
        fontFamily: "'Roboto', sans-serif",
        color: "#4C2A11", // Brown text
        textAlign: "center",
        backgroundColor: "#F5DEB3", // Wheat background
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    className="min-h-screen">
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          color: "#8B4513", // Dark brown
        }}
      >
        Task Tracker
      </h1>

      <div style={{ marginBottom: "20px" }}>
        
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="Add a new task"
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "10px",
            border: "1px solid #8B4513",
            borderRadius: "8px",
            fontSize: "1rem",
            backgroundColor: "#FFF8DC",
          }}
        />
        <button
          onClick={addTask}
          style={{
            width: "100%",
            padding: "15px",
            backgroundColor: "#8B4513", // Dark brown
            color: "white",
            fontSize: "1rem",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Add Task
        </button>
      </div>
      <div >
        <div style={{ position: "relative", width: "100%" }}>
          <FaSearch
            style={{
              position: "absolute",
              left: "10px",
              top: "40%",
              transform: "translateY(-50%)", // Center the icon vertically
              color: "#8B4513", // Dark brown for the icon
            }}
          />
          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "8px 10px 8px 30px", // Added padding to create space for the icon
              marginBottom: "10px",
              border: "1px solid #8B4513", // Brown border
              borderRadius: "8px",
              fontSize: "1rem",
              backgroundColor: "#FFF8DC", // Light wheat
              height: "35px", // Reduced height
            }}
          />
        </div>
        </div>
      <TaskList tasks={filteredTasks} onToggleCompletion={toggleTaskCompletion} />

      <TaskStats tasks={tasks} />

      <footer
        style={{
          marginTop: "20px",
          fontSize: "0.9rem",
          color: "#8B4513",
        }}
      >
        Built with ❤️ Aml
      </footer>
    </div>
  );
};

export default App;
