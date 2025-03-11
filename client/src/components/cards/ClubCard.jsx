import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function ClubCard({ club }) {
  return (
    <Card sx={{ maxWidth: 345, border: '1px solid #ccc', margin: '16px' }}>
      <CardMedia
        component="img"
        height="140"
        image={club.logo}
        alt={club.clubName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {club.clubName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {club.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Club Head: {club.clubHead}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ClubCard;
