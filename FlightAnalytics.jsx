import React from "react";
import Layout from "./Layout";

function FlightAnalytics() {
return ( <Layout>

  <h1>Flight Analytics Dashboard</h1>

  <div className="cards">

    <div className="card">
      <h3>Total Flights</h3>
      <h2>12,450</h2>
    </div>

    <div className="card">
      <h3>Average Delay</h3>
      <h2>18 min</h2>
    </div>

    <div className="card">
      <h3>Passenger Load</h3>
      <h2>82%</h2>
    </div>

    <div className="card">
      <h3>On-Time Performance</h3>
      <h2>96%</h2>
    </div>

  </div>

  <h2 style={{ marginTop: "30px" }}>
    Weekly Flight Performance
  </h2>

  <table>
    <thead>
      <tr>
        <th>Day</th>
        <th>Flights</th>
        <th>Delayed</th>
        <th>Cancelled</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Monday</td>
        <td>1800</td>
        <td>24</td>
        <td>3</td>
      </tr>

      <tr>
        <td>Tuesday</td>
        <td>1750</td>
        <td>18</td>
        <td>2</td>
      </tr>

      <tr>
        <td>Wednesday</td>
        <td>1850</td>
        <td>22</td>
        <td>4</td>
      </tr>

      <tr>
        <td>Thursday</td>
        <td>1700</td>
        <td>15</td>
        <td>1</td>
      </tr>

      <tr>
        <td>Friday</td>
        <td>1950</td>
        <td>31</td>
        <td>2</td>
      </tr>
    </tbody>
  </table>

  <h2 style={{ marginTop: "30px" }}>
    Airport Performance Metrics
  </h2>

  <div className="cards">

    <div className="card">
      <h3>Fuel Efficiency</h3>
      <h2>88%</h2>
    </div>

    <div className="card">
      <h3>Gate Utilization</h3>
      <h2>79%</h2>
    </div>

    <div className="card">
      <h3>Passenger Satisfaction</h3>
      <h2>4.7 ★</h2>
    </div>

    <div className="card">
      <h3>Baggage Success Rate</h3>
      <h2>99%</h2>
    </div>

  </div>

  <h2 style={{ marginTop: "30px" }}>
    Monthly Traffic Trend
  </h2>

  <div className="card">

    <p>January : ██████████ 8500</p>
    <p>February : ███████████ 9200</p>
    <p>March : █████████████ 10100</p>
    <p>April : ██████████████ 11000</p>
    <p>May : ███████████████ 12450</p>

  </div>

</Layout>


);
}

export default FlightAnalytics;
