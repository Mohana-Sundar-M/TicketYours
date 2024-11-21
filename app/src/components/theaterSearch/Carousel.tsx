import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Movie } from '../../types/moviesTypes';

interface CarouselProps {
  movies: Movie[];
  message?: string;
}

const Carousel: React.FC<CarouselProps> = ({ movies, message }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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
      {/* Left scroll button */}
      <button
        className="absolute left-2 md:left-4 z-10 bg-white rounded-full shadow-md p-2 md:p-3 transform -translate-y-1/2 top-1/2"
        onClick={scrollLeft}
        aria-label="Scroll left"
      >
        <FaChevronLeft className="text-sm md:text-lg" />
      </button>

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
          movies.map(movie => (
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
          <div className="flex items-center justify-center w-full h-36 md:h-48 bg-gray-100 text-gray-600">
            {message || 'No movies available'}
          </div>
        )}
      </div>

      {/* Right scroll button */}
      <button
        className="absolute right-2 md:right-4 z-10 bg-white rounded-full shadow-md p-2 md:p-3 transform -translate-y-1/2 top-1/2"
        onClick={scrollRight}
        aria-label="Scroll right"
      >
        <FaChevronRight className="text-sm md:text-lg" />
      </button>
    </div>
  );
};

export default Carousel;
