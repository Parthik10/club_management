import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Snackbar,
  Alert,
  InputAdornment,
  Card,
  CardContent,
  CardMedia,
  Divider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createEvent } from '../../utils/api';
import {
  AccountCircle,
  Title,
  Description,
  Event as EventIcon,
  AccessTime,
  LocationOn,
  Image,
  ConfirmationNumber,
  MonetizationOn,
  Add as AddIcon
} from '@mui/icons-material';

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

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const formFields = [
    { label: "Club Name", name: "clubName", icon: <AccountCircle /> },
    { label: "Title", name: "title", icon: <Title /> },
    { label: "Description", name: "description", icon: <Description />, multiline: true, rows: 4 },
    { label: "Date", name: "date", icon: <EventIcon />, type: "date" },
    { label: "Time", name: "time", icon: <AccessTime />, type: "time" },
    { label: "Venue", name: "venue", icon: <LocationOn /> },
    { label: "Poster URL", name: "poster", icon: <Image /> },
    { label: "Event ID", name: "eventId", icon: <ConfirmationNumber /> },
    { label: "Registration Fees", name: "registrationFees", icon: <MonetizationOn />, type: "number" }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              Create Event
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" paragraph>
              Organize and manage your club events
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              {formFields.map(({ label, name, icon, type = "text", multiline, rows }) => (
                <TextField
                  key={name}
                  fullWidth
                  label={label}
                  name={name}
                  type={type}
                  value={formData[name]}
                  onChange={handleChange}
                  margin="normal"
                  required
                  multiline={multiline}
                  rows={rows}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {React.cloneElement(icon, { color: 'primary' })}
                      </InputAdornment>
                    ),
                  }}
                />
              ))}

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                sx={{ mt: 3 }}
                endIcon={<AddIcon />}
              >
                Create Event
              </Button>
            </Box>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Event created successfully!
              </Alert>
            </Snackbar>

            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}
          </Grid>

        </Grid>
      </Paper>
    </Container>
  );
}

export default Event;
