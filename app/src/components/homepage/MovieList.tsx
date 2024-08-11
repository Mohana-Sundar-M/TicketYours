import React, { useRef } from 'react';  // Import React for component creation
import { Box, Typography, Button, Grid } from '@mui/material';  // Import MUI components for layout and styling
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
    <Box sx={{ padding: '16px'  }}>  {/* Container for the movie list with padding */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
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

      {/* Mobile view - grid layout */}
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Grid container spacing={2}>
          {moviesData.map((movie, index) => (
            <Grid item xs={6} key={index}> {/* Display two items per row on mobile view */}
              <MovieCard
                movie={movie}  // Pass movie data to MovieCard
                onClick={() => handleMovieClick(movie.id)}  // Pass click handler to MovieCard
                sx={{ cursor: 'pointer', width: '100%' }}  // Optional: Custom style for cursor
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Desktop view - horizontal scrolling */}
      <Box
        sx={{
          position: 'relative',
          display: { xs: 'none', sm: 'flex' },
          
          padding: '0 16px',
          gap: '24px',  // Increased gap between cards
          '&::-webkit-scrollbar': { display: 'none' },  // Hide scrollbar
        }}
      >
        <Box
          ref={scrollContainerRef}
          sx={{
            display: 'flex',
            overflowX: 'hidden',
            gap: '24px',  // Increased gap between cards
            flexWrap: 'nowrap',  // Ensure no wrapping
          }}
        >
          {moviesData.map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}  // Pass movie data to MovieCard
              onClick={() => handleMovieClick(movie.id)}  // Pass click handler to MovieCard
              sx={{ cursor: 'pointer', flex: '0 0 auto', width: '200px' }}  // Increased card width
            />
          ))}
        </Box>
        {/* Centered navigation buttons */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            px: 2,
          }}
        >
          <Button
            onClick={() => scroll('left')}  // Scroll left on click
            sx={{
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
    </Box>
  );
};

export default MoviesList;  // Exporting MoviesList component for use in other parts of the application
