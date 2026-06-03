import React from "react";
import Layout from "./Layout";

function FlightHistory() {
return ( <Layout>

  <h1>Flight History</h1>

  <div className="cards">

    <div className="card">
      <h3>Total Flights</h3>
      <h2>2,456</h2>
    </div>

    <div className="card">
      <h3>Completed</h3>
      <h2>2,320</h2>
    </div>

    <div className="card">
      <h3>Delayed</h3>
      <h2>98</h2>
    </div>

    <div className="card">
      <h3>Cancelled</h3>
      <h2>38</h2>
    </div>

  </div>

  <h2 style={{ marginTop: "25px" }}>
    Previous Flights
  </h2>

  <table>
    <thead>
      <tr>
        <th>Flight</th>
        <th>Airline</th>
        <th>Date</th>
        <th>Route</th>
        <th>Status</th>
      </tr>
    </thead>

    <tbody>

      <tr>
        <td>AI202</td>
        <td>Air India</td>
        <td>12-06-2026</td>
        <td>Mumbai → Delhi</td>
        <td>🟢 On Time</td>
      </tr>

      <tr>
        <td>6E455</td>
        <td>IndiGo</td>
        <td>11-06-2026</td>
        <td>Bangalore → Hyderabad</td>
        <td>🟡 Delayed</td>
      </tr>

      <tr>
        <td>SG123</td>
        <td>SpiceJet</td>
        <td>10-06-2026</td>
        <td>Chennai → Delhi</td>
        <td>🔵 Completed</td>
      </tr>

      <tr>
        <td>UK871</td>
        <td>Vistara</td>
        <td>09-06-2026</td>
        <td>Hyderabad → Mumbai</td>
        <td>❌ Cancelled</td>
      </tr>

    </tbody>
  </table>

  <h2 style={{ marginTop: "30px" }}>
    History Summary
  </h2>

  <div className="card">
    <p>✈ Most Frequent Route: Mumbai → Delhi</p>
    <p>🧳 Total Passengers Served: 45,680</p>
    <p>⏱ Average Delay: 18 Minutes</p>
    <p>⭐ Passenger Satisfaction: 4.7 / 5</p>
  </div>

</Layout>

);
}

export default FlightHistory;
