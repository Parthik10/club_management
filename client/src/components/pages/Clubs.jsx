import React, { useEffect, useState } from 'react';
import { fetchClubs } from '../../utils/api';
import ClubCard from '../cards/ClubCard';

function Clubs() {
  const [clubs, setClubs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getClubs = async () => {
      try {
        const data = await fetchClubs();
        setClubs(data);
      } catch (err) {
        setError(err.message);
      }
    };
    getClubs();
  }, []);

  return (
    <div className="container mt-5">
      {error && <div className="alert alert-danger">Error: {error}</div>}
      <div className="row">
        {clubs.map((club) => (
          <div key={club._id} className="col-md-4">
            <ClubCard club={club} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clubs;
