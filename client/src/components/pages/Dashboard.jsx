import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {user && (
        <div>
          <h2>User Details</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <h2>Club Details</h2>
          <p><strong>Club Name:</strong> {user.clubName}</p>
          <p><strong>Description:</strong> {user.description}</p>
          <p><strong>Club Head:</strong> {user.clubHead}</p>
          <p><strong>Logo:</strong> <img src={user.logo} alt="Club Logo" /></p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
