import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchAnnouncements = async () => {
  const response = await axios.get(`${API_URL}/announcements`);
  return response.data;
};

export const fetchEvents = async () => {
  const response = await axios.get(`${API_URL}/events`);
  return response.data;
};

export const fetchClubs = async () => {
  const response = await axios.get(`${API_URL}/auth/clubs`); // Updated endpoint
  return response.data;
};

export const createAnnouncement = async (data) => {
  const response = await axios.post(`${API_URL}/announcements`, data);
  return response.data;
};

export const createEvent = async (data) => {
  const response = await axios.post(`${API_URL}/events`, data);
  return response.data;
};

export const createClub = async (data) => {
  const response = await axios.post(`${API_URL}/auth/register`, data); // Updated endpoint
  return response.data;
};
