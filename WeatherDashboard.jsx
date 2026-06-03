import React from "react";
import Layout from "./Layout";

function WeatherDashboard() {
return ( <Layout>
  <h1>Weather Dashboard</h1>

  <div className="cards">

    <div className="card">
      <h3>Temperature</h3>
      <h2>28°C</h2>
    </div>

    <div className="card">
      <h3>Visibility</h3>
      <h2>10 KM</h2>
    </div>

    <div className="card">
      <h3>Wind Speed</h3>
      <h2>18 km/h</h2>
    </div>

    <div className="card">
      <h3>Humidity</h3>
      <h2>72%</h2>
    </div>

  </div>

  <h2 style={{ marginTop: "25px" }}>
    Airport Weather Conditions
  </h2>

  <table>
    <thead>
      <tr>
        <th>Airport</th>
        <th>Weather</th>
        <th>Temperature</th>
        <th>Status</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Delhi</td>
        <td>☀ Clear Sky</td>
        <td>29°C</td>
        <td>Normal</td>
      </tr>

      <tr>
        <td>Mumbai</td>
        <td>🌦 Light Rain</td>
        <td>26°C</td>
        <td>Caution</td>
      </tr>

      <tr>
        <td>Chennai</td>
        <td>☁ Cloudy</td>
        <td>31°C</td>
        <td>Normal</td>
      </tr>

      <tr>
        <td>Hyderabad</td>
        <td>☀ Sunny</td>
        <td>30°C</td>
        <td>Normal</td>
      </tr>
    </tbody>
  </table>

  <div className="card" style={{ marginTop: "25px" }}>
    <h3>Weather Alerts</h3>
    <p>🌦 Moderate rainfall expected in Mumbai.</p>
    <p>⚠ Low visibility warning for Bangalore Airport.</p>
    <p>☀ Clear flying conditions for Delhi routes.</p>
  </div>

</Layout>

);
}

export default WeatherDashboard;
