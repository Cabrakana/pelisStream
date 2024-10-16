
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>404 - Página No Encontrada</h2>
      <Link to="/">Volver al Home</Link>
    </div>
  );
};

export default NotFound;
