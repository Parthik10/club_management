import React, { useEffect, useState } from 'react';
import { Card, Avatar, Typography, Box, Badge, Divider, Grid, Container } from "@mui/material";
import Announcements from "../forms/Announcement";
import Event from "../forms/Event";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="" sx={{ my: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 300, mx: 3, my: 4, p: 3, textAlign: "left" }}>
            {/* User Avatar Section */}
            <Avatar
              src={user.logo}
              sx={{ width: 120, height: 120, mx: "auto", mb: 2, border: "2px solid #000" }}
            />
            <Typography variant="h5">{user.name}</Typography>
            <Badge
              badgeContent="Admin"
              color="secondary"
              sx={{ my: 1, p: 1, borderRadius: 1, bgcolor: "grey.300" }}
            />
            <Divider sx={{ my: 2 }} />
            {/* User Details */}
            <Typography variant="h6" gutterBottom>Details</Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0 }}>
              {[
                { label: "Club Name: ", value: user.clubName },
                { label: "Club head: ", value: user.clubHead },
                { label: "Username: ", value: user.name },
                { label: "Email: ", value: user.email },
                { label: "Status: ", value: "Active" },
                { label: "Role: ", value: "Admin" },
                { label: "", value: user.description },
              ].map((item, index) => (
                <Typography key={index} variant="body2" sx={{ mb: 1, alignItems: "start" }}>
                  <strong>{item.label}</strong> {item.value}
                </Typography>
              ))}
            </Box>
          </Card>
        </Grid>

        <Grid item xs={8}>
          <Announcements />
        </Grid>
      </Grid>

      <Grid item xs={12}>
          <Event />
      </Grid>

    </Container>
  );
}

export default Dashboard;
