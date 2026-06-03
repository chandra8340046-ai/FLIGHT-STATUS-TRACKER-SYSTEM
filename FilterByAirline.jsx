import React from "react";

function FilterByAirline() {
return ( <div className="page">
  <h1>✈ Filter Flights by Airline</h1>

  <div className="card" style={{ marginBottom: "25px" }}>
    <h2>Airline Search Center</h2>
    <p>
      View and filter flights based on airline operators.
      Monitor airline performance, delays, cancellations,
      active routes, and passenger traffic.
    </p>
  </div>

  <div className="cards">

    <div className="card">
      <h3>Total Airlines</h3>
      <h2>18</h2>
    </div>

    <div className="card">
      <h3>Active Flights</h3>
      <h2>128</h2>
    </div>

    <div className="card">
      <h3>Domestic Airlines</h3>
      <h2>12</h2>
    </div>

    <div className="card">
      <h3>International Airlines</h3>
      <h2>6</h2>
    </div>

  </div>

  <h2 style={{ marginTop: "30px" }}>
    Airline Filter
  </h2>

  <div className="card">

    <input
      type="text"
      placeholder="Search Airline Name"
    />

    <button>
      Filter
    </button>

  </div>

  <h2 style={{ marginTop: "30px" }}>
    Airline Performance
  </h2>

  <table>
    <thead>
      <tr>
        <th>Airline</th>
        <th>Flights Today</th>
        <th>On Time</th>
        <th>Delayed</th>
        <th>Cancelled</th>
      </tr>
    </thead>

    <tbody>

      <tr>
        <td>Air India</td>
        <td>42</td>
        <td>35</td>
        <td>5</td>
        <td>2</td>
      </tr>

      <tr>
        <td>IndiGo</td>
        <td>38</td>
        <td>33</td>
        <td>4</td>
        <td>1</td>
      </tr>

      <tr>
        <td>SpiceJet</td>
        <td>24</td>
        <td>19</td>
        <td>3</td>
        <td>2</td>
      </tr>

      <tr>
        <td>Vistara</td>
        <td>16</td>
        <td>15</td>
        <td>1</td>
        <td>0</td>
      </tr>

    </tbody>
  </table>

  <h2 style={{ marginTop: "30px" }}>
    Available Flights
  </h2>

  <table>
    <thead>
      <tr>
        <th>Flight No</th>
        <th>Airline</th>
        <th>Route</th>
        <th>Status</th>
      </tr>
    </thead>

    <tbody>

      <tr>
        <td>AI202</td>
        <td>Air India</td>
        <td>Mumbai → Delhi</td>
        <td>🟢 On Time</td>
      </tr>

      <tr>
        <td>AI305</td>
        <td>Air India</td>
        <td>Delhi → Chennai</td>
        <td>🟡 Delayed</td>
      </tr>

      <tr>
        <td>6E455</td>
        <td>IndiGo</td>
        <td>Bangalore → Hyderabad</td>
        <td>🟢 On Time</td>
      </tr>

      <tr>
        <td>SG123</td>
        <td>SpiceJet</td>
        <td>Chennai → Delhi</td>
        <td>🔵 Boarding</td>
      </tr>

      <tr>
        <td>UK871</td>
        <td>Vistara</td>
        <td>Delhi → Kolkata</td>
        <td>🟢 On Time</td>
      </tr>

    </tbody>
  </table>

  <h2 style={{ marginTop: "30px" }}>
    Airline Statistics
  </h2>

  <div className="cards">

    <div className="card">
      <h3>Best On-Time Airline</h3>
      <h2>Vistara</h2>
    </div>

    <div className="card">
      <h3>Most Flights</h3>
      <h2>Air India</h2>
    </div>

    <div className="card">
      <h3>Least Delays</h3>
      <h2>Vistara</h2>
    </div>

    <div className="card">
      <h3>Passenger Satisfaction</h3>
      <h2>96%</h2>
    </div>

  </div>

</div>

);
}

export default FilterByAirline;
