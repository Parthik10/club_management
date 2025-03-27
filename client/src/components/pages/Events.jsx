import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../../utils/api';
import EventCard from '../cards/EventCard';

function Events() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      }
    };
    getEvents();
  }, []);

  return (
    <div className="container mt-5">
      {error && <div className="alert alert-danger">Error: {error}</div>}
      <div className="row">
        {events.map((event) => (
          <div key={event._id} className="col-md-4">
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
