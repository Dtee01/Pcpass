import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import MyAccount from "../Department/pages/MyAccount";
import Declarations from "./Adminpages/Declarations";
import Reports from "./Adminpages/Reports";
import EditUsers from "./Adminpages/EditUsers";


function AdminRoutes(){
    return(
        <Routes>
            <Route index element= {<AdminDashboard />} />
            <Route path = "home" element= {<AdminDashboard/>} />
            <Route path="account" element= {<MyAccount/>} />
            <Route path="users" element= {<EditUsers/>} />
            <Route path="declarations" element={<Declarations/>} />
            <Route path="reports" element={<Reports/>} />
        </Routes>
    )
}
export default AdminRoutes;