import React from 'react';
import Sidebar from './Sidebar';
import '../styles/Dashboard.css';
import { Clock, CheckCircle, Flame } from "lucide-react";
const hours = 2;
const minutes = 30;
const completed = 5;
const streak = 3;
export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="dashboard-main">
        <section className="dashboard-section">

         <div className="nav">

            <div className="left">
            <h2>Welcome back, Azriel</h2>
            <p>Let's make today productive.</p>
            </div>

            <div className="right">
              <button className="btn">+ New Task</button>
            </div>
       
         </div>

            <div className="dash-stats">

               <div className="stat-card">
  <div className="card-head">
    <Clock size={16} />
    <p>Total Focus Time</p>
  </div>
  <h3>{hours} hours {minutes} mins</h3>
</div>

<div className="stat-card">
  <div className="card-head">
    <CheckCircle size={16} />
    <p>Sessions completed</p>
  </div>
  <h3>{completed} sessions</h3>
</div>

<div className="stat-card">
  <div className="card-head">
    <Flame size={16} />
    <p>Daily Streaks</p>
  </div>
  <h3>{streak} days</h3>
</div>
              
            </div>

<div className="recent-task-dashboard">

    <div className="recent-task-nav">
        <h2>Recent Tasks</h2>
        <button className="btn">View All</button>
    </div>

<div className="recent-task-list">

  <div className="recent-task-item">
    <div className="task-top">
      <span className="task-title">Design Dashboard UI</span>
      <span className="task-status completed">Completed</span>
    </div>
    <p className="task-desc">Finalize layout and spacing for dashboard cards.</p>
    <div className="task-bottom">
      <span className="priority high">High</span>
      <span className="time">2h focus</span>
    </div>
  </div>

  <div className="recent-task-item">
    <div className="task-top">
      <span className="task-title">Build Pomodoro Timer</span>
      <span className="task-status active">Active</span>
    </div>
    <p className="task-desc">Implement countdown logic and session tracking.</p>
    <div className="task-bottom">
      <span className="priority medium">Medium</span>
      <span className="time">45m session</span>
    </div>
  </div>

  <div className="recent-task-item">
    <div className="task-top">
      <span className="task-title">Connect Firebase</span>
      <span className="task-status pending">Pending</span>
    </div>
    <p className="task-desc">Set up authentication and database structure.</p>
    <div className="task-bottom">
      <span className="priority low">Low</span>
      <span className="time">Not started</span>
    </div>
  </div>

</div>

</div>
        </section>
      </main>
    </div>
  );
}