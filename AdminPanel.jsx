import React from "react";
import Layout from "./Layout";

function AdminPanel() {
return ( <Layout>

  <h1>Admin Control Panel</h1>

  <div className="cards">

    <div className="card">
      <h3>Total Users</h3>
      <h2>1,248</h2>
    </div>

    <div className="card">
      <h3>Active Flights</h3>
      <h2>86</h2>
    </div>

    <div className="card">
      <h3>Airport Staff</h3>
      <h2>320</h2>
    </div>

    <div className="card">
      <h3>System Status</h3>
      <h2>Online</h2>
    </div>

  </div>

  <h2 style={{ marginTop: "25px" }}>
    Management Actions
  </h2>

  <div className="cards">

    <div className="card">
      <h3>➕ Add Flight</h3>
      <p>Create new flight schedules.</p>
    </div>

    <div className="card">
      <h3>✏ Edit Flight</h3>
      <p>Modify flight details.</p>
    </div>

    <div className="card">
      <h3>❌ Delete Flight</h3>
      <p>Remove cancelled flights.</p>
    </div>

    <div className="card">
      <h3>👥 Manage Users</h3>
      <p>Control passenger accounts.</p>
    </div>

  </div>

  <h2 style={{ marginTop: "25px" }}>
    Recent Admin Activities
  </h2>

  <table>
    <thead>
      <tr>
        <th>Activity</th>
        <th>User</th>
        <th>Date</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Added Flight AI450</td>
        <td>Admin01</td>
        <td>12-06-2026</td>
      </tr>

      <tr>
        <td>Updated Weather Alert</td>
        <td>Admin02</td>
        <td>12-06-2026</td>
      </tr>

      <tr>
        <td>Generated Flight Report</td>
        <td>Admin01</td>
        <td>11-06-2026</td>
      </tr>
    </tbody>
  </table>

  <div className="card" style={{ marginTop: "25px" }}>
    <h3>Admin Summary</h3>
    <p>✔ Flights Managed Today: 128</p>
    <p>✔ Reports Generated: 15</p>
    <p>✔ User Requests Resolved: 48</p>
    <p>✔ System Uptime: 99.8%</p>
  </div>

</Layout>

);
}

export default AdminPanel;
