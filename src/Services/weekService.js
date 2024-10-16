import axios from 'axios';

const API_KEY = '31db9e1ec860cf07e1fae9ebc4189128';

export const getMoviesThisWeek = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&primary_release_date.gte=${getStartDate()}&primary_release_date.lte=${getEndDate()}`
    );
    return response.data.results; 
  } catch (error) {
    console.error("Error fetching movies this week:", error);
    return [];
  }
};


const getStartDate = () => {
  const today = new Date();
  const firstDay = today.getDate() - today.getDay(); 
  const startDate = new Date(today.setDate(firstDay)).toISOString().split('T')[0];
  return startDate;
};

const getEndDate = () => {
  const today = new Date();
  const lastDay = today.getDate() - today.getDay() + 6;
  const endDate = new Date(today.setDate(lastDay)).toISOString().split('T')[0];
  return endDate;
};
