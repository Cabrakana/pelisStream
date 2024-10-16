import axios from 'axios';

const API_KEY = '31db9e1ec860cf07e1fae9ebc4189128'; 
export const getPopularSeries = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular series:", error);
    return [];
  }
};
