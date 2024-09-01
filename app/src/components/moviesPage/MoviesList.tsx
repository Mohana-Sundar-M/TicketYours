import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../public/SearchBar';
import { useGetMoviesQuery } from '../../services/moviesApi';
import { useActiveCity } from '../../context/ActiveCityContext';

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

  const [searchTerm, setSearchTerm] = useState<string>("");

  const languages = ['Hindi', 'English', 'Gujarati', 'Korean', 'Marathi', 'Tamil', 'Telugu', 'Kannada', 'Malayalam'];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredMovies = movies.filter(movie => {
    const movieGenres = movie.genre.split(',').map(g => g.trim());
    return (
      (filters.genres.length === 0 || filters.genres.some(genre => movieGenres.includes(genre))) &&
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

      <div className="mb-4">
        <div className="flex justify-start">
          <div className="relative w-full max-w-4xl">
            <SearchBar onSearchChange={handleSearchChange} />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide mb-4">
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
            <div className="flex flex-wrap gap-4">
              {filteredMovies.map(movie => (
                <div
                  key={movie.id}
                  className="bg-white p-2 rounded-lg shadow-md cursor-pointer"
                  style={{
                    width: '220px', // Fixed width
                    height: '320px', // Fixed height
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
        </>
      )}
    </div>
  );
};

export default MoviesList;
