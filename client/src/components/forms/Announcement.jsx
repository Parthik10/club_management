import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createAnnouncement } from '../../utils/api';

function Announcement() {
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    clubName: '',
    createdBy: ''
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
      await createAnnouncement(formData);
      setOpen(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      setError('Announcement creation failed. Please try again.');
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
      <Snackbar open={open} autoHideDuration={2000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
          Announcement created successfully!
        </Alert>
      </Snackbar>
      {error && <Alert severity="error">{error}</Alert>}
    </Container>
  );
}

export default Announcement;
