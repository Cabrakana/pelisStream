import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import MovieSection from './components/MovieSection';
import TrendingSection from './components/TrendingSection';
import './App.css';

//imagenes peliculas//

import avatar2 from './ImagenesPeliculas/avatar2.jpeg';
import johnWick from './ImagenesPeliculas/johnwick.JPG';
import fastx from './ImagenesPeliculas/fastx.JPG';
import medellin from './ImagenesPeliculas/Medellin.jpg';
import silo from './ImagenesPeliculas/Silo.jpg';
import guardians from './ImagenesPeliculas/GuardianesGalaxia.jpg';
import Paint from './ImagenesPeliculas/paint.JPG';
import love from './ImagenesPeliculas/loveagain.jpg';


const App = () => {


  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    // Obtener películas de la API de TMDb
    const fetchTrendingMovies = async () => {
      const apiKey = '31db9e1ec860cf07e1fae9ebc4189128';
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
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className="App">
      <Header />

      {/* Sección de Tendencias */}
      <MovieSection title="Trending" movies={trendingMovies} />
    </div>
  );
};

export default App;