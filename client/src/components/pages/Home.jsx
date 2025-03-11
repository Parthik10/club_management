import React from 'react';
import { useAuth } from '../../hooks/useAuth'; // Custom hook to get auth status and user role

function Home() {
  const { userRole } = useAuth();

  return (
    <div>
      
      {userRole === 'admin' && (
        <button>Create Event</button>
      )}

    </div>
  );
}

export default Home;
