// src/components/Search.js
import React, { useState } from 'react';
import { searchContent } from '../api/tmdb';

const Search = ({ onSearchResults }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);

    if (inputValue.length > 2) {
      const results = await searchContent(inputValue);
      setSuggestions(results.slice(0, 5)); // Limit suggestions to top 5 results
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await searchContent(query);
    onSearchResults(results);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Movies or TV Shows..."
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((item) => (
            <li key={item.id}>{item.title || item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;

