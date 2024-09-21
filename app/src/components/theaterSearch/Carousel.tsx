import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Movie } from '../../data/types';

interface CarouselProps {
  movies: Movie[];
  message?: string; // Optional message to display if no movies
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
    <div className="relative flex items-center">
      {/* Left scroll button */}
      <button
        className="absolute left-2 md:left-4 z-10 bg-white rounded-full shadow-md p-2 transform -translate-y-1/2 top-1/2"
        onClick={scrollLeft}
        aria-label="Scroll left"
      >
        <FaChevronLeft />
      </button>

      {/* Carousel container */}
      <div
        className="flex overflow-x-auto space-x-4 px-4 scrollbar-hide"
        ref={scrollRef}
        style={{
          maxWidth: 'calc(100% - 4rem)', // Adjust to fit button widths
          scrollBehavior: 'smooth',
        }}
      >
        {movies.length > 0 ? (
          movies.map(movie => (
            <div
              key={movie.id}
              className="flex-shrink-0 w-20 h-28 md:w-24 md:h-32 lg:w-32 lg:h-40"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-300"
                onClick={() => handleMovieClick(movie.id)}
              />
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center w-full h-32 md:h-40 lg:h-48 bg-gray-100 text-gray-600">
            {message || 'No movies available'}
          </div>
        )}
      </div>

      {/* Right scroll button */}
      <button
        className="absolute right-2 md:right-4 z-10 bg-white rounded-full shadow-md p-2 transform -translate-y-1/2 top-1/2"
        onClick={scrollRight}
        aria-label="Scroll right"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
