import { Routes, Route, useNavigate } from "react-router-dom";
import loginpic from '/icons/PCstart.png';
export default function SecurityDashboard(){
    return(
    <div>
        <div>
            <img src={loginpic} alt="logo-icon" />
        </div>
        <div>
            <div>
            <div>
                <label>LAPTOP SERIAL</label>
                <input type="text" />
            </div>
            <div>
                <label>REG NUMBER</label>
                <input type="text" />
            </div>
            <button>VERIFY</button>
            </div>
        </div>
    </div>
    )

}