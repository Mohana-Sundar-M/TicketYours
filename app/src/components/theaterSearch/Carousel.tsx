import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Movie } from '../../data/types';

interface CarouselProps {
  movies: Movie[];  // Array of movie objects to be displayed in the carousel
}

const Carousel: React.FC<CarouselProps> = ({ movies }) => {
  // Ref to control the scroll position of the carousel
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scrolls the carousel to the left by a fixed amount
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200;
    }
  };

  // Scrolls the carousel to the right by a fixed amount
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200;
    }
  };

  return (
    <div className="relative flex items-center">
      {/* Left scroll button */}
      <button
        className="absolute left-0 z-10 bg-white rounded-full shadow-md p-2 transform -translate-y-1/2 top-1/2"
        onClick={scrollLeft}
      >
        <FaChevronLeft /> {/* Icon for the left scroll button */}
      </button>

      {/* Carousel container */}
      <div
        className="flex overflow-x-scroll scrollbar-hide space-x-4 mx-8"
        ref={scrollRef}
      >
        {movies.map(movie => (
          <img
            key={movie.id}  // Unique key for each movie image
            src={movie.image}  // Image source URL
            alt={movie.title}  // Alt text for accessibility
            className="w-20 h-28 md:w-28 md:h-36 object-cover"  // Responsive image size and styling
          />
        ))}
      </div>

      {/* Right scroll button */}
      <button
        className="absolute right-0 z-10 bg-white rounded-full shadow-md p-2 transform -translate-y-1/2 top-1/2"
        onClick={scrollRight}
      >
        <FaChevronRight /> {/* Icon for the right scroll button */}
      </button>
    </div>
  );
};

export default Carousel;
