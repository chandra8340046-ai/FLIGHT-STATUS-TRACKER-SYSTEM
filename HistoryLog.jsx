import React from "react";

function HistoryLog() {
  return (
    <div className="page">

      <h1>📜 System History Log</h1>

      <div className="card" style={{ marginBottom: "25px" }}>
        <h2>Activity Monitoring Center</h2>
        <p>
          Track all flight operations, status updates, notifications,
          gate changes, cancellations, user actions, and system events.
        </p>
      </div>

      <div className="cards">

        <div className="card">
          <h3>Total Events Today</h3>
          <h2>245</h2>
        </div>

        <div className="card">
          <h3>Flight Updates</h3>
          <h2>128</h2>
        </div>

        <div className="card">
          <h3>Notifications Sent</h3>
          <h2>84</h2>
        </div>

        <div className="card">
          <h3>System Actions</h3>
          <h2>33</h2>
        </div>

      </div>

      <h2 style={{ marginTop: "30px" }}>
        Recent Activity Log
      </h2>

      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>09:15 AM</td>
            <td>Flight AI202 Created</td>
            <td>Flight Operation</td>
            <td>Success</td>
          </tr>

          <tr>
            <td>09:45 AM</td>
            <td>Delay Alert Sent for AI202</td>
            <td>Notification</td>
            <td>Delivered</td>
          </tr>

          <tr>
            <td>10:10 AM</td>
            <td>Gate Changed to B12</td>
            <td>Airport Operation</td>
            <td>Updated</td>
          </tr>

          <tr>
            <td>10:45 AM</td>
            <td>Boarding Started for SG123</td>
            <td>Flight Status</td>
            <td>Active</td>
          </tr>

          <tr>
            <td>11:20 AM</td>
            <td>Weather Alert Generated</td>
            <td>Weather</td>
            <td>Warning</td>
          </tr>

          <tr>
            <td>11:55 AM</td>
            <td>Flight UK871 Cancelled</td>
            <td>Flight Operation</td>
            <td>Cancelled</td>
          </tr>

          <tr>
            <td>12:20 PM</td>
            <td>Admin Updated Route Information</td>
            <td>Admin Action</td>
            <td>Success</td>
          </tr>

          <tr>
            <td>01:10 PM</td>
            <td>Passenger Notification Broadcast</td>
            <td>Communication</td>
            <td>Delivered</td>
          </tr>

        </tbody>
      </table>

      <h2 style={{ marginTop: "30px" }}>
        Event Summary
      </h2>

      <table>
        <thead>
          <tr>
            <th>Event Type</th>
            <th>Count</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Flight Status Changes</td>
            <td>82</td>
          </tr>

          <tr>
            <td>Push Alerts Sent</td>
            <td>64</td>
          </tr>

          <tr>
            <td>Gate Updates</td>
            <td>21</td>
          </tr>

          <tr>
            <td>Weather Warnings</td>
            <td>12</td>
          </tr>

          <tr>
            <td>Admin Operations</td>
            <td>33</td>
          </tr>

          <tr>
            <td>System Logs Generated</td>
            <td>245</td>
          </tr>
        </tbody>
      </table>

      <div className="card" style={{ marginTop: "30px" }}>
        <h2>System Audit Report</h2>

        <p>✔ Flight records verified successfully.</p>
        <p>✔ Alert delivery rate: 98.6%</p>
        <p>✔ Active monitoring services: 12</p>
        <p>✔ System uptime: 99.9%</p>
        <p>✔ Last backup completed: 02:00 AM</p>
      </div>

    </div>
  );
}

export default HistoryLog;