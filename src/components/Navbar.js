// src/components/Navbar.js
import React, { useState } from 'react'; // Make sure useState is imported
import { Link } from 'react-router-dom';
import Search from './Search'; // Import your Search component

const Navbar = () => {
  const [searchResults, setSearchResults] = useState([]); // Correctly define state for search results

  const handleSearchResults = (results) => {
    setSearchResults(results); // Now setSearchResults is defined and used correctly
    // Use search results as needed, e.g., display them
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">WatchHub</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/tv-shows">TV Shows</Link>
        </li>
        <li>
          <Link to="/my-list">My List</Link>
        </li>
      </ul>
      <Search onSearchResults={handleSearchResults} />
      {/* Optionally, display search results */}
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((result) => (
            <div key={result.id}>{result.title || result.name}</div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

