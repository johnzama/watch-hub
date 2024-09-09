// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api/tmdb';
import FeaturedBanner from '../components/FeaturedBanner';
import Carousel from '../components/Carousel';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    };

    getMovies();
  }, []);

  return (
    <div>
      <FeaturedBanner />
      <h1>Popular Movies</h1>
      <Carousel items={movies} />
    </div>
  );
};

export default Home;

