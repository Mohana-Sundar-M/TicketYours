import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';
import { useGetCinemahallsByCityAndMovieQuery } from '../../services/cinemahallsApi'; // API service for fetching cinema halls
import { useActiveCity } from '../../context/ActiveCityContext'; // City context
import LoadingSpinner from '../public/LoadingSpinner';


interface TheaterCardProps {
  selectedMovieId: string;
}

const TheaterCard: React.FC<TheaterCardProps> = ({ selectedMovieId }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { activeCityId } = useActiveCity(); // Get the active city ID from context

  // Fetch cinema halls using the city and movie ID
  const { data: cinemaHallsResponse, isLoading, error } = useGetCinemahallsByCityAndMovieQuery({
    cityId: activeCityId.toString(),
    movieId: selectedMovieId,
  });

  const cinemaHalls = Array.isArray(cinemaHallsResponse?.data) ? cinemaHallsResponse.data : [];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredTheaters = cinemaHalls.filter((theater: any) =>
    theater.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) return <LoadingSpinner/>;

  // Check if error is of type FetchBaseQueryError and has status
  if (error && 'status' in error) {
    if (error.status === 404) {
      return <div className="text-center text-gray-500">No Theaters Found For this Movie</div>;
    }
    // Handle other status codes or network errors if needed
    return <div className="text-center text-gray-500">Error loading theaters</div>;
  }

  if (error) {
    return <div className="text-center text-gray-500">Error loading theaters</div>;
  }

  return (
    <div className="w-full px-6 py-8 bg-gray-50">
      <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
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

        {filteredTheaters.length > 0 ? (
          filteredTheaters.map((theater: any, theaterIndex: number) => (
            <div key={theaterIndex} className="bg-white rounded-2xl mb-6 p-4 shadow-sm">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2 md:text-lg">{theater.name}</h3>
                <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 mb-4">
                  <button className="px-4 py-2 w-fit bg-gray-100 border-none rounded-full hover:bg-gray-200 text-sm flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    Get Directions
                  </button>
                  <button className="px-4 py-2 w-fit bg-gray-100 border-none rounded-full hover:bg-gray-200 text-sm flex items-center">
                    <FaInfoCircle className="mr-2" />
                    More Info
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-4 mb-4">
                  {Array.isArray(theater.showtimes) && theater.showtimes.length > 0 ? (
                    theater.showtimes.map((time: string, index: number) => (
                      <button
                        key={index}
                        className="px-4 py-2 bg-white border border-teal-500 rounded-lg text-teal-500 text-base font-semibold hover:bg-teal-50 md:px-3 md:py-2 md:text-sm"
                      >
                        {time}
                      </button>
                    ))
                  ) : (
                    <div>No showtimes available</div>
                  )}
                </div>
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
