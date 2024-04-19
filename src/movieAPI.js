import axios from 'axios';

const API_KEY = 'cc007006eb9f47c2d0b09069b6e665b4';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTranding = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
  );
  //   console.log(response);
  return response.data.results;
};

export const getMovieDeatails = async id => {
  // console.log('id', id);
  // console.log(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  const responce = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );
  // console.log('getMovie');
  // console.log(responce.data);
  return responce.data;
};

export const getMovieCredits = async id => {
  const responce = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  console.log(responce.data);
  return responce.data;
};

// /movies/get-movie-reviews
export const getMovieReviews = async id => {
  const responce = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  console.log(responce.data);
  return responce.data;
};
