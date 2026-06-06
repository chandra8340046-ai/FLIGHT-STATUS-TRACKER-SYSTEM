import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";

import Dashboard from "./Dashboard";
import SearchFlight from "./SearchFlight";
import LiveUpdates from "./LiveUpdates";
import PushAlerts from "./PushAlerts";
import HistoryLog from "./HistoryLog";
import NotificationSubscription from "./NotificationSubscription";
import MobileResponsive from "./MobileResponsive";
import MapView from "./MapView";
import FilterByAirline from "./FilterByAirline";
import AdminPanel from "./AdminPanel";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Authentication */}

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main Dashboard */}

        <Route path="/dashboard" element={<Dashboard />} />

        {/* Project Modules */}

        <Route path="/search" element={<SearchFlight />} />

        <Route path="/updates" element={<LiveUpdates />} />

        <Route path="/alerts" element={<PushAlerts />} />

        <Route path="/history" element={<HistoryLog />} />

        <Route
          path="/notifications"
          element={<NotificationSubscription />}
        />

        <Route
          path="/mobile"
          element={<MobileResponsive />}
        />

        <Route path="/map" element={<MapView />} />

        <Route
          path="/airline"
          element={<FilterByAirline />}
        />

        <Route
          path="/admin"
          element={<AdminPanel />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;