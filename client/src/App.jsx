import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Announcements from "./components/pages/Announcements";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import ClubDetails from "./components/pages/ClubDetails";
import Clubs from "./components/pages/Clubs";
import Events from "./components/pages/Events";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateEvent from "./components/pages/CreateEvent";
import Announcement from "./components/forms/Announcement";
import Event from "./components/forms/Event";
import Login from "./components/forms/Login";
import SignUp from "./components/forms/SignUp";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/clubs/:id" element={<ClubDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/create-announcement" element={<Announcement />} />
        <Route path="/create-event-form" element={<Event />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
      </Routes>
    </Router>
  );
}

export default App;
