import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../Services/tmdbService';
import MovieCard from './MovieCard';
import './MovieSection.css';

const MovieSection = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setLoading(true);
      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        setError('Error fetching trending movies');
        console.error('Error fetching trending movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  if (loading) return <div className="loading">Cargando películas...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="movie-section">
      <div className="movie-card-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieSection;
