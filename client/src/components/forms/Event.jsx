import React, { useState } from 'react';
import { TextField, Button, Card, Typography, Snackbar, Alert,Grid , InputAdornment, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createEvent } from '../../utils/api';
import { AccountCircle, Title, Description, Event as EventIcon, AccessTime, LocationOn, Image, ConfirmationNumber, MonetizationOn } from '@mui/icons-material';
import imgEvent from '../../assets/event.jpg';

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
    <Card sx={{  mx: 1, my: 3, p: 3,  }}>
      <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
    <Box>

      <img src={imgEvent} alt="event" style={{ width: '100%', height: 'auto', margin: '9rem 0' , }} />
    </Box>
      </Grid>

      <Grid item xs={12} md={6}>
      <Typography variant="h4">Create Event</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Club Name"
          name="clubName"
          value={formData.clubName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Title />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Description />
              </InputAdornment>
            ),
          }}
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EventIcon />
              </InputAdornment>
            ),
          }}
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccessTime />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Venue"
          name="venue"
          value={formData.venue}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOn />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Poster URL"
          name="poster"
          value={formData.poster}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Image />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Event ID"
          name="eventId"
          value={formData.eventId}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ConfirmationNumber />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Registration Fees"
          name="registrationFees"
          type="number"
          value={formData.registrationFees}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MonetizationOn />
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Create Event
        </Button>
      </form>
</Grid>
</Grid>

      <Snackbar open={open} autoHideDuration={2000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
          Event created successfully!
        </Alert>
      </Snackbar>
      {error && <Alert severity="error">{error}</Alert>}
    </Card>
  );
}

export default Event;
