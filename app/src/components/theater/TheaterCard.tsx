import React from 'react';
import { Theater } from '../../data/types';
import MovieCard from './MovieCard';

// Define the props that the TheaterCard component will accept
interface TheaterCardProps {
  theater: Theater;  // Theater object containing details of the theater and its movies
}

const TheaterCard: React.FC<TheaterCardProps> = ({ theater }) => {
  return (
    <div className="my-8">
      {/* Map over the movies array from the theater object and render a MovieCard for each */}
      {theater.movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default TheaterCard;
