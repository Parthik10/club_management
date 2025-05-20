import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../../utils/api';
import EventCard from '../cards/EventCard';
import { Container, Typography, Grid, Box, Alert } from '@mui/material';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      }
    };
    getEvents();
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        py: 8,
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Upcoming Events
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ 
              mb: 4,
              color: '#e0e0e0',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            Discover and join exciting events happening around you
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 4 }}>
            Error: {error}
          </Alert>
        )}

        {events.length === 0 && !error ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" sx={{ color: '#e0e0e0' }}>
              No events found at the moment.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={4}>
            {events.map((event) => (
              <Grid item key={event._id} xs={12} sm={6} md={4}>
                <EventCard event={event} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Events;
