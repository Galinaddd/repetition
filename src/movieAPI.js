import axios from 'axios';

const API_KEY = 'cc007006eb9f47c2d0b09069b6e665b4';
const BASE_URL = 'https://api.themoviedb.org/3';

// https://api.themoviedb.org/3/search/movie
export const getTranding = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const searchMovie = async query => {
  const responce = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  console.log(responce.data.results);
  return responce.data.results;
};

export const getMovieDeatails = async id => {
  const responce = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );

  return responce.data;
};

export const getMovieCredits = async id => {
  const responce = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );

  return responce.data;
};

export const getMovieReviews = async id => {
  const responce = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );

  return responce.data;
};
