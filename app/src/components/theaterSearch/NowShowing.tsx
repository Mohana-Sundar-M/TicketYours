import React from 'react';
import { useGetCinemahallsByCityQuery } from '../../services/cinemahallsApi'; // Adjust the import path as needed
import Carousel from './Carousel';

interface NowShowingProps {
  cinemaHallId: string; // Pass the cinema hall ID as a prop
}

const NowShowing: React.FC<NowShowingProps> = ({ cinemaHallId }) => {
  // Use the API query hook to fetch movies by cinema hall
  const { data: moviesData, isLoading, error } = useGetCinemahallsByCityQuery(cinemaHallId);

  // Improved styling for the 'No movies available' message
  const renderCarousel = (message: string) => (
    <div className="flex items-center justify-center h-48 bg-gray-100 rounded-md">
      <p className="text-lg font-semibold text-gray-700">{message}</p>
    </div>
  );

  return (
    <div className="mt-4">
      <h3 className="text-sm font-bold mb-2">Now Showing</h3>
      {isLoading && <p>Loading movies...</p>}
      {error && <p>Error loading movies</p>}
      
      {!isLoading && !error && moviesData ? (
        moviesData.length > 0 ? (
          <Carousel movies={moviesData} />
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
