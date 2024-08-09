import React from 'react';
import Header from '../components/movie/Header';
import TheaterCard from '../components/movie/TheaterCard';
import { movies } from '../data/movies';
import DateAndFilters from '../components/movie/DateAndFilters';
import { Movie } from '../data/types';
import NavBar from '../components/theater/NavBar';

const App: React.FC = () => {
  const movie: Movie = movies[0]; // Ensure the structure matches the Movie interface

  return (
    <div className="app  mx-auto bg-gray-100">
      <NavBar/>
      <Header movie={movie} /> {/* Ensure the movie prop has all required fields */}
      <DateAndFilters />
      <TheaterCard selectedMovieId={movie.id} />
    </div>
  );
};

export default App;
