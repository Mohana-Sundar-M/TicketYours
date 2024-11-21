import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useGetMoviesQuery } from '../../services/moviesApi';
import { useActiveCity } from '../../context/ActiveCityContext';
import LoadingSpinner from '../public/LoadingSpinner'; // Import the LoadingSpinner component

const MoviesList: React.FC = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showButtons, setShowButtons] = useState(false);
  const { activeCityId, activeCity } = useActiveCity(); // Assuming activeCity is provided in context

  const cityId = activeCityId ? activeCityId.toString() : '';

  const { data, isLoading, error, refetch } = useGetMoviesQuery(cityId, {
    skip: !activeCityId,
  });

  useEffect(() => {
    if (activeCityId) {
      refetch(); // Trigger refetch when activeCityId changes
    }
  }, [activeCityId, refetch]);

  useEffect(() => {
    const checkScrollButtonsVisibility = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowButtons(scrollWidth > clientWidth);
      }
    };

    checkScrollButtonsVisibility(); // Check visibility initially
    window.addEventListener('resize', checkScrollButtonsVisibility); // Recheck on resize

    return () => {
      window.removeEventListener('resize', checkScrollButtonsVisibility); // Clean up
    };
  }, [data]);

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

  const handleMovieClick = (movieId: string) => {
    navigate(`/movie/${movieId}`);
  };

  const handleSeeAllClick = () => {
    navigate(`/v3/movies/city/${cityId}`);
  };

  // Validate data for required `id` attribute
  const validMovies = data?.filter((movie) => movie.id) || [];

  if (isLoading) {
    return <LoadingSpinner />; // Show the spinner while loading
  }

  if (error || !data) {
    return (
      <Box
        sx={{
          padding: { xs: '16px', sm: '32px' }, // Padding adjusts for mobile and desktop
          textAlign: 'center',
          mt: { xs: 4, sm: 8 }, // Space at the top for mobile and desktop
          mb: { xs: 4, sm: 8 }, // Space at the bottom for mobile and desktop
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: 'gray',
            fontSize: { xs: '1.25rem', sm: '1.5rem' }, // Responsive font size
          }}
        >
          Something went wrong
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'gray',
            mt: 2, // Space below the title
            fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive font size
          }}
        >
          Please try again later.
        </Typography>
      </Box>
    );
  }
  
  if (validMovies.length === 0) {
    return (
      <Box
        sx={{
          padding: { xs: '16px', sm: '32px' },
          textAlign: 'center',
          mt: { xs: 4, sm: 8 },
          mb: { xs: 4, sm: 8 },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: 'gray',
            fontSize: { xs: '1.25rem', sm: '1.5rem' },
          }}
        >
          No movies available
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'gray',
            mt: 2,
            fontSize: { xs: '0.875rem', sm: '1rem' },
          }}
        >
          Try adjusting your filters or check back later.
        </Typography>
      </Box>
    );
  }
  

  return (
    <Box sx={{ padding: '16px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Movies In {activeCity}
        </Typography>
        <Button
          variant="text"
          sx={{ textTransform: 'none', color: 'teal', display: 'flex', alignItems: 'center' }}
          onClick={handleSeeAllClick}
        >
          See All
          <ArrowRightIcon sx={{ marginRight: '8px' }} />
        </Button>
      </Box>

      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Grid container spacing={2}>
          {validMovies.map((movie) => (
            <Grid item xs={6} key={movie.id}>
              <MovieCard
                movie={movie}
                onClick={() => handleMovieClick(movie.id)}
                sx={{ cursor: 'pointer', width: '100%' }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          position: 'relative',
          display: { xs: 'none', sm: 'flex' },
          padding: '0 16px',
          gap: '24px',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        <Box
          ref={scrollContainerRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: '24px',
            flexWrap: 'nowrap',
          }}
        >
          {validMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => handleMovieClick(movie.id)}
              sx={{ cursor: 'pointer', flex: '0 0 auto', width: '200px' }}
            />
          ))}
        </Box>
        {showButtons && (
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
              onClick={() => scroll('left')}
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                minWidth: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
              }}
            >
              &lt;
            </Button>
            <Button
              onClick={() => scroll('right')}
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                minWidth: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
              }}
            >
              &gt;
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default MoviesList;
