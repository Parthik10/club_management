import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
  Grid,
  Card,
  CardContent,
  InputAdornment,
  CircularProgress,
  Chip,
  Tooltip,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Search as SearchIcon,
  People as PeopleIcon,
  Event as EventIcon,
  Announcement as AnnouncementIcon,
  Payment as PaymentIcon,
  Group as GroupIcon,
  FilterList as FilterListIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { fetchClubs, fetchEvents, fetchAnnouncements } from '../../utils/api';

const API_URL = import.meta.env.MODE === 'development' ? import.meta.env.VITE_API_URL : import.meta.env.VITE_API_URL_PROD;

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index} style={{ padding: '20px 0' }}>
      {value === index && children}
    </div>
  );
}

function AdminDashboard() {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [data, setData] = useState({
    clubs: [],
    events: [],
    announcements: [],
    payments: [],
    eventRegistrations: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editDialog, setEditDialog] = useState({
    open: false,
    type: '',
    item: null,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [stats, setStats] = useState({
    totalClubs: 0,
    totalEvents: 0,
    totalAnnouncements: 0,
    totalPayments: 0,
    totalRegistrations: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      setError(null);

      const allData = {
        clubs: await fetchClubs(),
        events: await fetchEvents(),
        announcements: await fetchAnnouncements(),
        payments: (await axios.get(`${API_URL}/payments`)).data,
        eventRegistrations: (await axios.get(`${API_URL}/event-registrations`)).data,
      };

      setData(allData);

      const statsData = {
        totalClubs: allData.clubs.length,
        totalEvents: allData.events.length,
        totalAnnouncements: allData.announcements.length,
        totalPayments: allData.payments.length,
        totalRegistrations: allData.eventRegistrations.length,
        totalRevenue: allData.payments.reduce((sum, payment) => sum + (payment.amount || 0), 0),
      };
      setStats(statsData);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch data. Please try again later.');
      setLoading(false);
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleEdit = (type, item) => {
    setEditDialog({ open: true, type, item });
  };

  const handleDelete = async (type, id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        let endpoint = '';
        switch (type) {
          case 'clubs':
            endpoint = `${API_URL}/auth/clubs/${id}`;
            break;
          case 'events':
            endpoint = `${API_URL}/events/${id}`;
            break;
          case 'announcements':
            endpoint = `${API_URL}/announcements/${id}`;
            break;
          case 'payments':
            endpoint = `${API_URL}/payments/${id}`;
            break;
          case 'event-registrations':
            endpoint = `${API_URL}/event-registrations/${id}`;
            break;
          default:
            throw new Error('Invalid type');
        }

        await axios.delete(endpoint);
        fetchAllData();
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to delete item');
      }
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      let endpoint = '';
      switch (editDialog.type) {
        case 'clubs':
          endpoint = `${API_URL}/auth/clubs/${editDialog.item._id}`;
          break;
        case 'events':
          endpoint = `${API_URL}/events/${editDialog.item._id}`;
          break;
        case 'announcements':
          endpoint = `${API_URL}/announcements/${editDialog.item._id}`;
          break;
        case 'payments':
          endpoint = `${API_URL}/payments/${editDialog.item._id}`;
          break;
        case 'event-registrations':
          endpoint = `${API_URL}/event-registrations/${editDialog.item._id}`;
          break;
        default:
          throw new Error('Invalid type');
      }

      await axios.put(endpoint, editDialog.item);
      setEditDialog({ open: false, type: '', item: null });
      fetchAllData();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update item');
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filterData = (items) => {
    if (!searchQuery) return items;
    return items.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#1a1a2e', mb: 4 }}>
          Admin Dashboard
        </Typography>

        {/* Statistics Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card sx={{ bgcolor: '#1a1a2e', color: 'white' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <GroupIcon sx={{ mr: 1 }} />
                  <Typography variant="h6">Clubs</Typography>
                </Box>
                <Typography variant="h4">{stats.totalClubs}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card sx={{ bgcolor: '#16213e', color: 'white' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <EventIcon sx={{ mr: 1 }} />
                  <Typography variant="h6">Events</Typography>
                </Box>
                <Typography variant="h4">{stats.totalEvents}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card sx={{ bgcolor: '#0f3460', color: 'white' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <AnnouncementIcon sx={{ mr: 1 }} />
                  <Typography variant="h6">Announcements</Typography>
                </Box>
                <Typography variant="h4">{stats.totalAnnouncements}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card sx={{ bgcolor: '#533483', color: 'white' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <PaymentIcon sx={{ mr: 1 }} />
                  <Typography variant="h6">Payments</Typography>
                </Box>
                <Typography variant="h4">{stats.totalPayments}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card sx={{ bgcolor: '#3c096c', color: 'white' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <PeopleIcon sx={{ mr: 1 }} />
                  <Typography variant="h6">Registrations</Typography>
                </Box>
                <Typography variant="h4">{stats.totalRegistrations}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Card sx={{ bgcolor: '#240046', color: 'white' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <PaymentIcon sx={{ mr: 1 }} />
                  <Typography variant="h6">Revenue</Typography>
                </Box>
                <Typography variant="h4">${stats.totalRevenue}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Search Bar */}
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Paper sx={{ width: '100%', mb: 2 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Clubs" />
            <Tab label="Events" />
            <Tab label="Announcements" />
            <Tab label="Payments" />
            <Tab label="Event Registrations" />
          </Tabs>

          {/* Clubs Tab */}
          <TabPanel value={tabValue} index={0}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Club Head</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filterData(data.clubs).map((club) => (
                    <TableRow key={club._id}>
                      <TableCell>{club.clubName}</TableCell>
                      <TableCell>{club.description}</TableCell>
                      <TableCell>{club.clubHead}</TableCell>
                      <TableCell>
                        <Chip
                          label={club.status || 'Active'}
                          color={club.status === 'Active' ? 'success' : 'default'}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <Tooltip title="Edit">
                          <IconButton onClick={() => handleEdit('clubs', club)}>
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton onClick={() => handleDelete('clubs', club._id)}>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>

          {/* Events Tab */}
          <TabPanel value={tabValue} index={1}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filterData(data.events).map((event) => (
                    <TableRow key={event._id}>
                      <TableCell>{event.title}</TableCell>
                      <TableCell>{new Date(event.date).toLocaleDateString()}</TableCell>
                      <TableCell>{event.venue}</TableCell>
                      <TableCell>
                        <Chip
                          label={event.status || 'Upcoming'}
                          color={event.status === 'Completed' ? 'success' : 'primary'}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <Tooltip title="Edit">
                          <IconButton onClick={() => handleEdit('events', event)}>
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton onClick={() => handleDelete('events', event._id)}>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>

          {/* Announcements Tab */}
          <TabPanel value={tabValue} index={2}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Message</TableCell>
                    <TableCell>Club</TableCell>
                    <TableCell>Created By</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filterData(data.announcements).map((announcement) => (
                    <TableRow key={announcement._id}>
                      <TableCell>{announcement.title}</TableCell>
                      <TableCell>{announcement.message}</TableCell>
                      <TableCell>{announcement.clubName}</TableCell>
                      <TableCell>{announcement.createdBy}</TableCell>
                      <TableCell>
                        <Tooltip title="Edit">
                          <IconButton onClick={() => handleEdit('announcements', announcement)}>
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton onClick={() => handleDelete('announcements', announcement._id)}>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>

          {/* Payments Tab */}
          <TabPanel value={tabValue} index={3}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>User</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filterData(data.payments).map((payment) => (
                    <TableRow key={payment._id}>
                      <TableCell>{payment.user}</TableCell>
                      <TableCell>${payment.amount}</TableCell>
                      <TableCell>
                        <Chip
                          label={payment.status}
                          color={payment.status === 'Completed' ? 'success' : 'warning'}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{new Date(payment.date).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Tooltip title="Edit">
                          <IconButton onClick={() => handleEdit('payments', payment)}>
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton onClick={() => handleDelete('payments', payment._id)}>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>

          {/* Event Registrations Tab */}
          <TabPanel value={tabValue} index={4}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Event</TableCell>
                    <TableCell>User</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filterData(data.eventRegistrations).map((registration) => (
                    <TableRow key={registration._id}>
                      <TableCell>{registration.event}</TableCell>
                      <TableCell>{registration.user}</TableCell>
                      <TableCell>
                        <Chip
                          label={registration.status}
                          color={registration.status === 'Confirmed' ? 'success' : 'warning'}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{new Date(registration.date).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Tooltip title="Edit">
                          <IconButton onClick={() => handleEdit('event-registrations', registration)}>
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton onClick={() => handleDelete('event-registrations', registration._id)}>
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
        </Paper>

        {/* Edit Dialog */}
        <Dialog 
          open={editDialog.open} 
          onClose={() => setEditDialog({ open: false, type: '', item: null })}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>Edit {editDialog.type}</DialogTitle>
          <DialogContent>
            {editDialog.item && (
              <Box component="form" onSubmit={handleEditSubmit} sx={{ mt: 2 }}>
                {Object.keys(editDialog.item).map((key) => {
                  if (key !== '_id' && key !== '__v' && key !== 'createdAt' && key !== 'updatedAt') {
                    return (
                      <TextField
                        key={key}
                        fullWidth
                        label={key.charAt(0).toUpperCase() + key.slice(1)}
                        value={editDialog.item[key]}
                        onChange={(e) =>
                          setEditDialog({
                            ...editDialog,
                            item: { ...editDialog.item, [key]: e.target.value },
                          })
                        }
                        sx={{ mb: 2 }}
                      />
                    );
                  }
                  return null;
                })}
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditDialog({ open: false, type: '', item: null })}>
              Cancel
            </Button>
            <Button onClick={handleEditSubmit} variant="contained" color="primary">
              Save Changes
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
}

export default AdminDashboard; 