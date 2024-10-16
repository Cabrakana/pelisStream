import axios from 'axios';

const API_KEY = '31db9e1ec860cf07e1fae9ebc4189128'; 
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getTrendingMovies = async () => {
  try {
    const response = await api.get('/trending/movie/week');
    return response.data.results;
  } catch (error) {
    console.error('Error obteniendo las películas en tendencia:', error);
    throw error;
  }
};


export const searchMovies = async (query) => {
  try {
    const response = await api.get('/search/movie', {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error buscando películas:', error);
    throw error;
  }
};


export const getMovieDetails = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error obteniendo detalles de la película:', error);
    throw error;
  }
};
