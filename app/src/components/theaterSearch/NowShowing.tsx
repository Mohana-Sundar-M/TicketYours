import React from 'react';
import Carousel from './Carousel';
import { Movie } from '../../types';

interface NowShowingProps {
  movies: Movie[];
  compact?: boolean;
}

const NowShowing: React.FC<NowShowingProps> = ({ movies, compact }) => {
  return (
    <div className={`mt-4 ${compact ? '' : 'md:mt-0'}`}>
      {!compact && <h3 className="text-sm font-bold mb-2">Now Showing</h3>}
      <Carousel movies={movies} />
    </div>
  );
};

export default NowShowing;
