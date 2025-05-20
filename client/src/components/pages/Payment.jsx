import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  CircularProgress,
  Alert,
  Divider
} from '@mui/material';
import { Payment as PaymentIcon } from '@mui/icons-material';
import { getEventById } from '../../utils/api';

function Payment() {
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

  const handlePayment = async () => {
    try {
      // This will be implemented when integrating Razorpay
      // 1. Create order on backend
      // 2. Initialize Razorpay
      // 3. Handle payment success/failure
      console.log('Payment integration will be implemented here');
    } catch (err) {
      setError('Payment initialization failed. Please try again.');
    }
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
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  if (!event) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="info">Event not found</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Complete Your Registration
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Event Details
          </Typography>
          <Typography variant="body1" gutterBottom>
            {event.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {new Date(event.date).toLocaleDateString()} at {event.time}
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Payment Summary
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body1">Registration Fee</Typography>
            <Typography variant="body1">₹{event.registrationFees || 0}</Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6">Total Amount</Typography>
            <Typography variant="h6" color="primary">₹{event.registrationFees || 0}</Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<PaymentIcon />}
            onClick={handlePayment}
            sx={{ minWidth: 200 }}
          >
            Pay Now
          </Button>
          <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 2 }}>
            Secure payment powered by Razorpay
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default Payment; 