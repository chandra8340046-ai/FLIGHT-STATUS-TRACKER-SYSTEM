import React from "react";

function MobileResponsive() {
return ( <div className="page">
  <h1>📱 Mobile Responsive Dashboard</h1>

  <div className="card" style={{ marginBottom: "25px" }}>
    <h2>Cross Platform Accessibility</h2>
    <p>
      The Flight Status Tracker system is optimized for
      Desktop, Tablet, Mobile Phones, Airport Kiosks,
      and Smart Devices. Users can monitor flight status
      from anywhere using responsive layouts.
    </p>
  </div>

  <div className="cards">

    <div className="card">
      <h3>Mobile Users</h3>
      <h2>12,540</h2>
      <p>Active mobile users today</p>
    </div>

    <div className="card">
      <h3>Tablet Users</h3>
      <h2>4,120</h2>
      <p>Connected via tablets</p>
    </div>

    <div className="card">
      <h3>Desktop Users</h3>
      <h2>8,750</h2>
      <p>Monitoring flights online</p>
    </div>

    <div className="card">
      <h3>Responsive Score</h3>
      <h2>98%</h2>
      <p>UI compatibility rating</p>
    </div>

  </div>

  <h2 style={{ marginTop: "30px" }}>
    Supported Devices
  </h2>

  <table>
    <thead>
      <tr>
        <th>Device</th>
        <th>Screen Size</th>
        <th>Status</th>
      </tr>
    </thead>

    <tbody>

      <tr>
        <td>Android Mobile</td>
        <td>360px - 480px</td>
        <td>Supported</td>
      </tr>

      <tr>
        <td>iPhone</td>
        <td>390px - 430px</td>
        <td>Supported</td>
      </tr>

      <tr>
        <td>Tablet</td>
        <td>768px - 1024px</td>
        <td>Supported</td>
      </tr>

      <tr>
        <td>Laptop</td>
        <td>1366px+</td>
        <td>Supported</td>
      </tr>

      <tr>
        <td>Desktop Monitor</td>
        <td>1920px+</td>
        <td>Supported</td>
      </tr>

    </tbody>
  </table>

  <h2 style={{ marginTop: "30px" }}>
    Responsive Features
  </h2>

  <div className="cards">

    <div className="card">
      <h3>Adaptive Sidebar</h3>
      <p>
        Sidebar automatically adjusts based on screen width.
      </p>
    </div>

    <div className="card">
      <h3>Flexible Tables</h3>
      <p>
        Flight data remains readable on small screens.
      </p>
    </div>

    <div className="card">
      <h3>Touch Friendly UI</h3>
      <p>
        Buttons and controls optimized for touch devices.
      </p>
    </div>

    <div className="card">
      <h3>Fast Loading</h3>
      <p>
        Lightweight components for mobile performance.
      </p>
    </div>

  </div>

  <h2 style={{ marginTop: "30px" }}>
    Device Usage Statistics
  </h2>

  <table>
    <thead>
      <tr>
        <th>Platform</th>
        <th>Users</th>
        <th>Percentage</th>
      </tr>
    </thead>

    <tbody>

      <tr>
        <td>Android</td>
        <td>8,200</td>
        <td>48%</td>
      </tr>

      <tr>
        <td>iOS</td>
        <td>4,340</td>
        <td>25%</td>
      </tr>

      <tr>
        <td>Windows</td>
        <td>3,980</td>
        <td>18%</td>
      </tr>

      <tr>
        <td>macOS</td>
        <td>1,240</td>
        <td>7%</td>
      </tr>

      <tr>
        <td>Others</td>
        <td>450</td>
        <td>2%</td>
      </tr>

    </tbody>
  </table>

  <div className="card" style={{ marginTop: "30px" }}>
    <h2>Mobile Optimization Report</h2>

    <p>✔ Responsive Layout Enabled</p>
    <p>✔ Mobile Friendly Navigation</p>
    <p>✔ Optimized Images and Assets</p>
    <p>✔ Touch Screen Compatibility</p>
    <p>✔ Fast Page Rendering</p>
    <p>✔ Cross Browser Support</p>
    <p>✔ Accessibility Standards Followed</p>
  </div>

</div>

);
}

export default MobileResponsive;
