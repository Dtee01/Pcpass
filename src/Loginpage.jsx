import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import loginpic from "/icons/PCstart.png";
import usericon from "/icons/log.png";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Initialize default users once
  useEffect(() => {
    const existingUsers = localStorage.getItem("users");

    if (!existingUsers) {
      const defaultUsers = [
        { username: "admin", password: "admin123", role: "admin" },
        { username: "department", password: "dept123", role: "department" },
        { username: "security", password: "sec123", role: "security" },
      ];

      localStorage.setItem("users", JSON.stringify(defaultUsers));
    }
  }, []);

  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));

    const foundUser = storedUsers.find(
      (user) =>
        user.username === username &&
        user.password === password
    );

    if (foundUser) {
      // Navigate based on role
      navigate(`/${foundUser.role}`);
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <img src={loginpic} alt="logo" className="login-logo" />

        <div className="login-body">
          
          <div className="login-left">
            <img src={usericon} alt="user" />
          </div>

          <div className="login-right">

            <label>USERNAME</label>
            <input 
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>PASSWORD</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>LOGIN</button>

          </div>
        </div>
      </div>
    </div>
  );
}
