import React, { useEffect, useState } from 'react';
import { fetchAnnouncements } from '../../utils/api';
import AnnouncementCard from '../cards/AnnouncementCard';

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState(null); // Add state for error

  useEffect(() => {
    const getAnnouncements = async () => {
      try {
        const data = await fetchAnnouncements();
        setAnnouncements(data);
      } catch (err) {
        setError(err.message); // Set error message
      }
    };
    getAnnouncements();
  }, []);

  return (
    <div>
      {error && <div>Error: {error}</div>} {/* Display error message */}
      {announcements.map((announcement) => (
        <AnnouncementCard key={announcement._id} announcement={announcement} />
      ))}
    </div>
  );
}

export default Announcements;
