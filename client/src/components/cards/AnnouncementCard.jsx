import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

function AnnouncementCard({ announcement, onEdit, onDelete }) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 20px rgba(0,0,0,0.15)',
          '& .card-header': {
            background: 'linear-gradient(45deg, #2c3e50 0%, #34495e 100%)',
          }
        },
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        background: 'linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%)',
      }}
    >
      <Box
        className="card-header"
        sx={{
          background: 'linear-gradient(45deg, #34495e 0%, #2c3e50 100%)',
          p: 2.5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#ecf0f1',
            fontWeight: 600,
            fontSize: '1.1rem',
            letterSpacing: '0.5px',
          }}
        >
          {announcement.title}
        </Typography>
        <Chip
          label={announcement.clubName}
          size="small"
          sx={{
            bgcolor: 'rgba(236,240,241,0.15)',
            color: '#ecf0f1',
            '& .MuiChip-label': { px: 1.5 },
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(236,240,241,0.2)',
            transition: 'all 0.3s ease',
            '&:hover': {
              bgcolor: 'rgba(236,240,241,0.25)',
            }
          }}
        />
      </Box>
      <CardContent sx={{
        flexGrow: 1,
        p: 3,
        background: 'linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%)',
      }}>
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            color: '#2c3e50',
            lineHeight: 1.7,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: '0.95rem',
          }}
        >
          {announcement.message}
        </Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 'auto',
          pt: 2,
          borderTop: '1px solid rgba(0,0,0,0.08)'
        }}>
          <Typography
            variant="caption"
            sx={{
              color: '#7f8c8d',
              fontSize: '0.8rem',
              fontWeight: 500,
            }}
          >
            Created By: {announcement.createdBy}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {onEdit && (
              <Tooltip title="Edit">
                <IconButton
                  size="small"
                  onClick={() => onEdit(announcement)}
                  sx={{
                    color: '#34495e',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: '#2c3e50',
                      transform: 'scale(1.1)',
                      bgcolor: 'rgba(52,73,94,0.1)',
                    }
                  }}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
            {onDelete && (
              <Tooltip title="Delete">
                <IconButton
                  size="small"
                  onClick={() => onDelete(announcement._id)}
                  sx={{
                    color: '#c0392b',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: '#a93226',
                      transform: 'scale(1.1)',
                      bgcolor: 'rgba(192,57,43,0.1)',
                    }
                  }}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default AnnouncementCard;
