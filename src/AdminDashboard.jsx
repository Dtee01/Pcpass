import { Routes, Route, useNavigate } from "react-router-dom";
import Account from "./Adminpages/Account";
import Declarations from "./Adminpages/Declarations";
import EditUsers from "./Adminpages/EditUsers";
import Reports from "./Adminpages/Reports";

function Card({ icon, title, route }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(route)}>
      <img src={icon} alt={title} />
      <p>{title}</p>
    </div>
  );
}

function DashboardHome() {
  return (
    <div className="page">
      <div className="glass">
        <h1>ADMINISTRATION DASHBOARD</h1>

        <div className="grid">
          <Card icon="/icons/user.png" title="Edit Users" route="users" />
          <Card icon="/icons/laptop.png" title="View Declarations" route="declarations" />
          <Card icon="/icons/report.png" title="Reports" route="reports" />
          <Card icon="/icons/tools.png" title="My Account" route="account" />
        </div>

        <div className="logout">LOG OUT</div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <Routes>
      <Route index element={<DashboardHome />} />

      <Route path="account" element={<Account />} />

      <Route path="declarations" element={<Declarations />} />

      <Route path="users" element={<EditUsers />} />

      <Route path="reports" element={<Reports />} />
    </Routes>
  );
}
