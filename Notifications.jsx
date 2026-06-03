import React from "react";
import Layout from "./Layout";

function Notifications() {
return ( <Layout>
  <h1>Notifications Center</h1>

  <div className="cards">

    <div className="card">
      <h3>Today's Alerts</h3>
      <h2>24</h2>
    </div>

    <div className="card">
      <h3>Boarding Calls</h3>
      <h2>12</h2>
    </div>

    <div className="card">
      <h3>Delayed Flights</h3>
      <h2>8</h2>
    </div>

    <div className="card">
      <h3>Cancelled Flights</h3>
      <h2>2</h2>
    </div>

  </div>

  <h2 style={{ marginTop: "25px" }}>
    Latest Notifications
  </h2>

  <div className="notification">
    ⚠ Flight AI202 delayed by 20 minutes.
  </div>

  <div className="notification">
    ✈ Boarding started for SG123 at Gate A5.
  </div>

  <div className="notification">
    ❌ Flight UK871 cancelled due to weather conditions.
  </div>

  <div className="notification">
    🧳 Baggage claim opened for Flight 6E455.
  </div>

  <div className="notification">
    🌦 Weather alert issued for Delhi Airport.
  </div>

  <div className="notification">
    🔔 Security check congestion reported at Terminal 2.
  </div>

  <div className="notification">
    🚪 Gate changed from A12 to B07 for Flight AI310.
  </div>

  <div className="notification">
    ⛽ Refueling completed for Flight SG222.
  </div>

  <h2 style={{ marginTop: "30px" }}>
    Notification Summary
  </h2>

  <div className="card">
    <p>🔔 Total Alerts Today: 24</p>
    <p>⚠ Critical Alerts: 4</p>
    <p>✈ Boarding Notifications: 12</p>
    <p>🌦 Weather Alerts: 3</p>
  </div>

</Layout>

);
}

export default Notifications;
