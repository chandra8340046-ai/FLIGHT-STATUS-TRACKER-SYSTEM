import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import SearchFlight from "./SearchFlight";
import LiveTracking from "./LiveTracking";
import FlightAnalytics from "./FlightAnalytics";
import FlightHistory from "./FlightHistory";
import Notifications from "./Notifications";
import WeatherDashboard from "./WeatherDashboard";
import UploadDocument from "./UploadDocument";
import ApiIntegration from "./ApiIntegration";
import AdminPanel from "./AdminPanel";

function App() {
return ( <BrowserRouter> <Routes>
<Route path="/" element={<Dashboard />} />
<Route path="/search" element={<SearchFlight />} />
<Route path="/tracking" element={<LiveTracking />} />
<Route path="/analytics" element={<FlightAnalytics />} />
<Route path="/history" element={<FlightHistory />} />
<Route path="/notifications" element={<Notifications />} />
<Route path="/weather" element={<WeatherDashboard />} />
<Route path="/upload" element={<UploadDocument />} />
<Route path="/api" element={<ApiIntegration />} />
<Route path="/admin" element={<AdminPanel />} /> </Routes> </BrowserRouter>
);
}

export default App;
