import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../public/SearchBar';
import { useGetMoviesQuery } from '../../services/moviesApi'; // Import the API hook
import { useActiveCity } from '../../context/ActiveCityContext'; // Import the active city context

// Define the Movie type
type Movie = {
  id: string;
  title: string;
  genre: string; // This will be a comma-separated string
  posterUrl: string;
};

// Define the properties for the MoviesList component
type MoviesListProps = {
  onMovieClick: (movie: Movie) => void;
  filters: {
    genres: string[];
  };
};

// Functional component for displaying a list of movies with filtering options
const MoviesList: React.FC<MoviesListProps> = ({ onMovieClick, filters }) => {
  const navigate = useNavigate();
  const { activeCity, activeCityId } = useActiveCity(); // Get the active city and its ID from context
  const { data: movies = [], error, isLoading } = useGetMoviesQuery(activeCityId.toString()); // Fetch movies from the API

  
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Define available languages for filtering (dummy filter)
  const languages = ['Hindi', 'English', 'Gujarati', 'Korean', 'Marathi', 'Tamil', 'Telugu', 'Kannada', 'Malayalam'];

 

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Filter movies based on selected genres, search term, and filters from props
  const filteredMovies = movies.filter(movie => {
    const movieGenres = movie.genre.split(',').map(g => g.trim()); // Split genres by comma
    return (
      (filters.genres.length === 0 || filters.genres.some(genre => movieGenres.includes(genre))) &&
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Handle movie click event
  const handleMovieClick = (movie: Movie) => {
    navigate(`/movie/${movie.id}`); // Navigate to the movie route with the movie ID
    onMovieClick(movie); // Optionally call the onMovieClick prop
  };

  return (
    <div className="p-4 md:ml-32">
      <h2 className="text-2xl font-bold mb-4">Movies in {activeCity}</h2>

      <SearchBar onSearchChange={handleSearchChange} />

      <div className="overflow-x-auto scrollbar-hide mb-4">
        {/* Dummy Language Filter */}
        <div className="flex flex-nowrap gap-2 mb-4">
          {languages.map(language => (
            <button
              key={language}
              className="px-3 py-1 text-sm md:text-base rounded-lg bg-gray-200 text-gray-700"
            >
              {language}
            </button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <div className="text-center text-xl text-gray-500">Loading...</div>
      ) : (
        <>
          {error ? (
            <div className="text-center text-xl text-gray-500">
              No movies found in {activeCity}.
            </div>
          ) : filteredMovies.length === 0 ? (
            <div className="text-center text-xl text-gray-500">No movies found matching your criteria.</div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredMovies.map(movie => (
                <div
                  key={movie.id}
                  className="bg-white p-2 rounded-lg shadow-md cursor-pointer"
                  onClick={() => handleMovieClick(movie)}
                >
                  <div className="relative">
                    <img src={movie.posterUrl} alt={movie.title} className="w-full h-40 md:h-56 object-cover rounded-t-lg" />
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs md:text-sm p-1 rounded">
                      {/* Rating and votes can be displayed here if available */}
                    </div>
                  </div>
                  <div className="p-2">
                    <h3 className="text-lg font-semibold text-gray-800 truncate">{movie.title}</h3>
                    <p className="text-xs md:text-sm text-gray-500">{movie.genre}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MoviesList;
