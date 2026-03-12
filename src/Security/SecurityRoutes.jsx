import { Routes, Route } from "react-router-dom";
import SecurityDashboard from "./SecurityDashboard";


function SecurityRoutes(){
    
    return(

        <Routes>
            <Route index element={<SecurityDashboard/>} />
        </Routes>
    )
}
export default SecurityDashboard;