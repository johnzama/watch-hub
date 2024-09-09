// src/components/FeaturedBanner.js
import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api/tmdb';

const FeaturedBanner = () => {
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    const getFeaturedMovie = async () => {
      const movies = await fetchMovies();
      setFeaturedMovie(movies[0]); // Display the first movie as the featured movie
    };

    getFeaturedMovie();
  }, []);

  return (
    featuredMovie && (
      <div
        className="featured-banner"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path})`,
        }}
      >
        <div className="featured-banner-content">
          <h2>{featuredMovie.title}</h2>
          <p>{featuredMovie.overview}</p>
        </div>
      </div>
    )
  );
};

export default FeaturedBanner;

