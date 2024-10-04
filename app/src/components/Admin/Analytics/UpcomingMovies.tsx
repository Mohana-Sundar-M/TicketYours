import React from 'react';

const UpcomingMovieReleases: React.FC = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold mb-2">Upcoming Movie Releases</h3>
        <p className="text-sm text-gray-600">10 upcoming</p>
      </div>
      <button className="text-blue-600 font-semibold hover:underline">
        Schedule Movies
      </button>
    </div>
  );
};

export default UpcomingMovieReleases;
