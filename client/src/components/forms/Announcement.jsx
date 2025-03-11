import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { createAnnouncement } from '../../utils/api';

function Announcement() {
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    clubName: '',
    createdBy: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAnnouncement(formData);
      // Handle success (e.g., show a success message, clear the form, etc.)
    } catch (error) {
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <Container>
      <Typography variant="h4">Create Announcement</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Club Name"
          name="clubName"
          value={formData.clubName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Created By"
          name="createdBy"
          value={formData.createdBy}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Create Announcement
        </Button>
      </form>
    </Container>
  );
}

export default Announcement;
