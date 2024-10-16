import React from 'react';
import MovieCard from './MovieCard';
import './TrendingSection.css';



import fastx from '../ImagenesPeliculas/fastx.JPG';
import medellin from '../ImagenesPeliculas/Medellin.jpg';
import guardians from '../ImagenesPeliculas/GuardianesGalaxia.jpg';



const TrendingSection = () => {


  const trendingMovies = [
    {
      title: "Fast X",
      genre: "Action, Crime, Thriller",
      rating: "7.0",
      imageUrl: fastx, 
      duration: "2h 21m",
    },
    {
      title: "Medellin",
      genre: "Action, Comedy",
      rating: "6.5",
      imageUrl: medellin,
      duration: "1h 40m",
    },

    {
      title: "Guardians of the Galaxy Vol. 3",
      genre: "Action, Adventure, Sci-Fi",
      rating: "8.0",
      imageUrl: guardians,
      duration: "2h 30m",
    },
  ];

  return (
    <div className="trending-section">
      <h2>Trending Movies</h2>
      <div className="trending-list">
        {trendingMovies.map((movie, index) => (
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

export default TrendingSection;