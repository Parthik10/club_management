import React, { useEffect, useState } from 'react';
import { fetchClubs } from '../../utils/api';
import ClubCard from '../cards/ClubCard';
import { Container, Typography, Grid, Box, Alert } from '@mui/material';

function Clubs() {
  const [clubs, setClubs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getClubs = async () => {
      try {
        const data = await fetchClubs();
        setClubs(data);
      } catch (err) {
        setError(err.message);
      }
    };
    getClubs();
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1b1b2f 0%, #3c096c 100%)',
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
            Our Clubs
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ 
              mb: 4,
              color: '#e0e0e0',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            Explore and join our diverse range of clubs
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 4 }}>
            Error: {error}
          </Alert>
        )}

        {clubs.length === 0 && !error ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" sx={{ color: '#e0e0e0' }}>
              No clubs available at the moment.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={4}>
            {clubs.map((club) => (
              <Grid item key={club._id} xs={12} sm={6} md={4}>
                <ClubCard club={club} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default Clubs;
