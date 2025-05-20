import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function EventCard({ event }) {
  const navigate = useNavigate();

  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 6
        }
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={event.poster || '/default-event-poster.jpg'}
        alt={event.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
          {event.title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2 }}>
          {event.description}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Chip
            icon={<CalendarTodayIcon />}
            label={new Date(event.date).toLocaleDateString()}
            color="primary"
            variant="outlined"
            sx={{ mr: 1, mb: 1 }}
          />
          <Chip
            icon={<AccessTimeIcon />}
            label={event.time}
            color="secondary"
            variant="outlined"
            sx={{ mr: 1, mb: 1 }}
          />
          <Chip
            icon={<LocationOnIcon />}
            label={event.venue}
            color="info"
            variant="outlined"
          />
        </Box>

        <Box sx={{ mt: 'auto', pt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => navigate(`/events/${event._id}`)}
          >
            View Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default EventCard;
