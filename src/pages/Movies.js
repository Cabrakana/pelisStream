
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieSection from '../components/MovieSection';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = '31db9e1ec860cf07e1fae9ebc4189128';
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
      );
      const fetchedMovies = response.data.results.map(movie => ({
        title: movie.title,
        genre: "Unknown",
        rating: movie.vote_average,
        imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        duration: "2h"
      }));
      setMovies(fetchedMovies);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <MovieSection title="Popular Movies" movies={movies} />
    </div>
  );
};

export default Movies;
