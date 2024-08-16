import React, { useState } from 'react';
import Header from '../components/public/Banner';
import Filters from '../components/moviesPage/Filters';
import MoviesList from '../components/moviesPage/MoviesList';
import { moviesData } from '../data/moviespage/movieslist';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CloseIcon from '@mui/icons-material/Close';
import Nav from '../components/public/NavBar';
//This Page Shows the All The Movies Available in the platform
// TypeScript interface for filter criteria (optional, you can define this if you need strict type checking)
interface FilterCriteria {
  languages: string[];
  genres: string[];
  format: string[];
}

// Main functional component for MoviesPage
const MoviesPage: React.FC = () => {
  // State to hold the list of filtered movies
  const [filteredMovies, setFilteredMovies] = useState(moviesData);

  // State to control the visibility of the filter sidebar
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // Handler function to update the filtered movies based on selected filters
  const handleFilterChange = (filters: FilterCriteria) => {
    // Filter movies based on selected filter criteria
    const filtered = moviesData.filter(movie => {
      const matchesLanguages = filters.languages.length === 0 || movie.languages.some(lang => filters.languages.includes(lang));
      const matchesGenres = filters.genres.length === 0 || filters.genres.includes(movie.genre);
      const matchesFormat = filters.format.length === 0 || movie.format.some(format => filters.format.includes(format));
      return matchesLanguages && matchesGenres && matchesFormat;
    });

    // Update the state with filtered movies
    setFilteredMovies(filtered);
  };

  // Handler function for movie click events
  const handleMovieClick = (movie: any) => {
    console.log('Movie clicked:', movie);
  };

  // Toggle visibility of the filter sidebar
  const toggleFilterVisibility = () => {
    setIsFilterVisible(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Nav /> {/* Navigation bar component */}

      <Header /> {/* Page header component */}

      <div className="flex flex-col lg:flex-row px-4 lg:px-16 py-8 gap-8">
        {/* Filters Component for Desktop View */}
        <div className="lg:w-64 hidden lg:block">
          <Filters onFilterChange={handleFilterChange} /> {/* Filters component */}
        </div>

        {/* Main Content */}
        <div className={`flex-1 ${isFilterVisible ? 'lg:ml-64' : ''}`}>
          <MoviesList movies={filteredMovies} onMovieClick={handleMovieClick} /> {/* List of movies */}
        </div>

        {/* Floating Filter Icon */}
        <div
          className={`fixed bottom-4 right-4 bg-teal-500 text-white p-4 rounded-full shadow-lg cursor-pointer ${isFilterVisible ? 'hidden' : 'block'} lg:hidden`}
          onClick={toggleFilterVisibility}
        >
          <FilterAltIcon /> {/* Icon to open filters */}
        </div>

        {/* Sliding Filter Component for Mobile View */}
        <div
          className={`fixed top-0 right-0 bg-white shadow-lg p-4 h-full w-[25rem] lg:hidden transform ${isFilterVisible ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out overflow-auto`}
          style={{ zIndex: 1000 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Filters</h2>
            <CloseIcon className="cursor-pointer" onClick={toggleFilterVisibility} /> {/* Icon to close the filter sidebar */}
          </div>
          <Filters onFilterChange={handleFilterChange} /> {/* Filters component in the sidebar */}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;