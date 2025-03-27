import React from 'react';

function ClubCard({ club }) {
  return (
    <div className="card club-card">
      <img src={club.logo} className="card-img-top" alt={club.clubName} />
      <div className="card-body">
        <h5 className="card-title">{club.clubName}</h5>
        <p className="card-text">{club.description}</p>
        <p className="card-text">Club Head: {club.clubHead}</p>
      </div>
    </div>
  );
}

export default ClubCard;
