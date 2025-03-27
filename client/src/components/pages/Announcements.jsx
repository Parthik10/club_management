import React, { useEffect, useState } from 'react';
import { fetchAnnouncements } from '../../utils/api';
import AnnouncementCard from '../cards/AnnouncementCard';

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAnnouncements = async () => {
      try {
        const data = await fetchAnnouncements();
        setAnnouncements(data);
      } catch (err) {
        setError(err.message);
      }
    };
    getAnnouncements();
  }, []);

  return (
    <div className="container mt-5">
      {error && <div className="alert alert-danger">Error: {error}</div>}
      
      <div className="row">
        {announcements.map((announcement) => (
          <div key={announcement._id} className="col-md-4">
            <AnnouncementCard announcement={announcement} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Announcements;
