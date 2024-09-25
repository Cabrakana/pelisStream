import React from 'react';
import MovieCard from './MovieCard';
import './MovieSection.css';

const MovieSection = ({ title, movies }) => {
  return (
    <div className="movie-section">
      <h2>{title}</h2>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            genre={movie.genre}
            rating={movie.rating}
            imageUrl={movie.imageUrl}
            duration={movie.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSection;
