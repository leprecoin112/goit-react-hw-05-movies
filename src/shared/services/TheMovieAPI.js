import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '7bf0c7ff98c750e184402b2049d5f608';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`trending/all/day?api_key=${API_KEY}`);
  return data;
};

export const getMovieById = async movieId => {
  const { data } = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return data;
};

export const getMovieCastById = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data;
};

export const getMovieReviewsById = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data;
};

export const getMoviesByQuery = async query => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data;
};
