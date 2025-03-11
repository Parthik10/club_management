import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

function Payment() {
  const [formData, setFormData] = useState({
    eventId: '',
    userEmail: '',
    amount: '',
    status: '',
    transactionId: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Container>
      <Typography variant="h4">Create Payment</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Event ID"
          name="eventId"
          value={formData.eventId}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="User Email"
          name="userEmail"
          value={formData.userEmail}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Amount"
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Transaction ID"
          name="transactionId"
          value={formData.transactionId}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Create Payment
        </Button>
      </form>
    </Container>
  );
}

export default Payment;
