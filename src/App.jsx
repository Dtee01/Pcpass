import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Loginpage";
import Department from "./Department";
import AdminDashboard from "./AdminDashboard";
import Security from "./Security";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/department/*" element={<Department />} />
        <Route path="/security/*" element={<Security />} />
     </Routes>

    </BrowserRouter>
  );
}

export default App;