// TheaterCard.tsx
import React from 'react';
import { Theater } from '../../types';
import MovieCard from './MovieCard';

interface TheaterCardProps {
  theater: Theater;
}

const TheaterCard: React.FC<TheaterCardProps> = ({ theater }) => {
  return (
    <div className="my-8 ">
      {theater.movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default TheaterCard;