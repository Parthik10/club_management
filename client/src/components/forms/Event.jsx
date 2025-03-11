import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { createEvent } from '../../utils/api';

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEvent(formData);
      // Handle success (e.g., show a success message, clear the form, etc.)
    } catch (error) {
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <Container>
      <Typography variant="h4">Create Event</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Club Name"
          name="clubName"
          value={formData.clubName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Time"
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Venue"
          name="venue"
          value={formData.venue}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Poster URL"
          name="poster"
          value={formData.poster}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Event ID"
          name="eventId"
          value={formData.eventId}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Registration Fees"
          name="registrationFees"
          type="number"
          value={formData.registrationFees}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Create Event
        </Button>
      </form>
    </Container>
  );
}

export default Event;
