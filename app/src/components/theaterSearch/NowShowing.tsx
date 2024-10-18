import React from 'react';
import { useGetMoviesByCinemaHallQuery } from '../../services/moviesApi'; // Adjust the import path as needed
import Carousel from './Carousel';
import { Movie } from '../../types/moviesTypes'; // Import your Movie type
import LoadingSpinner from '../public/LoadingSpinner';

interface NowShowingProps {
  cinemaHallId: string; // Pass the cinema hall ID as a prop
}

const NowShowing: React.FC<NowShowingProps> = ({ cinemaHallId }) => {
  // Use the API query hook to fetch movies by cinema hall
  const { data: moviesData, isLoading, error } = useGetMoviesByCinemaHallQuery(cinemaHallId);

  // Improved styling for the 'No movies available' message
  const renderCarousel = (message: string) => (
    <div className="flex items-center justify-center h-48 bg-gray-100 rounded-md">
      <p className="text-lg font-semibold text-gray-700">{message}</p>
    </div>
  );

  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold mb-2">Now Showing</h3> {/* Increased font size */}
      {isLoading && <LoadingSpinner/>}
      {!isLoading && !error && moviesData ? (
        moviesData.length > 0 ? (
          <Carousel movies={moviesData as unknown as Movie[]} /> // Ensure moviesData is treated as Movie[]
        ) : (
          renderCarousel('No movies available')
        )
      ) : (
        renderCarousel('No movies available')
      )}
    </div>
  );
};

export default NowShowing;
