import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/Login-screen";
import Dashboard from "./components/Dashboard";
import Task from "./components/Task"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Task />} />
      </Routes>
    </Router>
  );
}

export default App;