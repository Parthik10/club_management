import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createClub } from '../../utils/api';

function ClubRegister() {
  const [formData, setFormData] = useState({
    clubName: '',
    description: '',
    clubHead: '',
    logo: ''
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
      await createClub(formData);
      setOpen(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      setError('Club registration failed. Please try again.');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Register Club</Typography>
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
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Club Head"
          name="clubHead"
          value={formData.clubHead}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Logo URL"
          name="logo"
          value={formData.logo}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Register Club
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={2000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
          Club registered successfully!
        </Alert>
      </Snackbar>
      {error && <Alert severity="error">{error}</Alert>}
    </Container>
  );
}

export default ClubRegister;
