import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./Loginpage";
import AdminDashboard from "./AdminDashboard";
import Account from "./Adminpages/Account";
import Declarations from "./Adminpages/Declarations";
import EditUsers from "./Adminpages/EditUsers";
import Reports from "./Adminpages/Reports";

function App() {
  return (
    < Loginpage />
    /*<BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/account" element={<Account />} />
        <Route path="/declarations" element={<Declarations />} />
        <Route path="/users" element={<EditUsers />} />
        <Route path="/reports" element={<Reports />} />
        
      </Routes>
    </BrowserRouter>*/
  );
}

export default App;