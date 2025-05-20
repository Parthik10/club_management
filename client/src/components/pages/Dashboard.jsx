import React, { useEffect, useState } from 'react';
import Announcements from '../forms/Announcement';
import Event from '../forms/Event';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Avatar,
  Chip,
  Divider,
  CircularProgress,
  Card,
  CardContent,
  IconButton,
  Tab,
  Tabs
} from '@mui/material';
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Business as BusinessIcon,
  AdminPanelSettings as AdminIcon,
  Event as EventIcon,
  Announcement as AnnouncementIcon,
  Edit as EditIcon
} from '@mui/icons-material';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  if (!user) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh'
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* User Profile Card */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                p: 1
              }}
            >
              <IconButton color="primary">
                <EditIcon />
              </IconButton>
            </Box>
            <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Avatar
                src={user.logo}
                alt={user.name}
                sx={{
                  width: 120,
                  height: 120,
                  mx: 'auto',
                  mb: 2,
                  border: '4px solid',
                  borderColor: 'primary.main'
                }}
              />
              <Typography variant="h5" gutterBottom>
                {user.name}
              </Typography>
              <Chip
                icon={<AdminIcon />}
                label="Admin"
                color="primary"
                sx={{ mb: 2 }}
              />
              <Divider sx={{ my: 2 }} />
              <Box sx={{ textAlign: 'left' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <BusinessIcon sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body1">
                    <strong>Club:</strong> {user.clubName}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PersonIcon sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body1">
                    <strong>Club Head:</strong> {user.clubHead}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="body1">
                    <strong>Email:</strong> {user.email}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Chip
                    label="Active"
                    color="success"
                    size="small"
                    sx={{ mr: 1 }}
                  />
                </Box>
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, fontStyle: 'italic' }}
              >
                {user.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Main Content Area */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="fullWidth"
              sx={{ borderBottom: 1, borderColor: 'divider' }}
            >
              <Tab
                icon={<AnnouncementIcon />}
                label="Announcements"
                iconPosition="start"
              />
              <Tab
                icon={<EventIcon />}
                label="Events"
                iconPosition="start"
              />
            </Tabs>
          </Paper>

          <Box sx={{ mt: 2 }}>
            {activeTab === 0 ? (
              <Announcements />
            ) : (
              <Event />
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
