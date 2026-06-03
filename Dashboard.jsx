import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
return ( <div className="dashboard">

  <div className="sidebar">
    <h2>✈ Flight Operations</h2>

    <Link to="/">Dashboard</Link>
    <Link to="/search">Search Flight</Link>
    <Link to="/tracking">Live Tracking</Link>
    <Link to="/analytics">Analytics</Link>
    <Link to="/history">Flight History</Link>
    <Link to="/notifications">Notifications</Link>
    <Link to="/weather">Weather Dashboard</Link>
    <Link to="/upload">Upload Documents</Link>
    <Link to="/api">API Integration</Link>
    <Link to="/admin">Admin Panel</Link>
  </div>

  <div className="content">

    <h1>Smart Flight Operations Dashboard</h1>

    <div className="card" style={{ marginBottom: "25px" }}>
      <h2>Welcome Admin 👋</h2>
      <p>
        Monitor flights, weather, analytics, notifications,
        airport operations and passenger activity from one dashboard.
      </p>
    </div>

    <div className="cards">

      <div className="card total">
        <h3>Total Flights</h3>
        <h2>128</h2>
      </div>

      <div className="card active">
        <h3>Active Flights</h3>
        <h2>86</h2>
      </div>

      <div className="card delayed">
        <h3>Delayed Flights</h3>
        <h2>28</h2>
      </div>

      <div className="card cancelled">
        <h3>Cancelled Flights</h3>
        <h2>14</h2>
      </div>

    </div>

    <h2 style={{ marginTop: "30px" }}>
      Recent Flights
    </h2>

    <table>
      <thead>
        <tr>
          <th>Flight</th>
          <th>Airline</th>
          <th>Route</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>AI202</td>
          <td>Air India</td>
          <td>Mumbai → Delhi</td>
          <td>🟢 On Time</td>
        </tr>

        <tr>
          <td>6E455</td>
          <td>IndiGo</td>
          <td>Bangalore → Hyderabad</td>
          <td>🟡 Delayed</td>
        </tr>

        <tr>
          <td>SG123</td>
          <td>SpiceJet</td>
          <td>Chennai → Delhi</td>
          <td>🔵 Boarding</td>
        </tr>
      </tbody>
    </table>

    <h2 style={{ marginTop: "30px" }}>
      Airport Summary
    </h2>

    <table>
      <thead>
        <tr>
          <th>Metric</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Total Passengers</td>
          <td>45,680</td>
        </tr>

        <tr>
          <td>Flights Today</td>
          <td>128</td>
        </tr>

        <tr>
          <td>Delayed Flights</td>
          <td>28</td>
        </tr>

        <tr>
          <td>Cancelled Flights</td>
          <td>14</td>
        </tr>

        <tr>
          <td>Average Delay</td>
          <td>18 Minutes</td>
        </tr>
      </tbody>
    </table>

  </div>

</div>

);
}

export default Dashboard;
