import React from 'react';  // Import React for component creation
import { Movie } from '../../data/moviespage/types';  // Import Movie type for prop validation
import { SxProps, Theme } from '@mui/material/styles';  // Import MUI types for styling

// Interface for component props
interface MovieCardProps {
  movie: Movie;  // The movie object containing image, title, and genre
  sx?: SxProps<Theme>;  // Optional sx prop for additional styling
  onClick: () => void;  // Callback function to handle click events
}

// Functional component with props for movie data and styling
const MovieCard: React.FC<MovieCardProps> = ({ movie, sx, onClick }) => {
  return (
    <div
      className={`relative flex-none w-[100px] sm:w-[130px] md:w-[150px] lg:w-[180px] m-1 ${sx}`}  // Adjusted widths and applied sx class
      style={sx as React.CSSProperties}  // Apply styles from sx prop
      onClick={onClick}  // Attach click handler
    >
      <img
        src={movie.image}  // Image source from movie object
        alt={movie.title}  // Alt text for accessibility
        className="rounded-lg shadow-md w-full h-auto object-cover"  // Styling for image
      />
      <div className="mt-1">  {/* Container for text with reduced margin-top */}
        <h3 className="text-xs md:text-sm font-semibold truncate">{movie.title}</h3>  {/* Title with responsive font size */}
        <p className="text-[10px] text-gray-500 truncate">{movie.genre}</p>  {/* Genre with smaller text size */}
      </div>
    </div>
  );
};

export default MovieCard;  // Exporting MovieCard component for use in other parts of the application
