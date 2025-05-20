import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Announcements from "./components/pages/Announcements";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import ClubDetails from "./components/pages/ClubDetails";
import Clubs from "./components/pages/Clubs";
import Events from "./components/pages/Events";
import CreateEvent from "./components/pages/CreateEvent";
import Announcement from "./components/forms/Announcement";
import Event from "./components/forms/Event";
import Login from "./components/forms/Login";
import SignUp from "./components/forms/SignUp";
import Dashboard from "./components/pages/Dashboard";
import EventDetails from './components/pages/EventDetails';
import Payment from './components/pages/Payment';
import AdminLogin from './components/pages/AdminLogin';
import AdminDashboard from './components/pages/AdminDashboard';
import { AuthProvider } from './context/AuthContext';
import Footer from './components/Footer';
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/clubs/:id" element={<ClubDetails />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/payment/:id" element={<Payment />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/create-announcement" element={<Announcement />} />
            <Route path="/create-event-form" element={<Event />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route
              path="/admin-dashboard"
              element={
              
                  <AdminDashboard />
               
              }
            />
            <Route
              path="/dashboard"
              element={
                  <Dashboard />
              }
            />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
