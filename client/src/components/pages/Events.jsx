import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../../utils/api';
import EventCard from '../cards/EventCard';

function Events() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null); // Add state for error

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (err) {
        if (err.code === 'ERR_NETWORK') {
          setError('Network error, please try again later.'); // Handle network error
        } else {
          setError(err.message); // Set error message
        }
      }
    };
    getEvents();
  }, []);

  return (
    <div>
      {error && <div>Error: {error}</div>} {/* Display error message */}
      {events.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  );
}

export default Events;
