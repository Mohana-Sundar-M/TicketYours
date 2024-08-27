import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/movie/Header';
import TheaterCard from '../components/movie/TheaterCard';
import DateAndFilters from '../components/movie/DateAndFilters';
import NavBar from '../components/public/NavBar2';
import { movies } from '../data/movie/movies';
import { MovieDet } from '../data/movie/types';

/**
 * Movie component displays detailed information about a specific movie.
 * It includes a header with movie details, a section for date and filters,
 * and a theater card showing theaters where the movie is playing.
 */
const Movie: React.FC = () => {
  // Extract the movie ID from the route parameters
  const { id } = useParams<{ id: string }>();
  
  // Find the movie by ID or default to the first movie if ID is not present
  const movie: MovieDet = id ? movies.find(movie => movie.id === parseInt(id)) || movies[0] : movies[0];

  return (
    <div className="app mx-auto bg-gray-100">
      {/* Navigation bar component */}
      <NavBar/>
      
      {/* Header displaying movie details */}
      <Header movie={movie} /> {/* Ensure the movie prop has all required fields */}
      
      {/* Component for date selection and filters */}
      <DateAndFilters />
      
      {/* Theater card showing theaters for the selected movie */}
      <TheaterCard selectedMovieId={movie.id} />
    </div>
  );
};

export default Movie;