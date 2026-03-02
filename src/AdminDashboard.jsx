import { useNavigate } from "react-router-dom";

function Card({ icon, title, route }) {
    const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(route)}>
      <img src={icon} alt={title} />
      <p>{title}</p>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="page">
      <div className="glass">
        <button className="close">✖</button>

        <h1>ADMINISTRATION DASHBOARD</h1>

        <div className="grid">
          <Card icon="/icons/user.png" title="Edit Users" route= "/users" />
          <Card icon="/icons/laptop.png" title="View Declarations" route= "/declarations" />
          <Card icon="/icons/report.png" title="Reports" route= "/reports" />
          <Card icon="/icons/tools.png" title="My Account" route= "/account" />
        </div>

        <div className="logout">LOG OUT</div>
      </div>
    </div>
  );
}

export default AdminDashboard;
