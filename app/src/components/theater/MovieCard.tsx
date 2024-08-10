import React from 'react';
import { Movie } from '../../data/types';
import TimingCard from './TimingCard';

// Define the props that the MovieCard component will accept
interface MovieCardProps {
  movie: Movie;  // Movie object containing details of the movie
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="relative border rounded-lg p-4 my-4 bg-white shadow-lg transition-all duration-200 hover:shadow-xl cursor-pointer mx-auto">
      {/* Container for the movie card */}
      <div className="flex justify-between items-start">
        {/* Container for the movie image */}
        <div className="relative flex-shrink-0">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-24 h-36 sm:w-20 sm:h-28 rounded-lg object-cover"
          />
        </div>
        {/* Container for the movie details */}
        <div className="flex-grow ml-4">
          <h2 className="text-lg font-semibold sm:text-base">{movie.title}</h2>
          <p className="text-sm text-gray-500 sm:text-xs">
            <strong>{movie.genre}</strong> • <strong>{movie.duration}</strong> • <strong>{movie.rating}</strong>
          </p>
        </div>
      </div>
      <hr className="my-4" />
      {/* Map over movie timings and render TimingCard for each */}
      {Object.entries(movie.timings).map(([language, times]) => (
        <TimingCard key={language} timings={times} language={language} />
      ))}
    </div>
  );
};

export default MovieCard;
