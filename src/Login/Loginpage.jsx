import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "/icons/PCstart.png"; 
import loginImg from "/icons/log.png";

import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async(e) => {

    e.preventDefault();
    try{

    const response = await fetch("http://localhost:8080/api/login",{
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({
        userId: userId,
        userPassword: password,
      }),

    });

    if(response.ok){

      const user = await response.json();
      sessionStorage.setItem("role", user.userRole);
      sessionStorage.setItem("userName", user.userName);


      if(user.departmentId){
        sessionStorage.setItem("departmentId", user.departmentId);
      }
      //redirecting users based on their roles
      const role = user.userRole.toUpperCase();
      if (role === "ADMIN") {
            navigate("/admin");
          }

          else if (role === "DEPARTMENT") {
            navigate("/department");
          }

          else if (role === "SECURITY") {
            navigate("/security");
          }
          else{
            alert("Role not Recognised")
          }
    }
          else{
            const errormsg = await response.text();
            alert (errormsg || "INVALID CREDENTIALS");
          }
    
    
    /* redirect based on role */
    
  }
    catch (error){
      console.error("Connection error", error);
      alert("Failure to connect to Server");
    }

  };

  return (

    <div className="login-page">

      <div className="login-card">

        
        <img src={logo} alt="Logo" className="login-logo" />

        <div className="login-body">

          
          <div className="login-left">
            <img src={loginImg} alt="Login" />
          </div>

          
          <form className="login-right" onSubmit={handleLogin}>

            <label>Username</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">
              Login
            </button>

          </form>

        </div>

      </div>

    </div>

  );

}

export default Login;
