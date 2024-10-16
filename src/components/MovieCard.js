import React, { useState } from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="movie-card" onClick={handleCardClick}>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title}
          className="movie-card-img"
        />
      ) : (
        <p>No Image</p>
      )}
      {showDetails && (
        <div className="movie-details">
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
          <p>Año: {new Date(movie.release_date).getFullYear()}</p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
