import React, { useState } from 'react';
import Header from '../components/public/Banner';
import Filters from '../components/moviesPage/Filters';
import MoviesList from '../components/moviesPage/MoviesList';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CloseIcon from '@mui/icons-material/Close';
import Nav from '../components/public/NavBar';

type FiltersType = {
  languages: string[];
  genres: string[];
  format: string[];
};

const MoviesPage: React.FC = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [filters, setFilters] = useState<FiltersType>({
    languages: [],
    genres: [],
    format: []
  });

  const handleFilterChange = (newFilters: FiltersType) => {
    setFilters(newFilters);
  };

  const handleMovieClick = (movie: any) => {
    console.log('Movie clicked:', movie);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Nav />
      <Header />

      <div className="flex flex-col lg:flex-row px-4 lg:px-16 py-8 gap-8">
        {/* Filters Sidebar for Desktop */}
        <div className="lg:w-64 hidden lg:block">
          <Filters onFilterChange={handleFilterChange} />
        </div>

        {/* Movies List Section */}
        <div className="flex-1">
          <MoviesList onMovieClick={handleMovieClick} filters={filters} />
        </div>

        {/* Filter Toggle Button for Mobile */}
        <div
          className={`fixed bottom-4 right-4 bg-teal-500 text-white p-4 rounded-full shadow-lg cursor-pointer ${
            isFilterVisible ? 'hidden' : 'block'
          } lg:hidden`}
          onClick={toggleFilterVisibility}
        >
          <FilterAltIcon />
        </div>

        {/* Filters Drawer for Mobile */}
        <div
          className={`fixed top-0 right-0 bg-white shadow-lg p-4 h-full w-[20rem] sm:w-[25rem] lg:hidden transform ${
            isFilterVisible ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out overflow-auto`}
          style={{ zIndex: 1000 }}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Filters</h2>
            <CloseIcon className="cursor-pointer" onClick={toggleFilterVisibility} />
          </div>
          <Filters onFilterChange={handleFilterChange} />
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
