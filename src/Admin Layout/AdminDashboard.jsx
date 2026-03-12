import { Routes, Route, useNavigate } from "react-router-dom";
import "./Adminpages/dashboard.css";
import Account from "./Adminpages/Account";
import Declarations from "./Adminpages/Declarations";
import EditUsers from "./Adminpages/EditUsers";
import Reports from "./Adminpages/Reports";
import usericon from "/icons/user.png";
import laptopicon from "/icons/laptop.png";
import reporticon from "/icons/report.png";
import toolsicon from "/icons/tools.png";

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
          <Card icon={usericon} title="Edit Users" route="users" />
          <Card icon={laptopicon} title="View Declarations" route="declarations" />
          <Card icon={reporticon} title="Reports" route="reports" />
          <Card icon={toolsicon} title="My Account" route="account" />
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
