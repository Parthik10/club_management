import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function AnnouncementCard({ announcement }) {
  return (
    <Card sx={{ maxWidth: 345, border: '1px solid #ccc', margin: '16px' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {announcement.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {announcement.message}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Club: {announcement.clubName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Created By: {announcement.createdBy}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AnnouncementCard;
