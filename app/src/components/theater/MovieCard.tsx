import React from 'react';
import { Movie, Vote } from '../../types/moviesTypes';
import TimingCard from './TimingCard';

interface MovieCardProps {
  movie: Partial<Movie>; // Use Partial if not all properties are guaranteed
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  // Calculate the average vote value (assuming votes are in an array)
  const calculateAverageVote = (votes: Vote[]) => {
    if (!votes || votes.length === 0) return 0; // Return 0 if no votes are present
    const total = votes.reduce((sum, vote) => sum + vote.value, 0);
    return (total / votes.length).toFixed(1); // Return average vote with one decimal place
  };

  const averageVote = calculateAverageVote(movie.votes || []); // Use the votes array from the movie

  return (
    <div className="relative border rounded-lg p-3 my-3 bg-white shadow-md transition-all duration-200 hover:shadow-lg cursor-pointer mx-auto">
      {/* Container for the movie card */}
      <div className="flex justify-between items-start">
        {/* Container for the movie image */}
        <div className="relative flex-shrink-0">
          <img
            src={movie.posterUrl || 'default_image_url'} // Use a fallback image if not available
            alt={movie.title}
            className="w-20 h-28 sm:w-24 sm:h-32 rounded-lg object-cover" // Smaller width and height for the image
          />
        </div>
        {/* Container for the movie details */}
        <div className="flex-grow ml-2">
          <h2 className="text-sm font-semibold sm:text-sm">{movie.title || 'Unknown Title'}</h2>
          <p className="text-xs text-gray-500 sm:text-xs">
            <strong>{movie.genre || 'Unknown Genre'}</strong> • <strong>{movie.duration || 0} mins</strong> • 
            <strong>{averageVote ? `${averageVote} / 10` : 'No Ratings'}</strong> {/* Display the average vote */}
          </p>
        </div>
      </div>
      <hr className="my-2" />
      <TimingCard />
    </div>
  );
};

export default MovieCard;
