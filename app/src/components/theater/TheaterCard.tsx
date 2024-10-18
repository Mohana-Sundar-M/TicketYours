import React from 'react';
import { useGetMoviesByCinemaHallQuery } from '../../services/moviesApi';
import MovieCard from './MovieCard';
import { Movie } from '../../types/moviesTypes'; // Ensure this import is correct

interface TheaterCardProps {
  cinemaHallId: string; // Pass the cinema hall ID as a prop
}

const TheaterCard: React.FC<TheaterCardProps> = ({ cinemaHallId }) => {
  const { data: moviesData, isLoading, error } = useGetMoviesByCinemaHallQuery(cinemaHallId);

  console.log({ moviesData, isLoading, error }); // Log for debugging

  if (isLoading) return <p className="text-center text-gray-600">Loading movies...</p>; // Handle loading state
  
  // Combined error and no movies message
  const noMoviesMessage = (
    <div className="text-center">
      <p className="text-gray-600 font-semibold">No movies currently running in this theater.</p>
      <p className="text-gray-500">Please try again later or check back for updates!</p>
    </div>
  );

  if (error) {
    return (
      <div className="my-8">
        {noMoviesMessage} {/* Display the same message for errors */}
      </div>
    );
  } 

  return (
    <div className="my-8">
      {Array.isArray(moviesData) && moviesData.length > 0 ? (
        moviesData.map((movie) => (
          <MovieCard key={movie.id} movie={movie as unknown as Movie} />
        ))
      ) : (
        noMoviesMessage // Use the same message when there are no movies
      )}
    </div>
  );
};

export default TheaterCard;
