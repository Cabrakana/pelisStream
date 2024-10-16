import React, { useState, useEffect, Suspense, lazy } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const Series = lazy(() => import('./pages/Series'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup')); 
const NotFound = lazy(() => import('./pages/NotFound'));






const App = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    
    const fetchTrendingMovies = async () => {
      const apiKey = '31db9e1ec860cf07e1fae9ebc4189128';
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
        );
        const movies = response.data.results.map(movie => ({
          title: movie.title,
          genre: "Unknown",
          rating: movie.vote_average,
          imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          duration: "2h"
        }));
        setTrendingMovies(movies);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home trendingMovies={trendingMovies} />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          
      </div>
    </Router>
  );
};

export default App;
