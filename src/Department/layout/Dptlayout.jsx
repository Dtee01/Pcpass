import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import "./Dptlayout.css";

function DepartmentLayout(){

return(

<div className="layout">

<Sidebar/>

<div className="content">

<Outlet/>

</div>

</div>

)

}

export default DepartmentLayout
