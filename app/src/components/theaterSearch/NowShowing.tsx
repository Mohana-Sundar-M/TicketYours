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

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-48">
          <LoadingSpinner />
        </div>
      );
    }
    if (!moviesData || error || moviesData.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center h-48 rounded-md p-4 ">
          
          <p className="text-lg font-semibold text-gray-700">No movies available</p>
        </div>
      );
    }
    return <Carousel movies={moviesData as unknown as Movie[]} />;
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold mb-2">Now Showing</h3>
      {renderContent()}
    </div>
  );
};

export default NowShowing;