import React from "react";

function NotificationSubscription() {
return ( <div className="page">

  <h1>📩 Notification Subscription Center</h1>

  <div className="card" style={{ marginBottom: "25px" }}>
    <h2>Manage Alert Preferences</h2>
    <p>
      Subscribe to receive real-time flight updates,
      delay notifications, gate changes, weather alerts,
      cancellations, boarding announcements, and airport notices.
    </p>
  </div>

  <div className="cards">

    <div className="card">
      <h3>Total Subscribers</h3>
      <h2>14,910</h2>
    </div>

    <div className="card">
      <h3>Email Subscribers</h3>
      <h2>4,520</h2>
    </div>

    <div className="card">
      <h3>SMS Subscribers</h3>
      <h2>2,150</h2>
    </div>

    <div className="card">
      <h3>Mobile App Users</h3>
      <h2>8,240</h2>
    </div>

  </div>

  <h2 style={{ marginTop: "30px" }}>
    New Subscription
  </h2>

  <div className="card">

    <p>Passenger Name</p>
    <input
      type="text"
      placeholder="Enter Name"
    />

    <br /><br />

    <p>Email Address</p>
    <input
      type="email"
      placeholder="Enter Email"
    />

    <br /><br />

    <p>Mobile Number</p>
    <input
      type="text"
      placeholder="Enter Mobile Number"
    />

    <br /><br />

    <button>
      Subscribe Now
    </button>

  </div>

  <h2 style={{ marginTop: "30px" }}>
    Notification Services
  </h2>

  <table>
    <thead>
      <tr>
        <th>Service</th>
        <th>Description</th>
        <th>Status</th>
      </tr>
    </thead>

    <tbody>

      <tr>
        <td>Flight Delay Alerts</td>
        <td>Receive updates on flight delays</td>
        <td>Active</td>
      </tr>

      <tr>
        <td>Gate Change Alerts</td>
        <td>Get gate update notifications</td>
        <td>Active</td>
      </tr>

      <tr>
        <td>Boarding Alerts</td>
        <td>Receive boarding announcements</td>
        <td>Active</td>
      </tr>

      <tr>
        <td>Cancellation Alerts</td>
        <td>Flight cancellation notifications</td>
        <td>Active</td>
      </tr>

      <tr>
        <td>Weather Alerts</td>
        <td>Airport weather warnings</td>
        <td>Active</td>
      </tr>

    </tbody>
  </table>

  <h2 style={{ marginTop: "30px" }}>
    Recent Subscribers
  </h2>

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Subscription Type</th>
        <th>Status</th>
      </tr>
    </thead>

    <tbody>

      <tr>
        <td>Rahul Sharma</td>
        <td>Email</td>
        <td>Active</td>
      </tr>

      <tr>
        <td>Priya Reddy</td>
        <td>SMS</td>
        <td>Active</td>
      </tr>

      <tr>
        <td>Arjun Kumar</td>
        <td>Mobile App</td>
        <td>Active</td>
      </tr>

      <tr>
        <td>Sneha Patel</td>
        <td>Email</td>
        <td>Active</td>
      </tr>

      <tr>
        <td>Vikram Singh</td>
        <td>SMS</td>
        <td>Active</td>
      </tr>

    </tbody>
  </table>

  <h2 style={{ marginTop: "30px" }}>
    Subscription Statistics
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
        <td>Total Notifications Sent Today</td>
        <td>18,760</td>
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
        <td>Active Subscribers</td>
        <td>14,910</td>
      </tr>

      <tr>
        <td>New Subscribers Today</td>
        <td>126</td>
      </tr>

    </tbody>
  </table>

</div>

);
}

export default NotificationSubscription;
