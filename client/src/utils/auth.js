import axios from 'axios';

export const login = async (email, password) => {
  const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
  localStorage.setItem('token', response.data.token);
  localStorage.setItem('user', JSON.stringify(response.data.user));
  return response.data;
};

export const register = async (data) => {
  await axios.post('http://localhost:5000/api/auth/register', data);
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};
