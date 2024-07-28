import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Movie } from '../../types';

interface CarouselProps {
  movies: Movie[];
}

const Carousel: React.FC<CarouselProps> = ({ movies }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200;
    }
  };

  return (
    <div className="relative flex items-center">
      <button
        className="absolute left-0 z-10 bg-white rounded-full shadow-md p-2 transform -translate-y-1/2 top-1/2"
        onClick={scrollLeft}
      >
        <FaChevronLeft />
      </button>
      <div
        className="flex overflow-x-scroll scrollbar-hide space-x-4 mx-8"
        ref={scrollRef}
      >
        {movies.map(movie => (
          <img key={movie.id} src={movie.image} alt={movie.title} className="w-20 h-28 md:w-28 md:h-36 object-cover" />
        ))}
      </div>
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
