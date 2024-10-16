import React, { useEffect, useState, Suspense } from 'react';
import MovieSection from '../components/MovieSection';
import LoadingSpinner from '../components/LoadingSpinner';
import { getMoviesThisWeek } from '../Services/weekService';
import { getTrendingMovies } from '../Services/trendingService'; 

const Home = () => {
  const [moviesThisWeek, setMoviesThisWeek] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const [thisWeekMovies, trendingMoviesData] = await Promise.all([
        getMoviesThisWeek(),
        getTrendingMovies(),
      ]);
      setMoviesThisWeek(thisWeekMovies);
      setTrendingMovies(trendingMoviesData);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1>Week's Movies</h1>
      <MovieSection title=" Week's Movies" movies={moviesThisWeek} />
      <h1>Trending Movies</h1>
      <MovieSection title="Trending Movies" movies={trendingMovies} />
      <Suspense fallback={<LoadingSpinner />}>
      </Suspense>
    </div>
  );
};

export default Home;
