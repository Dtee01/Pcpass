import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Loginpage";
import Department from "./Department";
import AdminDashboard from "./AdminDashboard";

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/admin/*" element={<AdminDashboard />} />
     </Routes>

    </BrowserRouter>
  );
}

export default App;