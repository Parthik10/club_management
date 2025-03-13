import axios from 'axios';

const BASE_URL = import.meta.env.MODE === 'development' ? import.meta.env.VITE_API_URL : import.meta.env.VITE_API_URL_PROD;

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, { email, password }); // Correct endpoint
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    return response.data;
  } catch (error) {
    if (error.response) {
    }
    throw error;
  }
};

export const register = async (data) => {
  try {
    await axios.post(`${BASE_URL}/auth/register`, data); // Correct endpoint
  } catch (error) {
    if (error.response) {
    }
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};
