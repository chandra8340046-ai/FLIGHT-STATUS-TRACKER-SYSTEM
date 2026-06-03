import React, { useState } from "react";
import Layout from "./FilterByAirline";

function LiveTracking() {
  const [flight, setFlight] = useState("");
  const [showData, setShowData] = useState(false);

  const trackFlight = () => {
    if (flight !== "") {
      setShowData(true);
    }
  };

  return (
    <Layout>
      <h1>Live Flight Tracking</h1>

      <input
        type="text"
        placeholder="Enter Flight Number"
        value={flight}
        onChange={(e) => setFlight(e.target.value)}
      />

      <button onClick={trackFlight}>
        Track Flight
      </button>

      {showData && (
        <>
          <div
            className="card"
            style={{ marginTop: "20px" }}
          >
            <h2>{flight.toUpperCase()}</h2>

            <p>✈ Airline: Air India</p>
            <p>📍 Current Position: Nagpur</p>
            <p>🛫 Route: Mumbai → Delhi</p>
            <p>📏 Altitude: 32,000 ft</p>
            <p>⚡ Speed: 850 km/h</p>
            <p>⏰ ETA: 1 hr 20 mins</p>
          </div>

          <div className="map-box">
            <div style={{ width: "90%" }}>
              <h3>Mumbai → Delhi</h3>

              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>

              <p style={{ marginTop: "10px" }}>
                Flight is currently over Nagpur
              </p>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}

export default LiveTracking;