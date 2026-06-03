import React from "react";

function MapView() {
  return (
    <div className="page">

      <h1>🗺 Flight Map View</h1>

      <div className="card" style={{ marginBottom: "25px" }}>
        <h2>Live Air Traffic Monitoring</h2>
        <p>
          View active flights, airport locations, routes,
          aircraft positions, and arrival/departure information
          on an interactive map dashboard.
        </p>
      </div>

      <div className="cards">

        <div className="card">
          <h3>Active Flights</h3>
          <h2>86</h2>
          <p>Currently in airspace</p>
        </div>

        <div className="card">
          <h3>Airports Connected</h3>
          <h2>42</h2>
          <p>Domestic & International</p>
        </div>

        <div className="card">
          <h3>Routes Tracked</h3>
          <h2>128</h2>
          <p>Real-time flight paths</p>
        </div>

        <div className="card">
          <h3>Aircraft Online</h3>
          <h2>73</h2>
          <p>Reporting live position</p>
        </div>

      </div>

      <h2 style={{ marginTop: "30px" }}>
        Flight Tracking Map
      </h2>

      <div className="map-box">
        🛫 LIVE FLIGHT MAP AREA 🛬
      </div>

      <h2 style={{ marginTop: "30px" }}>
        Tracked Flights
      </h2>

      <table>
        <thead>
          <tr>
            <th>Flight</th>
            <th>Current Location</th>
            <th>Altitude</th>
            <th>Speed</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>AI202</td>
            <td>Nagpur</td>
            <td>32,000 ft</td>
            <td>850 km/h</td>
            <td>🟢 En Route</td>
          </tr>

          <tr>
            <td>6E455</td>
            <td>Hyderabad</td>
            <td>29,000 ft</td>
            <td>790 km/h</td>
            <td>🟡 Delayed</td>
          </tr>

          <tr>
            <td>SG123</td>
            <td>Chennai</td>
            <td>Ground</td>
            <td>0 km/h</td>
            <td>🔵 Boarding</td>
          </tr>

          <tr>
            <td>UK871</td>
            <td>Delhi</td>
            <td>Ground</td>
            <td>0 km/h</td>
            <td>🔴 Cancelled</td>
          </tr>

        </tbody>
      </table>

      <h2 style={{ marginTop: "30px" }}>
        Airport Location Summary
      </h2>

      <table>
        <thead>
          <tr>
            <th>Airport</th>
            <th>City</th>
            <th>Flights Today</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>DEL</td>
            <td>Delhi</td>
            <td>145</td>
            <td>Operational</td>
          </tr>

          <tr>
            <td>BOM</td>
            <td>Mumbai</td>
            <td>132</td>
            <td>Operational</td>
          </tr>

          <tr>
            <td>BLR</td>
            <td>Bangalore</td>
            <td>119</td>
            <td>Operational</td>
          </tr>

          <tr>
            <td>MAA</td>
            <td>Chennai</td>
            <td>104</td>
            <td>Operational</td>
          </tr>

        </tbody>
      </table>

      <h2 style={{ marginTop: "30px" }}>
        Route Performance Summary
      </h2>

      <div className="cards">

        <div className="card">
          <h3>Most Busy Route</h3>
          <h2>Mumbai → Delhi</h2>
        </div>

        <div className="card">
          <h3>Longest Route</h3>
          <h2>Delhi → London</h2>
        </div>

        <div className="card">
          <h3>Average Flight Time</h3>
          <h2>2h 35m</h2>
        </div>

        <div className="card">
          <h3>Route Accuracy</h3>
          <h2>98.4%</h2>
        </div>

      </div>

    </div>
  );
}

export default MapView;