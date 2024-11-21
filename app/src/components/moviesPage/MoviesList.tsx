import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../public/SearchBar';
import { useGetMoviesQuery } from '../../services/moviesApi';
import { useActiveCity } from '../../context/ActiveCityContext';
import LoadingSpinner from '../public/LoadingSpinner';

type Movie = {
  id: string;
  title: string;
  genre: string;
  posterUrl: string;
};

type MoviesListProps = {
  onMovieClick: (movie: Movie) => void;
  filters: {
    genres: string[];
  };
};

const MoviesList: React.FC<MoviesListProps> = ({ onMovieClick, filters }) => {
  const navigate = useNavigate();
  const { activeCity, activeCityId } = useActiveCity();
  const { data: movies = [], error, isLoading } = useGetMoviesQuery(activeCityId.toString());

  const [searchTerm, setSearchTerm] = useState<string>('');

  const languages = ['Hindi', 'English', 'Gujarati', 'Korean', 'Marathi', 'Tamil', 'Telugu', 'Kannada', 'Malayalam'];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Validate movies data to ensure required fields exist
  const validMovies = movies.filter(
    (movie: Partial<Movie>) => movie.id && movie.title && movie.genre && movie.posterUrl
  );

  const filteredMovies = validMovies.filter((movie) => {
    const movieGenres = movie.genre.split(',').map((g) => g.trim());
    return (
      (filters.genres.length === 0 || filters.genres.some((genre) => movieGenres.includes(genre))) &&
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleMovieClick = (movie: Movie) => {
    navigate(`/movie/${movie.id}`);
    onMovieClick(movie);
  };

  return (
    <div className="p-4 md:ml-32">
      <h2 className="text-2xl font-bold mb-4">Movies in {activeCity}</h2>

      {/* Search Bar */}
      <div className="mb-4">
        <SearchBar onSearchChange={handleSearchChange} />
      </div>

      {/* Language Filter */}
      <div className="overflow-x-auto scrollbar-hide mb-4">
        <div className="flex flex-nowrap gap-2">
          {languages.map((language) => (
            <button
              key={language}
              className="px-3 py-1 text-sm md:text-base rounded-lg bg-gray-200 text-gray-700"
            >
              {language}
            </button>
          ))}
        </div>
      </div>

      {/* Movies List */}
      {isLoading ? (
        <LoadingSpinner />
      ) : error || validMovies.length === 0 ? (
        <div className="text-center mt-8 mb-8">
          <p className="text-gray-500 text-lg md:text-xl font-medium">
            {error ? 'Something went wrong. Please try again later.' : `No movies found in ${activeCity}.`}
          </p>
        </div>
      ) : filteredMovies.length === 0 ? (
        <div className="text-center mt-8 mb-8">
          <p className="text-gray-500 text-lg md:text-xl font-medium">
            No movies found matching your criteria.
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white p-2 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
              style={{
                width: '220px',
                height: '320px',
              }}
              onClick={() => handleMovieClick(movie)}
            >
              <div className="relative w-full h-4/5">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-2 flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{movie.title}</h3>
                <p className="text-xs md:text-sm text-gray-500">{movie.genre}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesList;
