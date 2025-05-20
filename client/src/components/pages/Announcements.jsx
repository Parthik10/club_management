import React, { useEffect, useState } from 'react';
import { fetchAnnouncements } from '../../utils/api';
import AnnouncementCard from '../cards/AnnouncementCard';
import { Container, Typography, Grid, Box, Alert } from '@mui/material';

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAnnouncements = async () => {
      try {
        const data = await fetchAnnouncements();
        setAnnouncements(data);
      } catch (err) {
        setError(err.message);
      }
    };
    getAnnouncements();
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #2c1810 0%, #3c096c 100%)',
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
            Announcements
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ 
              mb: 4,
              color: '#e0e0e0',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            Stay updated with the latest news and updates
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 4 }}>
            Error: {error}
          </Alert>
        )}

        {announcements.length === 0 && !error ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" sx={{ color: '#e0e0e0' }}>
              No announcements at the moment.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={4}>
            {announcements.map((announcement) => (
              <Grid item key={announcement._id} xs={12} sm={6} md={4}>
                <AnnouncementCard announcement={announcement} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default Announcements;
