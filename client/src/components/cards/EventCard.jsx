import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function EventCard({ event }) {
  return (
    <Card sx={{ maxWidth: 345, border: '1px solid #ccc', margin: '16px' }}>
      <CardMedia
        component="img"
        height="140"
        image={event.poster}
        alt={event.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {event.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date: {new Date(event.date).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Time: {event.time}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Venue: {event.venue}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default EventCard;
