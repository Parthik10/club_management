import React, { useState } from 'react';
// import { TextField, Button, Card, Typography, Snackbar, Alert, InputAdornment, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createAnnouncement } from '../../utils/api';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import accImg from "../../assets/38767.jpg";
import SendIcon from '@mui/icons-material/Send';


function Announcement() {
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    clubName: '',
    createdBy: ''
  });
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAnnouncement(formData);
      setOpen(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      setError('Announcement creation failed. Please try again.');
    }
  };

  return (

    <div className="container mt-4">
    <div className="card p-4 mx-auto">
      <h4 className="mb-3">Create Announcement</h4>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <div className="input-group">
                <span className="input-group-text">
                  <AnnouncementOutlinedIcon />
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <div className="input-group">
                <span className="input-group-text">
                  <LocalPostOfficeOutlinedIcon />
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Club Name</label>
              <div className="input-group">
                <span className="input-group-text">
                  <Groups2OutlinedIcon />
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="clubName"
                  value={formData.clubName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Created By</label>
              <div className="input-group">
                <span className="input-group-text">
                  <BorderColorOutlinedIcon />
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="createdBy"
                  value={formData.createdBy}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-dark">
              Create <SendIcon />
            </button>
          </form>

          {error && <div className="alert alert-danger mt-3">{error}</div>}
          {open && (
            <div className="alert alert-success mt-3">Announcement created successfully!</div>
          )}
        </div>
        <div className="col-md-6">
          <img
            src={accImg}
            alt="Announcement"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Announcement;
