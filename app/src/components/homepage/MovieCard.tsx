import React from 'react';
import { SxProps, Theme } from '@mui/material/styles';

// Interface for component props
interface MovieCardProps {
  movie: {
    id: string;
    title: string;
    genre: string;
    posterUrl: string;
  };
  onClick: () => void;
  sx?: SxProps<Theme>;  // Optional sx prop for additional styling
}

// Functional component with props for movie data and styling
const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  return (
    <div
    className="relative flex-none"
    onClick={onClick}  // Attach click handler
  >
    <img
      src={movie.posterUrl}  // Image source from movie object
      alt={movie.title}  // Alt text for accessibility
      className="rounded-lg shadow-md w-40 h-60 object-cover"  // Increased width and height for the image
    />
    <div className="mt-2 w-40">  {/* Fixed width for text container to match image width */}
      <h3 className="text-xs md:text-sm lg:text-base font-semibold break-words">{movie.title}</h3>  {/* Title with text wrapping */}
      <p className="text-[10px] md:text-xs lg:text-sm text-gray-500 break-words">{movie.genre}</p>  {/* Genre with text wrapping */}
    </div>
  </div>
  );
};

export default MovieCard;
