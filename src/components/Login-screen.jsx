import React, { useState } from 'react';
import '../styles/LoginScreen.css';
import { useNavigate, Link } from "react-router-dom";
export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
const navigate = useNavigate();
const handleSubmit = (e) => {
  e.preventDefault();

  // fake login (no auth yet)
  if (email && password) {
    navigate("/dashboard");
  }
};

return (
  <div className="login-wrapper">
    <div className="login-card">

      <div className="logo-circle">
        ⛶
      </div>

      <h1 className="title">FocusTrack</h1>
      <p className="subtitle">Enter your Focused Sanctuary</p>

      <form onSubmit={handleSubmit}>

        <div className="input-group">
          <label>Email Address</label>
          <div className="input-box">
            <input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>✉️</span>
          </div>
        </div>

        <div className="input-group">
          <div className="password-header">
            <label>Password</label>
            <a href="#">Forgot?</a>
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>🔒</span>
          </div>
        </div>

       <button type="submit" className="signin-btn">
  Sign In
</button>

        <div className="divider">
          <span>OR ARE YOU A NEW USER?</span>
          <p>Create an account to <Link to="/signup">get started</Link>.</p>
        </div>

       

      </form>
    </div>
  </div>
);
}