import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../styles/Task.css';
import { Check, Trash2 } from "lucide-react";

function Task() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState('');
  const [priority, setPriority] = useState("medium");

  // ADD TASK
  const addTask = () => {
    if (input.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: input,
          completed: false,
         priority: priority
        }
      ]);
      setInput('');
    }
  };

  // TOGGLE COMPLETE
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // FILTER LOGIC
const filteredTasks = tasks.filter(task => {
  const matchesFilter =
    filter === "all" ||
    (filter === "active" && !task.completed) ||
    (filter === "completed" && task.completed);

  const matchesSearch = task.text
    .toLowerCase()
    .includes(search.toLowerCase().trim());

  return matchesFilter && matchesSearch;
});

  const pendingCount = tasks.filter(t => !t.completed).length;

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="dashboard-main">
        {/* SEARCH */}
<div className="task-search">
  <input
    type="text"
    placeholder="Search tasks..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

<button 
  className="btn"
  onClick={() => document.querySelector('.task-field input')?.focus()}
>
  + New Task
</button>
</div>
        {/* HEADER */}
        <div className="task-head">
          <div>
            <h2>Tasks</h2>
            <p>Here's a list of your current tasks.</p>
          </div>

          <div className="nav-list">
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("active")}>Active</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
          </div>
        </div>

        {/* INPUT */}
        <div className="task-input-wrapper">
          <div className="task-field">
            <label>TASK NAME</label>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What needs to be done?"
            />
          </div>

          <div className="task-field small">
  <label>PRIORITY</label>
  <select
    value={priority}
    onChange={(e) => setPriority(e.target.value)}
    className="task-select"
  >
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </select>
</div>

          <button className="add-btn" onClick={addTask}>
            <Check size={18} />
          </button>
        </div>

        {/* TASK LIST */}
        <div className="ongoing-section">

          <div className="ongoing-header">
            <h4>ONGOING TASKS</h4>
            <span className="pending-badge">
              {pendingCount} Pending
            </span>
          </div>

         {filteredTasks.map(task => (
  <div key={task.id} className="task-row">

    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => toggleTask(task.id)}
    />

    <div className="task-content">
      <div className="task-top">
        <h3 className={task.completed ? "done" : ""}>
          {task.text}
        </h3>

        {/* ✅ THIS IS WHERE PRIORITY BELONGS */}
        <span className={`tag ${task.priority}`}>
          {task.priority.toUpperCase()}
        </span>

      </div>
    </div>

    <div className="task-actions">
      <button onClick={() => deleteTask(task.id)}>
        <Trash2 size={16} />
      </button>
    </div>

  </div>
))}
        </div>

      </main>
    </div>
  );
}

export default Task;