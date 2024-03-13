import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '553cfa22e40cda1b81fd4b29995b0acb';

export async function fetchMovies(page) {
  const response = await axios.get(
    `trending/movie/day?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  return response.data;
}

export async function fetchMovieById(movieId) {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}
export async function fetchMovieCast(movieId) {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}
export async function fetchMovieReviews(movieId) {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}
export async function fetchMoviesByQuery(query, page) {
  const response = await axios.get(
    `search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=${page}`
  );
  return response.data;
}
