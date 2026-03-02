import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-card">

        <img src= "/icons/PCstart.png" alt="logo" className="login-logo" />

        <div className="login-body">
          
          <div className="login-left">
            <img src="/icons/log.png" alt="user" />
          </div>

          <div className="login-right">
            <label>USER PASSWORD</label>
            <input type="text" />

            <label>USER PASSWORD</label>
            <input type="password" />

            <button>LOGIN</button>
          </div>

        </div>
      </div>
    </div>
  );
}
