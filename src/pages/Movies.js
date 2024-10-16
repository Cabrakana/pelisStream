// Movies.js
import React, { useEffect, useState, Suspense } from 'react';
import MovieSection from '../components/MovieSection';
import LoadingSpinner from '../components/LoadingSpinner';
import { getMoviesThisWeek } from '../Services/weekService';

const Movies = () => {
  const [moviesThisWeek, setMoviesThisWeek] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMoviesThisWeek();
      setMoviesThisWeek(movies);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1>Movies</h1>
      <MovieSection title="Películas de Esta Semana" movies={moviesThisWeek} />
      <Suspense fallback={<LoadingSpinner />}>
        {/* Otros componentes si es necesario */}
      </Suspense>
    </div>
  );
};

export default Movies;
