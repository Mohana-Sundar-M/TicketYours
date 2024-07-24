import React, { useRef } from 'react';
import { Theater } from '../../data/dummyData';
import { MovieCard } from './MovieCard';

interface TheaterCardProps {
  theater: Theater;
}

export const TheaterCard: React.FC<TheaterCardProps> = ({ theater }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex border rounded-xl shadow-md mb-6 mx-auto p-4" style={{ width: '95%', height: '170px' }}>
      <img src={theater.image} alt={theater.name} className="w-1/6 rounded-lg object-cover" style={{ height: '100%' }} />
      <div className="flex-grow ml-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold">{theater.name}</h2>
          <p className="text-xs text-gray-600 mt-1">{theater.address}</p>
          <p className="text-xs text-gray-600 mt-1">{theater.distance}</p>
        </div>
      </div>
      <div className="w-2/5 ml-4 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold">Now Showing</span>
          <div className="relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 p-1 rounded-full bg-gray-200 hover:bg-gray-300 z-10"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.47 9.53a.75.75 0 011.06 0l4 4a.75.75 0 11-1.06 1.06l-4-4a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-0 p-1 rounded-full bg-gray-200 hover:bg-gray-300 z-10"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 14a.75.75 0 01-.53-1.28l3.47-3.47-3.47-3.47a.75.75 0 111.06-1.06l4 4a.75.75 0 010 1.06l-4 4a.75.75 0 01-.53.22z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex overflow-x-auto space-x-2 pb-1" ref={scrollRef} style={{ height: '100px' }}>
          {theater.movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
