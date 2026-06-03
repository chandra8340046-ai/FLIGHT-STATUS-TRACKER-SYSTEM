import React from "react";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>✈ Flight Operations</h2>

        <Link to="/">Dashboard</Link>
        <Link to="/search">Search Flight</Link>
        <Link to="/tracking">Live Tracking</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/history">Flight History</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/weather">Weather Dashboard</Link>
        <Link to="/upload">Upload Documents</Link>
        <Link to="/api">API Integration</Link>
        <Link to="/admin">Admin Panel</Link>
      </div>

      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default Layout;