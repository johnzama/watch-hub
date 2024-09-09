// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Create a CSS file for navbar styling

const Navbar = () => {
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
    </nav>
  );
};

export default Navbar;

