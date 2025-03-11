import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

function EventRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    paytmStatus: '',
    eventId: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Container>
      <Typography variant="h4">Register for Event</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Contact Number"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Paytm Status"
          name="paytmStatus"
          value={formData.paytmStatus}
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
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
    </Container>
  );
}

export default EventRegister;
