import React, { useEffect, useState } from 'react';
import { fetchClubs } from '../../utils/api';
import ClubCard from '../cards/ClubCard';

function Clubs() {
  const [clubs, setClubs] = useState([]);
  const [error, setError] = useState(null); // Add state for error

  useEffect(() => {
    const getClubs = async () => {
      try {
        const data = await fetchClubs();
        setClubs(data);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError('Clubs not found.'); // Handle 404 error
        } else if (err.code === 'ERR_NETWORK') {
          setError('Network error, please try again later.'); // Handle network error
        } else {
          setError(err.message); // Set error message
        }
      }
    };
    getClubs();
  }, []);

  return (
    <div>
      {error && <div>Error: {error}</div>} {/* Display error message */}
      {clubs.map((club) => (
        <ClubCard key={club._id} club={club} />
      ))}
    </div>
  );
}

export default Clubs;
