// src/api/tmdb.js
import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
  baseURL: BASE_URL,
});

export const fetchMovies = async () => {
  const response = await tmdb.get(`/movie/popular?api_key=${API_KEY}`);
  return response.data.results;
};

export const fetchTVShows = async () => {
  const response = await tmdb.get(`/tv/popular?api_key=${API_KEY}`);
  return response.data.results;
};

export const searchContent = async (query) => {
  const response = await tmdb.get(
    `/search/multi?api_key=${API_KEY}&query=${query}`
  );
  return response.data.results;
};

