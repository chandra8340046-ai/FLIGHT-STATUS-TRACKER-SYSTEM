import React, { useState } from "react";
import Layout from "./Layout";

function SearchFlight() {
const [flight, setFlight] = useState("");
const [showResult, setShowResult] = useState(false);

const handleSearch = () => {
if (flight.trim() !== "") {
setShowResult(true);
}
};

return ( <Layout> <h1>Search Flight</h1>

  <div style={{ marginBottom: "20px" }}>
    <input
      type="text"
      placeholder="Enter Flight Number"
      value={flight}
      onChange={(e) => setFlight(e.target.value)}
    />

    <button onClick={handleSearch}>
      Search Flight
    </button>
  </div>

  {showResult && (
    <>
      <div className="card">

        <h2>{flight.toUpperCase()}</h2>

        <p><strong>✈ Airline:</strong> Air India</p>
        <p><strong>📍 Route:</strong> Mumbai → Delhi</p>
        <p><strong>🟢 Status:</strong> On Time</p>

        <hr />

        <p><strong>🕒 Departure:</strong> 10:30 AM</p>
        <p><strong>🕒 Arrival:</strong> 12:45 PM</p>
        <p><strong>⏳ Duration:</strong> 2h 15m</p>

        <hr />

        <p><strong>🏢 Terminal:</strong> T2</p>
        <p><strong>🚪 Gate:</strong> A12</p>
        <p><strong>🛩 Aircraft:</strong> Airbus A320</p>

        <hr />

        <p><strong>🌤 Weather:</strong> Clear Sky</p>
        <p><strong>💺 Available Seats:</strong> 18</p>
        <p><strong>🧳 Baggage:</strong> 15 KG</p>
        <p><strong>🎫 Booking Status:</strong> Confirmed</p>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <button style={{ marginTop: "20px" }}>
          Download Ticket
        </button>

        <button style={{ marginTop: "20px" }}>
          Set Alert
        </button>

      </div>

      <div className="cards" style={{ marginTop: "20px" }}>

        <div className="card">
          <h3>Flight Score</h3>
          <h2>92%</h2>
        </div>

        <div className="card">
          <h3>Punctuality</h3>
          <h2>96%</h2>
        </div>

        <div className="card">
          <h3>Passenger Rating</h3>
          <h2>4.7 ★</h2>
        </div>

        <div className="card">
          <h3>Fuel Efficiency</h3>
          <h2>88%</h2>
        </div>

      </div>

      <h2 style={{ marginTop: "30px" }}>
        Recent Searches
      </h2>

      <table>
        <thead>
          <tr>
            <th>Flight</th>
            <th>Route</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI202</td>
            <td>Mumbai → Delhi</td>
            <td>On Time</td>
          </tr>

          <tr>
            <td>6E455</td>
            <td>Bangalore → Hyderabad</td>
            <td>Delayed</td>
          </tr>

          <tr>
            <td>SG123</td>
            <td>Chennai → Delhi</td>
            <td>Boarding</td>
          </tr>
        </tbody>
      </table>
    </>
  )}
</Layout>

);
}

export default SearchFlight;
