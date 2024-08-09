import React from 'react';

const MovieCard: React.FC<{ movie: { title: string, rating: string, votes: string, language: string[], image: string } }> = ({ movie }) => {
  return (
    <div className="w-full p-2 m-2 rounded-lg shadow-md bg-white">
      <img src={movie.image} alt={movie.title} className="w-full h-40 object-cover rounded-md" />
      <div className="p-2">
        <h3 className="text-sm font-semibold">{movie.title}</h3>
        <p className="text-xs text-gray-600">{movie.rating} / {movie.votes} Votes</p>
        <p className="text-xs text-gray-600">{movie.language.join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieCard;
