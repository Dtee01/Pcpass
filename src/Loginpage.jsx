import "./Login.css";
import loginpic from './icons/PCstart.png';
import usericon from './icons/log.png';
export default function Login() {
  return (
    <div className="login-page">
      <div className="login-card">

        <img src= {loginpic} alt="logo" className="login-logo" />

        <div className="login-body">
          
          <div className="login-left">
            <img src={usericon} alt="user" />
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
