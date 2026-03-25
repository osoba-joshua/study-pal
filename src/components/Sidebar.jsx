import "../styles/Sidebar.css";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: "▦" },
    { name: "Tasks", path: "/tasks", icon: "✔" },
    { name: "Focus Timer", path: "/timer", icon: "⏱" },
    { name: "History", path: "/history", icon: "📚" },
  ];

  return (
    <aside className="sidebar">

      {/* Header */}
      <div className="sidebar-header">
        <div className="logo">⚡</div>
        <div>
          <h3>FocusTrack</h3>
          <p>Stay Productive</p>
        </div>
      </div>

      {/* Menu */}
      <div className="menu">
        {menu.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`menu-item ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            <span className="icon">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Bottom */}
      <div className="bottom">
        <Link to="/settings" className="menu-item">
          <span className="icon">⚙</span>
          <span>Settings</span>
        </Link>
        <Link to="/logout" className="menu-item">
          <span className="icon">🚪</span>
          <span className="log-out">Logout</span>
        </Link>
      </div>

    </aside>
  );
}