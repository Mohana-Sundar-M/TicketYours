import React from 'react';
import { Movie } from '../../data/dummyData';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="flex-none w-20" style={{ height: '100px' }}>
      <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover rounded-md" />
      <p className="text-sm text-center mt-2">{movie.title}</p>
    </div>
  );
};
