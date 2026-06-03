import React from "react";

function PushAlerts() {
return ( <div className="page">
  <h1>🔔 Push Alerts Center</h1>

  <div className="card" style={{ marginBottom: "25px" }}>
    <h2>Alert Monitoring Dashboard</h2>
    <p>
      Manage flight notifications, passenger alerts,
      operational warnings, gate changes, weather disruptions,
      and emergency announcements in real time.
    </p>
  </div>

  <div className="cards">

    <div className="card">
      <h3>⚠ Flight Delay Alert</h3>
      <h2>28</h2>
      <p>Flights currently delayed.</p>
    </div>

    <div className="card">
      <h3>✈ Boarding Alerts</h3>
      <h2>19</h2>
      <p>Flights currently boarding.</p>
    </div>

    <div className="card">
      <h3>❌ Cancellation Alerts</h3>
      <h2>14</h2>
      <p>Flights cancelled today.</p>
    </div>

    <div className="card">
      <h3>🚨 Emergency Alerts</h3>
      <h2>02</h2>
      <p>High-priority operational alerts.</p>
    </div>

  </div>

  <h2 style={{ marginTop: "30px" }}>
    Live Alert Feed
  </h2>

  <div className="notification">
    ⚠ AI202 delayed by 20 minutes due to air traffic congestion.
  </div>

  <div className="notification">
    ✈ Boarding started for SG123 at Gate B12.
  </div>

  <div className="notification">
    🚨 Weather advisory issued for Delhi Airport.
  </div>

  <div className="notification">
    ❌ Flight UK871 cancelled due to operational reasons.
  </div>

  <div className="notification">
    🔄 Gate changed for 6E455 from A7 to B4.
  </div>

  <h2 style={{ marginTop: "30px" }}>
    Alert History Log
  </h2>

  <table>
    <thead>
      <tr>
        <th>Time</th>
        <th>Flight</th>
        <th>Alert Type</th>
        <th>Priority</th>
        <th>Status</th>
      </tr>
    </thead>

    <tbody>

      <tr>
        <td>09:45 AM</td>
        <td>AI202</td>
        <td>Delay</td>
        <td>High</td>
        <td>Sent</td>
      </tr>

      <tr>
        <td>10:10 AM</td>
        <td>SG123</td>
        <td>Boarding</td>
        <td>Medium</td>
        <td>Sent</td>
      </tr>

      <tr>
        <td>10:50 AM</td>
        <td>UK871</td>
        <td>Cancellation</td>
        <td>Critical</td>
        <td>Sent</td>
      </tr>

      <tr>
        <td>11:20 AM</td>
        <td>6E455</td>
        <td>Gate Change</td>
        <td>Medium</td>
        <td>Sent</td>
      </tr>

      <tr>
        <td>12:00 PM</td>
        <td>AI305</td>
        <td>Weather Alert</td>
        <td>High</td>
        <td>Sent</td>
      </tr>

    </tbody>
  </table>

  <h2 style={{ marginTop: "30px" }}>
    Notification Subscribers
  </h2>

  <div className="cards">

    <div className="card">
      <h3>Email Subscribers</h3>
      <h2>4,520</h2>
    </div>

    <div className="card">
      <h3>Mobile App Users</h3>
      <h2>8,240</h2>
    </div>

    <div className="card">
      <h3>SMS Subscribers</h3>
      <h2>2,150</h2>
    </div>

    <div className="card">
      <h3>Push Notifications Sent Today</h3>
      <h2>18,760</h2>
    </div>

  </div>

  <h2 style={{ marginTop: "30px" }}>
    Alert Performance Summary
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
        <td>Total Alerts Today</td>
        <td>124</td>
      </tr>

      <tr>
        <td>Successful Deliveries</td>
        <td>98.6%</td>
      </tr>

      <tr>
        <td>Average Delivery Time</td>
        <td>2.1 Seconds</td>
      </tr>

      <tr>
        <td>Critical Alerts</td>
        <td>8</td>
      </tr>

      <tr>
        <td>Active Subscribers</td>
        <td>14,910</td>
      </tr>
    </tbody>
  </table>

</div>

);
}

export default PushAlerts;
