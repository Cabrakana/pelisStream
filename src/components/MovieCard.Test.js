// MovieCard.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieCard from './MovieCard'; // Ajusta la ruta según tu estructura de carpetas
import '@testing-library/jest-dom/extend-expect';

describe('MovieCard Component', () => {
  const mockMovie = {
    title: 'Test Movie',
    posterPath: 'test-poster.jpg',
    overview: 'This is a test overview of the movie.',
  };

  test('renders MovieCard with title and poster', () => {
    render(<MovieCard movie={mockMovie} />);
    
    // Check if title is rendered
    expect(screen.getByText('Test Movie')).toBeInTheDocument();
    
    // Check if the poster image is rendered
    const image = screen.getByAltText('Test Movie');
    expect(image).toBeInTheDocument();
    expect(image.src).toContain('test-poster.jpg');
  });

  test('shows preview on mouse enter', () => {
    render(<MovieCard movie={mockMovie} />);
    
    expect(screen.queryByText('This is a test overview of the movie.')).not.toBeInTheDocument();


    fireEvent.mouseEnter(screen.getByText('Test Movie'));

    expect(screen.getByText('This is a test overview of the movie.')).toBeInTheDocument();
  });

  test('hides preview on mouse leave', () => {
    render(<MovieCard movie={mockMovie} />);
    
    fireEvent.mouseEnter(screen.getByText('Test Movie'));
    expect(screen.getByText('This is a test overview of the movie.')).toBeInTheDocument();
    
    fireEvent.mouseLeave(screen.getByText('Test Movie'));

    expect(screen.queryByText('This is a test overview of the movie.')).not.toBeInTheDocument();
  });
});
