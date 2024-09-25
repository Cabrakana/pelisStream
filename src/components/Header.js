
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para buscar películas
    console.log('Buscando:', searchQuery);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>PeliStream</h1>

      </div>
      <nav className="navbar">
        <ul className="nav-links">
        <li><a href="/movies">Home</a></li>
        <li><a href="/movies">Genre</a></li>
        <li><a href="/series">Country</a></li>

      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input 
          type="text" 
          placeholder="Search movies..." 
          value={searchQuery}
          onChange={handleSearchChange} 
        />
        <button type="submit">Search</button>
      </form>


          <li><a href="/movies">Movies</a></li>
          <li><a href="/series">Series</a></li>
          <li><a href="/animation">Animation</a></li>
        </ul>
      </nav>
  
      <div className="login-signup">
        <a href="/login">Login</a>
        <a href="/signup" className="signup-btn">Sign Up</a>
      </div>
    </header>
  );
};

export default Header;
