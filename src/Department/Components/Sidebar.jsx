import { Link } from "react-router-dom";
import logo from "/icons/PCstart.png";
import "./Sidebar.css";

function Sidebar(){

return(

<div className="sidebar">

<div className="sidebar-logo">

<img src={logo} alt="logo"/>

<h3>MYPCPASS</h3>

</div>

<nav className="sidebar-menu">

<Link to="/department" className="menu-item">Dashboard</Link>

<Link to="/department/declare" className="menu-item">
Laptop Declaration
</Link>

<Link to="/department/students" className="menu-item">
View Students
</Link>

<Link to="/department/laptops" className="menu-item">
View Laptops
</Link>

<Link to="/department/declarations" className="menu-item">
View Declarations
</Link>

<Link to="/department/account" className="menu-item">
My Account
</Link>

</nav>

<button className="logout-btn">

Logout

</button>

</div>

)

}

export default Sidebar
