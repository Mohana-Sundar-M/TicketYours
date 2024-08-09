import React, { useState } from 'react';
import Header from '../components/movieslist/Header';
import Filters from '../components/movieslist/Filters';
import MoviesList from '../components/movieslist/MoviesList';
import { moviesData } from '../data/moviespage/movieslist';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CloseIcon from '@mui/icons-material/Close';
import Nav from '../components/login/NavBar';

const MoviePage: React.FC = () => {
  const [filteredMovies, setFilteredMovies] = useState(moviesData);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleFilterChange = (filters: any) => {
    const filtered = moviesData.filter(movie => {
      const matchesLanguages = filters.languages.length === 0 || movie.languages.some(lang => filters.languages.includes(lang));
      const matchesGenres = filters.genres.length === 0 || filters.genres.includes(movie.genre);
      const matchesFormat = filters.format.length === 0 || movie.format.some(format => filters.format.includes(format));
      return matchesLanguages && matchesGenres && matchesFormat;
    });
  
    setFilteredMovies(filtered);
  };
  
  const handleMovieClick = (movie: any) => {
    console.log('Movie clicked:', movie);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Nav/>
      <Header />
      <div className="flex flex-col lg:flex-row px-4 lg:px-16 py-8 gap-8">
        {/* Filters Component for Desktop View */}
        <div className="lg:w-64 hidden lg:block">
          <Filters onFilterChange={handleFilterChange} />
        </div>

        {/* Main Content */}
        <div className={`flex-1 ${isFilterVisible ? 'lg:ml-64' : ''}`}>
          <MoviesList movies={filteredMovies} onMovieClick={handleMovieClick} />
        </div>

        {/* Floating Filter Icon */}
        <div
          className={`fixed bottom-4 right-4 bg-teal-500 text-white p-4 rounded-full shadow-lg cursor-pointer ${isFilterVisible ? 'hidden' : 'block'} lg:hidden`}
          onClick={toggleFilterVisibility}
        >
          <FilterAltIcon />
        </div>

        {/* Sliding Filter Component for Mobile View */}
        <div
          className={`fixed top-0 right-0 bg-white shadow-lg p-4 h-full w-[25rem] lg:hidden transform ${isFilterVisible ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out overflow-auto`}
          style={{ zIndex: 1000 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Filters</h2>
            <CloseIcon className="cursor-pointer" onClick={toggleFilterVisibility} />
          </div>
          <Filters onFilterChange={handleFilterChange} />
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
