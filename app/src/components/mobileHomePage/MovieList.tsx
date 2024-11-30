import React, { useEffect } from 'react';
import { useGetMoviesQuery } from '../../services/moviesApi';
import { useActiveCity } from '../../context/ActiveCityContext';
import LoadingSpinner from '../public/LoadingSpinner'; // Assuming you have this spinner component
import ErrorMessage from './ErrorMessage';


const MovieList: React.FC = () => {
  const { activeCityId, activeCity } = useActiveCity(); // Active city from context
  const cityId = activeCityId ? activeCityId.toString() : '';

  // Fetch movies using the cityId, skip if no activeCityId
  const { data, isLoading, error, refetch } = useGetMoviesQuery(cityId, {
    skip: !activeCityId,
  });

  // Re-fetch movies when activeCityId changes
  useEffect(() => {
    if (activeCityId) {
      refetch(); // Trigger refetch when activeCityId changes
    }
  }, [activeCityId, refetch]);

  // Handle Loading state
  if (isLoading) {
    return <LoadingSpinner />; // Show loading spinner when data is being fetched
  }

  // Handle Error state
  if (error || !data) {
    return <ErrorMessage/>;
  }

  const validMovies = data?.filter((movie) => movie.id) || [];

  // If no valid movies are found, show an error message
  if (validMovies.length === 0) {
    return <ErrorMessage />;
  }

  return (
    <div className="px-4 py-4 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Movies In {activeCity}</h2>
        <button
          className="text-sm text-teal-600 flex items-center gap-1"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => {
            // Implement "See All" action (optional)
            console.log('See All button clicked');
          }}
        >
          See All 
          <span className="text-base">{'>'}</span>
        </button>
      </div>

      {/* Grid layout for displaying movies */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {validMovies.map((movie) => (
          <div
            key={movie.id}
            className="w-full border-2 border-gray-300 rounded-lg overflow-hidden shadow-md"
          >
            <div className="relative w-full h-[250px]">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="mt-2 text-md font-semibold">{movie.title}</h3>
              <p className="text-sm text-gray-500">{movie.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
