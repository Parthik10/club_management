import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { login } from '../../utils/auth';
import { useAuth } from '../../context/AuthContext';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData.email, formData.password);
      authLogin(response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      setOpen(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (error) {
      if (error.code === 'ERR_NETWORK') {
        setError('Network error, please try again later.');
      } else {
        setError('Login failed. Please check your credentials.');
      }
    }
  };

  return (
    <div className="container mt-5" id="login-form">
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <div className="input-group">
            <span className="input-group-text">
              <FaEnvelope />
            </span>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <div className="input-group">
            <span className="input-group-text">
              <FaLock />
            </span>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
      {open && (
        <div className="alert alert-success mt-3" role="alert">
          Login successful!
        </div>
      )}
      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}

export default Login;
