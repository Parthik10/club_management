import React, { useState } from 'react';
// import { TextField, Button, Card, Typography, Snackbar, Alert,Grid , InputAdornment, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createEvent } from '../../utils/api';
import { AccountCircle, Title, Description, Event as EventIcon, AccessTime, LocationOn, Image, ConfirmationNumber, MonetizationOn } from '@mui/icons-material';

function Event() {
  const [formData, setFormData] = useState({
    clubName: '',
    title: '',
    description: '',
    date: '',
    time: '',
    venue: '',
    poster: '',
    eventId: '',
    registrationFees: 0
  });
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEvent(formData);
      setOpen(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      setError('Event creation failed. Please try again.');
    }
  };

  return (

    <div className="container-fluid mt-4">
    <div className="card event-card p-3">
      <div className="row">
        <div className="col-md-6">
          <h4 className="mb-3">Create Event</h4>
          <form onSubmit={handleSubmit}>
            {[
              { label: "Club Name", name: "clubName", icon: <AccountCircle /> },
              { label: "Title", name: "title", icon: <Title /> },
              { label: "Description", name: "description", icon: <Description /> },
              { label: "Date", name: "date", icon: <EventIcon />, type: "date" },
              { label: "Time", name: "time", icon: <AccessTime />, type: "time" },
              { label: "Venue", name: "venue", icon: <LocationOn /> },
              { label: "Poster URL", name: "poster", icon: <Image /> },
              { label: "Event ID", name: "eventId", icon: <ConfirmationNumber /> },
              { label: "Registration Fees", name: "registrationFees", icon: <MonetizationOn />, type: "number" },
            ].map(({ label, name, icon, type = "text" }) => (
              <div className="mb-3" key={name}>
                <label className="form-label">{label}</label>
                <div className="input-group">
                  <span className="input-group-text">{icon}</span>
                  <input
                    type={type}
                    className="form-control"
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ))}

            <button type="submit" className="btn btn-dark w-100">
              Create Event
            </button>
          </form>

          {error && <div className="alert alert-danger mt-3">{error}</div>}
          {open && (
            <div className="alert alert-success mt-3">
              Event created successfully!
            </div>
          )}
        </div>

      <div className="col-md-6">
        <h1>do something here</h1>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Event;
