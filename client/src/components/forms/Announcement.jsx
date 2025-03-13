import React, { useState } from 'react';
import { TextField, Button, Card, Typography, Snackbar, Alert, InputAdornment, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createAnnouncement } from '../../utils/api';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import accImg from "../../assets/38767.jpg";
import SendIcon from '@mui/icons-material/Send';

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
    <Card sx={{ maxWidth: 800, mx: 1, my: 4, p: 4, textAlign: "left" }}>
      <Typography variant="h4">Create Announcement</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
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
                    <AnnouncementOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalPostOfficeOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
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
                    <Groups2OutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Created By"
              name="createdBy"
              value={formData.createdBy}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BorderColorOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
              <Button variant="contained"  endIcon={<SendIcon />}>
              create
              </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={accImg} alt="Announcement" style={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={2000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
          Announcement created successfully!
        </Alert>
      </Snackbar>
      {error && <Alert severity="error">{error}</Alert>}
    </Card>
  );
}

export default Announcement;
