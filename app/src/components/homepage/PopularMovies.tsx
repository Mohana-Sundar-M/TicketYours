
import React from 'react';

const PopularMovies: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Popular Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <img src="/images/movie1.jpg" alt="Movie 1" className="mb-4 rounded-lg"/>
          <h3 className="text-lg font-bold">Movie Title 1</h3>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <img src="/images/movie2.jpg" alt="Movie 2" className="mb-4 rounded-lg"/>
          <h3 className="text-lg font-bold">Movie Title 2</h3>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <img src="/images/movie3.jpg" alt="Movie 3" className="mb-4 rounded-lg"/>
          <h3 className="text-lg font-bold">Movie Title 3</h3>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg">
          <img src="/images/movie4.jpg" alt="Movie 4" className="mb-4 rounded-lg"/>
          <h3 className="text-lg font-bold">Movie Title 4</h3>
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;
