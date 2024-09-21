import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NowShowing from './NowShowing'; // Import updated NowShowing component
import { FaMapMarkerAlt, FaDirections } from 'react-icons/fa';

interface Movie {
  id: number;
  title: string;
  image: string;
}

interface Theater {
  id: number;
  name: string;
  location: string;
  zipcode: string;
  directionsLink: string | null;
  images: string[];
  movies: Movie[];
}

interface TheaterCardProps {
  theater: Theater;
}

const TheaterCard: React.FC<TheaterCardProps> = ({ theater }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleNavigate = () => {
    navigate(`/theater/${theater.id}`);
  };

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden mb-4 w-full mx-auto" style={{ maxWidth: '75%' }}>
      {/* Image Section */}
      <div className="relative w-full md:w-1/3">
        <img
          src={theater.images[0] || ''}
          alt={theater.name}
          className="object-cover w-full h-full cursor-pointer"
          onClick={handleNavigate}
        />
        <div
          className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-1 text-sm font-bold md:hidden cursor-pointer"
          onClick={handleNavigate}
        >
          {theater.name}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-start justify-between p-3 w-full md:w-2/3" style={{ height: 'calc(100% - 1rem)' }}>
        {/* Text and Details Section */}
        <div className="flex flex-col md:w-2/3">
          <h2
            className="text-md font-bold cursor-pointer hidden md:block"
            onClick={handleNavigate}
          >
            {theater.name}
          </h2>
          
          <p className="text-gray-600 mt-1 text-xs hidden md:block ">{theater.location}</p>
          <div className="flex items-center mt-4 hidden md:flex">
            <FaMapMarkerAlt className="text-gray-600 h-3 w-3 mr-1" />
            <p className="text-gray-600 text-s">{theater.zipcode}</p>
          </div>
          <div className="flex items-center hidden md:flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:text-blue-700 mt-1 text-s pt-1"
              href={theater.directionsLink || '#'}
            >
              <FaDirections className="h-3 w-3 mr-1" />
              Directions
            </a>
          </div>
        </div>

        {/* Now Showing Section */}
        <div className="hidden md:block md:w-1/3 mt-2 md:mt-0">
          <NowShowing cinemaHallId={theater.id.toString()} />
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <div className="flex items-center justify-between p-2">
          <p className="flex items-center text-gray-600 text-xs">
            <FaMapMarkerAlt className="h-3 w-3 mr-1" />
            {theater.zipcode}
          </p>
          <button className="flex items-center text-gray-600 text-xs" onClick={toggleDropdown}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        {isDropdownOpen && (
          <div className="mt-2 p-2 bg-gray-100 rounded-lg">
            <NowShowing cinemaHallId={theater.id.toString()} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TheaterCard;
