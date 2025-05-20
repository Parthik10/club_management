import React from 'react';
import { Box, Container, Typography, Button, Grid, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

function Footer() {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate('/admin-login');
  };

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              Club Management System
            </Typography>
            <Typography variant="body2" sx={{ color: '#e0e0e0' }}>
              A platform for managing clubs, events, and announcements efficiently.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              Developers
            </Typography>
            <Typography variant="body2" sx={{ color: '#e0e0e0' }}>
              Parthik Mangal
            </Typography>
            <Typography variant="body2" sx={{ color: '#e0e0e0' }}>
              Sweta Chand
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/clubs" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#e0e0e0' } }}>
                Clubs
              </Link>
              <Link href="/events" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#e0e0e0' } }}>
                Events
              </Link>
              <Link href="/announcements" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#e0e0e0' } }}>
                Announcements
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<AdminPanelSettingsIcon />}
            onClick={handleAdminClick}
            sx={{
              borderColor: 'rgba(255,255,255,0.3)',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            Admin Panel
          </Button>
        </Box>
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 4, color: '#e0e0e0' }}
        >
          © {new Date().getFullYear()} Club Management System. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer; 