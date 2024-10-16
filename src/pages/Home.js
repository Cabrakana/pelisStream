
import React, { Suspense, lazy } from 'react';
import MovieSection from '../components/MovieSection';
import LoadingSpinner from '../components/LoadingSpinner';
const FeaturedMovies = lazy(() => import('../components/FeaturedMovies'));

const Home = ({ trendingMovies }) => {
  return (
    <div>
      <MovieSection title="Trending" movies={trendingMovies} />
      <Suspense fallback={<LoadingSpinner />}>
      <FeaturedMovies />

      </Suspense>
    </div>
  );
};

export default Home;
