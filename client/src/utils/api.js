import axios from 'axios';

const API_URL = import.meta.env.MODE === 'development' ? import.meta.env.VITE_API_URL : import.meta.env.VITE_API_URL_PROD;

export const fetchAnnouncements = async () => {
  try {
    const response = await axios.get(`${API_URL}/announcements`);
    return response.data;
  } catch (error) {
    if (error.response) {
    }
    throw error;
  }
};

export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}/events`);
    return response.data;
  } catch (error) {
    if (error.response) {
    }
    throw error;
  }
};

export const fetchClubs = async () => {
  try {
    const response = await axios.get(`${API_URL}/auth/getclubs`); 
    return response.data;
  } catch (error) {
    if (error.response) {
    }
    throw error;
  }
};

export const createAnnouncement = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/announcements`, data);
    return response.data;
  } catch (error) {
    if (error.response) {
    }
    throw error;
  }
};

export const createEvent = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/events`, data);
    return response.data;
  } catch (error) {
    if (error.response) {
    }
    throw error;
  }
};

export const createClub = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, data);
    return response.data;
  } catch (error) {
    if (error.response) {
    }
    throw error;
  }
};

export const getEventById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/events/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch event details');
  }
};
