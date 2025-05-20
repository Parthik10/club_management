import { Container, Typography, Button, Grid, Box, Paper } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import eventImage from '../../assets/event.jpg';

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <GroupsIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Join Clubs',
      description: 'Discover and join various clubs that match your interests'
    },
    {
      icon: <EventIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Events',
      description: 'Stay updated with upcoming events and activities'
    },
    {
      icon: <AnnouncementIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
      title: 'Announcements',
      description: 'Get the latest news and updates from your clubs'
    }
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          color: 'white',
          py: 8,
          mb: 6
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom
                sx={{
                  fontWeight: 700,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                }}
              >
                Welcome to Club Management
              </Typography>
              <Typography 
                variant="h5" 
                paragraph
                sx={{
                  color: '#e0e0e0',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                }}
              >
                Connect, Collaborate, and Create with Your Community
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => navigate('/clubs')}
                  sx={{ mr: 2 }}
                >
                  Explore Clubs
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  onClick={() => navigate('/events')}
                >
                  View Events
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={eventImage}
                alt="Club Management"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  border: '4px solid rgba(255,255,255,0.1)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  }
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography 
          variant="h3" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{
            color: '#1a1a2e',
            fontWeight: 700,
          }}
        >
          What We Offer
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.2s',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
                  '&:hover': {
                    transform: 'translateY(-8px)'
                  }
                }}
              >
                {feature.icon}
                <Typography variant="h5" component="h3" sx={{ mt: 2, mb: 1, color: '#1a1a2e' }}>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', 
        py: 8 
      }}>
        <Container maxWidth="md">
          <Typography 
            variant="h4" 
            component="h2" 
            align="center" 
            gutterBottom 
            sx={{ 
              color: 'white',
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Ready to Get Started?
          </Typography>
          <Typography 
            variant="h6" 
            align="center" 
            sx={{ 
              color: '#e0e0e0',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }} 
            paragraph
          >
            Join our community today and start exploring clubs and events
          </Typography>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => navigate('/register')}
              sx={{ mr: 2 }}
            >
              Sign Up Now
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
