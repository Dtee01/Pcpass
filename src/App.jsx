import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login/Loginpage";
import DepartmentRoutes from "./Department/DeptRoutes";
import AdminRoutes from "./Admin Layout/AdminRoutes";
import SecurityDashboard from "./Security/SecurityDashboard";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/department/*" element={<DepartmentRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes/>} />
        <Route path="/security/*" element={<SecurityDashboard/>} />
        <Route path="*" element={<Navigate to="/login" />} />
     </Routes>

    </BrowserRouter>
  );
}

export default App;