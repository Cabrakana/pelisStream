
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    console.log('Buscando:', searchQuery);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>PeliStream</h1>
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li>
          <NavLink to="/movies" activeClassName="active"> Movies</NavLink>
          </li>
          <li><Link to="/series">Series</Link></li>
          <li><Link to="/animation">Animation</Link></li>
          </ul>
        <form className="search-bar" onSubmit={handleSearchSubmit}>
          <input 
            type="text" 
            placeholder="Search movies..." 
            value={searchQuery}
            onChange={handleSearchChange} 
          />
          <button type="submit">Search</button>
        </form>
      </nav>
      <div className="login-signup">
        <Link to="/login">Login</Link>
        <Link to="/signup" className="signup-btn">Sign Up</Link>
      </div>
    </header>
  );
};

export default Header;
