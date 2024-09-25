

import React, { useState } from 'react';
import './MovieCard.css';

const MovieCard = ({ title, genre, rating, imageUrl, duration }) => {
  const [watchLater, setWatchLater] = useState(false); 

  const toggleWatchLater = () => {
    setWatchLater(!watchLater); 
  };

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={title} className="movie-image" />
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{genre}</p>
        <p>Rating: {rating}</p>
        <p>{duration}</p>
        <button className="watch-btn" onClick={toggleWatchLater}>
          {watchLater ? 'Watch Now' : 'Watch Later'}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
