import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Box,
  Button,
  Chip,
  Divider,
  Alert,
  CircularProgress
} from '@mui/material';
import {
  LocationOn,
  CalendarToday,
  AccessTime,
  Group,
  Payment
} from '@mui/icons-material';
import { getEventById } from '../../utils/api';

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const data = await getEventById(id);
        setEvent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEventDetails();
  }, [id]);

  const handlePayment = () => {
    // This will be implemented when integrating Razorpay
    navigate(`/payment/${id}`);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  if (!event) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="info">Event not found</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              {event.title}
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
              <Chip
                icon={<LocationOn />}
                label={event.location}
                variant="outlined"
              />
              <Chip
                icon={<CalendarToday />}
                label={new Date(event.date).toLocaleDateString()}
                variant="outlined"
              />
              <Chip
                icon={<AccessTime />}
                label={event.time}
                variant="outlined"
              />
              <Chip
                icon={<Group />}
                label={`${event.registeredUsers?.length || 0} Registered`}
                variant="outlined"
              />
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom>
              Description
            </Typography>
            <Typography variant="body1" paragraph>
              {event.description}
            </Typography>

            {event.organizer && (
              <>
                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                  Organizer
                </Typography>
                <Typography variant="body1">
                  {event.organizer}
                </Typography>
              </>
            )}
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                position: 'sticky',
                top: 24
              }}
            >
              <Typography variant="h6" gutterBottom>
                Event Details
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" color="text.secondary">
                  Registration Fee
                </Typography>
                <Typography variant="h6" color="primary">
                  ₹{event.registrationFees || 0}
                </Typography>
              </Box>

              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<Payment />}
                onClick={handlePayment}
                fullWidth
                sx={{ mt: 2 }}
              >
                Register Now
              </Button>

              <Typography variant="caption" color="text.secondary" align="center">
                Secure payment powered by Razorpay
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default EventDetails; 