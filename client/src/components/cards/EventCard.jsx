import React from 'react';

function EventCard({ event }) {
  return (
    <div className="card event-card">
      <img src={event.poster} className="card-img-top" alt={event.title} />
      <div className="card-body">
        <h5 className="card-title">{event.title}</h5>
        <p className="card-text">{event.description}</p>
        <p className="card-text">Date: {new Date(event.date).toLocaleDateString()}</p>
        <p className="card-text">Time: {event.time}</p>
        <p className="card-text">Venue: {event.venue}</p>
      </div>
    </div>
  );
}

export default EventCard;
