import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { createClub } from '../../utils/api';

function ClubRegister() {
  const [formData, setFormData] = useState({
    clubName: '',
    description: '',
    clubHead: '',
    logo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createClub(formData);
      // Handle success (e.g., show a success message, clear the form, etc.)
    } catch (error) {
      // Handle error (e.g., show an error message)
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
    </Container>
  );
}

export default ClubRegister;
