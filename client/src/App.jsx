import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Announcements from "./components/pages/Announcements";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import ClubDetails from "./components/pages/ClubDetails";
import Clubs from "./components/pages/Clubs";
import Events from "./components/pages/Events";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateEvent from "./components/pages/CreateEvent";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ClubRegister from "./components/forms/ClubRegister"; // Import ClubRegister form
import Announcement from "./components/forms/Announcement"; // Import Announcement form
import Event from "./components/forms/Event"; // Import Event form
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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
        <Route path="/create-event" element={<ProtectedRoute element={CreateEvent} />} />
        <Route path="/register-club" element={<ClubRegister />} /> {/* Add route for ClubRegister */}
        <Route path="/create-announcement" element={<Announcement />} /> {/* Add route for Announcement */}
        <Route path="/create-event-form" element={<Event />} /> {/* Add route for Event */}
      </Routes>
      <FabButton />
    </Router>
  );
}

function FabButton() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleFabClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRegisterClubClick = () => {
    navigate("/register-club");
    handleClose();
  };

  const handleCreateAnnouncementClick = () => {
    navigate("/create-announcement");
    handleClose();
  };

  const handleCreateEventClick = () => {
    navigate("/create-event-form");
    handleClose();
  };

  return (
    <>
      <Fab 
        size="medium" 
        color="secondary" 
        aria-label="add" 
        onClick={handleFabClick} 
        style={{ position: 'fixed', bottom: '16px', right: '16px' }} // Add margins and position
      >
        <AddIcon />
      </Fab>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleRegisterClubClick}>Register Club</MenuItem>
        <MenuItem onClick={handleCreateAnnouncementClick}>Create Announcement</MenuItem>
        <MenuItem onClick={handleCreateEventClick}>Create Event</MenuItem>
      </Menu> 
    </>
  );
}

export default App;
