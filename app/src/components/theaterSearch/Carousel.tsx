import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Movie } from '../../data/types';

interface CarouselProps {
  movies: Movie[];
}

const Carousel: React.FC<CarouselProps> = ({ movies }) => {
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
    <div className="relative flex items-center bg-white">
      {/* Left scroll button */}
      <button
        className="absolute left-0 z-10 bg-white rounded-full shadow-md p-2 transform -translate-y-1/2 top-1/2"
        onClick={scrollLeft}
      >
        <FaChevronLeft />
      </button>

      {/* Carousel container */}
      <div
        className="flex overflow-x-scroll scrollbar-hide space-x-4 px-4"
        ref={scrollRef}
        style={{
          maxWidth: '100%',
          scrollBehavior: 'smooth',
        }}
      >
        {movies.map(movie => (
          <img
            key={movie.id}
            src={movie.image}
            alt={movie.title}
            className="w-24 h-36 md:w-32 md:h-48 lg:w-40 lg:h-56 object-cover cursor-pointer transition-transform duration-300"
            onClick={() => handleMovieClick(movie.id)}
            style={{
              flex: '0 0 auto',
            }}
          />
        ))}
      </div>

      {/* Right scroll button */}
      <button
        className="absolute right-0 z-10 bg-white rounded-full shadow-md p-2 transform -translate-y-1/2 top-1/2"
        onClick={scrollRight}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
