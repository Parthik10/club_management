import React from 'react';

function AnnouncementCard({ announcement }) {
  return (
    <div className="card announcement-card">
      <div className="card-body">
        <h5 className="card-title">{announcement.title}</h5>
        <p className="card-text">{announcement.message}</p>
        <p className="card-text">Club: {announcement.clubName}</p>
        <p className="card-text">Created By: {announcement.createdBy}</p>
      </div>
    </div>
  );
}

export default AnnouncementCard;
