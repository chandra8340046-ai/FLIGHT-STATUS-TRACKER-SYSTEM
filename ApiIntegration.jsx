import React from "react";
import Layout from "./Layout";

function ApiIntegration() {
return ( <Layout>
  <h1>API Integration Center</h1>

  <div className="cards">

    <div className="card">
      <h3>Flight API</h3>
      <h2>Connected</h2>
    </div>

    <div className="card">
      <h3>Weather API</h3>
      <h2>Connected</h2>
    </div>

    <div className="card">
      <h3>Passenger API</h3>
      <h2>Connected</h2>
    </div>

    <div className="card">
      <h3>System Health</h3>
      <h2>99.8%</h2>
    </div>

  </div>

  <h2 style={{ marginTop: "25px" }}>
    Sample Flight API Response
  </h2>

  <pre>

{`{
  "flight":"AI202",
  "airline":"Air India",
  "route":"Mumbai-Delhi",
  "status":"On Time",
  "gate":"A12",
  "altitude":"32000 ft"
}`} </pre>

```
  <h2 style={{ marginTop: "25px" }}>
    Integration Summary
  </h2>

  <div className="card">
    <p>✔ Flight Tracking Service Active</p>
    <p>✔ Weather Monitoring Connected</p>
    <p>✔ Passenger Database Synced</p>
    <p>✔ Security Monitoring Enabled</p>
  </div>

</Layout>

);
}

export default ApiIntegration;
