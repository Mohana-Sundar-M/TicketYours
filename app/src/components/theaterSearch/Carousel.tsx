import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Movie } from '../../types/moviesTypes';

interface CarouselProps {
  movies: Movie[];
  message?: string;
}

const Carousel: React.FC<CarouselProps> = ({ movies, message }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const navigate = useNavigate();

  // Check for overflow on initial render and when movies change
  useEffect(() => {
    const checkOverflow = () => {
      if (scrollRef.current) {
        const isContentOverflowing =
          scrollRef.current.scrollWidth > scrollRef.current.clientWidth;
        setIsOverflowing(isContentOverflowing);
      }
    };

    checkOverflow();

    // Optionally, add event listener for window resizing
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, [movies]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -200,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200,
        behavior: 'smooth',
      });
    }
  };

  const handleMovieClick = (id: number) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="relative flex items-center w-full">
      {/* Left scroll button (visible only if overflowing) */}
      {isOverflowing && (
        <button
          className="absolute left-2 md:left-4 z-10 bg-white rounded-full shadow-md p-2 md:p-3 transform -translate-y-1/2 top-1/2"
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          <FaChevronLeft className="text-sm md:text-lg" />
        </button>
      )}

      {/* Carousel container */}
      <div
        className="flex overflow-x-auto space-x-4 px-2 md:px-4 scrollbar-hide"
        ref={scrollRef}
        style={{
          maxWidth: '100%', // Full width of the container
          scrollBehavior: 'smooth',
        }}
      >
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie.id}
              className="flex-shrink-0 w-24 h-36 sm:w-28 sm:h-40 md:w-32 md:h-48 lg:w-36 lg:h-52"
            >
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => handleMovieClick(movie.id)}
              />
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center w-full h-36 md:h-48  text-gray-600">
            {message || 'No movies available'}
          </div>
        )}
      </div>

      {/* Right scroll button (visible only if overflowing) */}
      {isOverflowing && (
        <button
          className="absolute right-2 md:right-4 z-10 bg-white rounded-full shadow-md p-2 md:p-3 transform -translate-y-1/2 top-1/2"
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <FaChevronRight className="text-sm md:text-lg" />
        </button>
      )}
    </div>
  );
};

export default Carousel;
