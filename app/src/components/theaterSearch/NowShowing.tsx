import React from 'react';
import Carousel from './Carousel';
import { Movie } from '../../data/types';

interface NowShowingProps {
  movies: Movie[];  // Array of movie objects to be displayed in the carousel
  compact?: boolean;  // Optional prop to control layout style
}

const NowShowing: React.FC<NowShowingProps> = ({ movies, compact }) => {
  return (
    <div className={`mt-4 ${compact ? '' : 'md:mt-0'}`}>
      {/* Conditionally render the title based on the `compact` prop */}
      {!compact && <h3 className="text-sm font-bold mb-2">Now Showing</h3>}
      {/* Render the Carousel component with the provided movies */}
      <Carousel movies={movies} />
    </div>
  );
};

export default NowShowing;
