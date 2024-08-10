import React, { useState } from 'react';
import { movies } from '../../data/movie/movies'; // Import movies data
import { FaSearch, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa'; // Import icons for search, map marker, and info

// Define the props interface for the TheaterCard component
interface TheaterCardProps {
  selectedMovieId: number; // ID of the selected movie to display theaters for
}

// TheaterCard component to display theaters and their showtimes
const TheaterCard: React.FC<TheaterCardProps> = ({ selectedMovieId }) => {
  // State to manage search query for filtering theaters
  const [searchQuery, setSearchQuery] = useState('');

  // Find the selected movie by its ID
  const selectedMovie = movies.find((movie) => movie.id === selectedMovieId);

  // Handle case where no movie is found
  if (!selectedMovie) {
    return <div>No theaters available for the selected movie.</div>;
  }

  // Handler for updating search query
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter theaters based on search query
  const filteredTheaters = selectedMovie.theaters.filter((theater) =>
    theater.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full px-6 py-8 bg-gray-50">
      <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
        {/* Search input for filtering theaters */}
        <div className="relative flex items-center mb-6">
          <FaSearch className="absolute left-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search Cinemas"
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-3 pl-12 w-full rounded-full bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* Display filtered theaters */}
        {filteredTheaters.length > 0 ? (
          filteredTheaters.map((theater, theaterIndex) => (
            <div key={theaterIndex} className="bg-white rounded-2xl mb-6 p-4 shadow-sm">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2 md:text-lg">{theater.name}</h3>
                <div className="flex flex-wrap justify-start space-x-4 mb-4">
                  {/* Get Directions button */}
                  <button className="px-4 py-2 bg-gray-100 border-none rounded-full hover:bg-gray-200 text-sm flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    Get Directions
                  </button>
                  {/* More Info button */}
                  <button className="px-4 py-2 bg-gray-100 border-none rounded-full hover:bg-gray-200 text-sm flex items-center">
                    <FaInfoCircle className="mr-2" />
                    More Info
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-4 mb-4">
                  {/* Display showtimes */}
                  {theater.showtimes.map((time, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 bg-gray-100 rounded-full text-green-600 text-base font-medium hover:bg-gray-200 md:px-3 md:py-2 md:text-sm"
                    >
                      {time}
                    </button>
                  ))}
                </div>
                {/* Separator between theater cards */}
                {theaterIndex < filteredTheaters.length - 1 && (
                  <hr className="my-4 border-gray-200" />
                )}
              </div>
            </div>
          ))
        ) : (
          <div>No theaters match your search criteria.</div>
        )}
      </div>
    </div>
  );
};

export default TheaterCard;
