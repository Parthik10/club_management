import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';

function ClubCard({ club }) {
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
        image={club.logo || '/default-club-logo.jpg'}
        alt={club.clubName}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
          {club.clubName}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 2 }}>
          {club.description}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Chip
            icon={<PeopleIcon />}
            label={`Club Head: ${club.clubHead}`}
            color="primary"
            variant="outlined"
            sx={{ mr: 1 }}
          />
          {club.memberCount && (
            <Chip
              icon={<PeopleIcon />}
              label={`${club.memberCount} Members`}
              color="secondary"
              variant="outlined"
            />
          )}
        </Box>

        <Box sx={{ mt: 'auto', pt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => navigate(`/clubs/${club._id}`)}
          >
            View Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ClubCard;
