import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Buscando:', searchQuery);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>PeliStream</h1>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        ☰ 
      </button>
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <form className="search-bar" onSubmit={handleSearchSubmit}>
          <input 
            type="text" 
            placeholder="Search movies..." 
            value={searchQuery}
            onChange={handleSearchChange} 
          />
          <button type="submit">Search</button>
        </form>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/movies" activeClassName="active">Movies</NavLink></li>
          <li><Link to="/series">Series</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup" className="signup-btn">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
