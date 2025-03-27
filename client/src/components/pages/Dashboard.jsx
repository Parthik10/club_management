import React, { useEffect, useState } from 'react';
import Announcements from '../forms/Announcement';
import Event from '../forms/Event';

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
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card dashboard-card">
            <img
              src={user.logo}
              alt="User Avatar"
              className="avatar"
            />
            <h5>{user.name}</h5>
            <ul className="dashboard-details">
              <li><strong>Club Name:</strong> {user.clubName}</li>
              <li><strong>Club Head:</strong> {user.clubHead}</li>
              <li><strong>Username:</strong> {user.name}</li>
              <li><strong>Email:</strong> {user.email}</li>
              <li><strong>Status:</strong> Active</li>
              <li><strong>Role:</strong> Admin</li>
              <li>{user.description}</li>
            </ul>
          </div>
        </div>
        <div className="col-md-8">
          <Announcements />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <Event />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
