import React, { useRef } from 'react';  // Import React for component creation
import { Box, Typography, Button } from '@mui/material';  // Import MUI components for layout and styling
import MovieCard from './MovieCard';  // Import the MovieCard component for displaying individual movie cards
import { moviesData } from '../../data/moviespage/movieslist';  // Import movie data from your dataset
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook for routing
import ArrowRightIcon from '@mui/icons-material/ArrowRight';  // Import icon for "See All" button

const MoviesList: React.FC = () => {
  const navigate = useNavigate();  // Hook for navigation
  const scrollContainerRef = useRef<HTMLDivElement>(null);  // Ref for scroll container

  /**
   * Handles scrolling of the movie list container.
   * @param direction - 'left' or 'right' to indicate scroll direction.
   */
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === 'right' ? clientWidth : -clientWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  /**
   * Handles click events on movie cards, navigating to the movie details page.
   * @param movieId - The ID of the movie to navigate to.
   */
  const handleMovieClick = (movieId: string) => {
    navigate(`/movie/${movieId}`);  // Navigate to movie details page
  };

  /**
   * Handles click events on the "See All" button, navigating to the movies listing page.
   */
  const handleSeeAllClick = () => {
    navigate('/movies');  // Navigate to the movies listing page
  };

  return (
    <Box sx={{ padding: '16px' }}>  {/* Container for the movie list with padding */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Movies In Bengaluru  {/* Section title */}
        </Typography>
        <Button
          variant="text"
          sx={{ textTransform: 'none', color: 'teal', display: 'flex', alignItems: 'center' }}
          onClick={handleSeeAllClick}  // Add onClick handler to navigate
        >
          See All
          <ArrowRightIcon sx={{ marginRight: '8px' }} />  {/* Arrow icon for visual cue */}
        </Button>
      </Box>
      <Box sx={{ position: 'relative' }}>
        <Box
          ref={scrollContainerRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: '32px',  // Increased gap between movie cards
            padding: { xs: '0', md: '0 16px' },  // Add padding for desktop view
            '&::-webkit-scrollbar': { display: 'none' },  // Hide scrollbar for aesthetics
          }}
          className="flex gap-4 overflow-x-auto p-4"
        >
          {moviesData.map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}  // Pass movie data to MovieCard
              onClick={() => handleMovieClick(movie.id)}  // Pass click handler to MovieCard
              sx={{ cursor: 'pointer' }}  // Optional: Custom style for cursor
            />
          ))}
        </Box>
        <Button
          onClick={() => scroll('left')}  // Scroll left on click
          sx={{
            position: 'absolute',
            left: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent background for visibility
            color: 'white',  // Text color
            borderRadius: '50%',
            width: '40px',  // Size of button
            height: '40px',  // Size of button
            minWidth: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },  // Darker background on hover
          }}
        >
          &lt;  {/* Left arrow for scrolling */}
        </Button>
        <Button
          onClick={() => scroll('right')}  // Scroll right on click
          sx={{
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent background for visibility
            color: 'white',  // Text color
            borderRadius: '50%',
            width: '40px',  // Size of button
            height: '40px',  // Size of button
            minWidth: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },  // Darker background on hover
          }}
        >
          &gt;  {/* Right arrow for scrolling */}
        </Button>
      </Box>
    </Box>
  );
};

export default MoviesList;  // Exporting MoviesList component for use in other parts of the application
