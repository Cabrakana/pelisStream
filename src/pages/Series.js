import React, { useEffect, useState, Suspense } from 'react';
import MovieSection from '../components/MovieSection'; 
import LoadingSpinner from '../components/LoadingSpinner';
import { getPopularSeries } from '../Services/seriesService';

const Series = () => {
  const [popularSeries, setPopularSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeries = async () => {
      const series = await getPopularSeries();
      setPopularSeries(series);
      setLoading(false);
    };

    fetchSeries();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
  
    <div>
      <h1>Series</h1>
      <MovieSection title="Series Populares" movies={popularSeries} />
      <Suspense fallback={<LoadingSpinner />}>
        {/* Otros componentes si es necesario */}
      </Suspense>
    </div>
  );
};

export default Series;
