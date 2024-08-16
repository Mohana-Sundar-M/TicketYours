import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../public/SearchBar';

// Define the Movie type
type Movie = {
  title: string;
  rating: number;
  votes: string;
  languages: string[];
  genre: string;
  format: string[];
  image: string;
  id: string; // Add an ID field for unique identification
};

// Define the properties for the MoviesList component
type MoviesListProps = {
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
};

// Functional component for displaying a list of movies with filtering options
const MoviesList: React.FC<MoviesListProps> = ({ movies, onMovieClick }) => {
  const navigate = useNavigate();
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Define available languages for filtering
  const languages = ['Hindi', 'English', 'Gujarati', 'Korean', 'Marathi', 'Tamil', 'Telugu', 'Kannada', 'Malayalam'];

  // Toggle the selected language filter
  const handleLanguageClick = (language: string) => {
    setSelectedLanguages(prev =>
      prev.includes(language)
        ? prev.filter(item => item !== language) // Remove language if already selected
        : [...prev, language] // Add language if not selected
    );
  };

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Filter movies based on selected languages and search term
  const filteredMovies = movies.filter(movie =>
    (selectedLanguages.length === 0 || movie.languages.some(lang => selectedLanguages.includes(lang))) &&
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle movie click event
  const handleMovieClick = (movie: Movie) => {
    navigate(`/movie/${movie.id}`); // Navigate to the movie route with the movie ID
    onMovieClick(movie); // Optionally call the onMovieClick prop
  };

  return (
    <div className="p-4 md:ml-32">
      <h2 className="text-2xl font-bold mb-4">Movies in Mumbai</h2>

      {/* Integrating the SearchBar component */}
      <SearchBar onSearchChange={handleSearchChange} />

      {/* Language filter buttons */}
      <div className="overflow-x-auto scrollbar-hide mb-4">
        <div className="flex flex-nowrap gap-2">
          {languages.map(lang => (
            <button
              key={lang}
              onClick={() => handleLanguageClick(lang)}
              className={`px-3 py-1 text-sm md:text-base rounded-lg ${selectedLanguages.includes(lang) ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Movie grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredMovies.map(movie => (
          <div
            key={movie.id}
            className="bg-white p-2 rounded-lg shadow-md cursor-pointer"
            onClick={() => handleMovieClick(movie)}
          >
            <div className="relative">
              <img src={movie.image} alt={movie.title} className="w-full h-32 md:h-48 object-cover rounded-t-lg" />
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs md:text-sm p-1 rounded">
                {movie.rating} / 10 ({movie.votes} votes)
              </div>
            </div>
            <div className="p-2">
              <h3 className="text-lg font-semibold text-gray-800 truncate">{movie.title}</h3>
              <p className="text-xs md:text-sm text-gray-500">{movie.languages.join(', ')}</p>
              <p className="text-xs md:text-sm text-gray-500">{movie.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;