import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { Theater } from '../../data/types';
import NowShowing from './NowShowing';
import { FaMapMarkerAlt, FaDirections } from 'react-icons/fa';

interface TheaterCardProps {
  theater: Theater; // Prop type for the theater data
}

const TheaterCard: React.FC<TheaterCardProps> = ({ theater }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Toggle the dropdown open/close state
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Navigate to the theater details page
  const handleNavigate = () => {
    navigate(`/theater/${theater.id}`);
  };

  
 

  return (
    <div
      className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden mb-4 w-full mx-auto"
    >
      <div className="relative w-full md:w-1/3">
        <img 
          src={theater.image} 
          alt={theater.name} 
          className="object-cover w-full h-32 md:h-full cursor-pointer"
          onClick={handleNavigate} // Navigate when clicking the image
        />
        <div 
          className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-lg font-bold md:hidden cursor-pointer"
          onClick={handleNavigate} // Navigate when clicking the overlay
        >
          {theater.name}
        </div>
      </div>
      <div className="flex flex-col justify-between p-4 w-full md:w-2/3">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="hidden md:block">
            <h2 
              className="text-lg font-bold cursor-pointer"
              onClick={handleNavigate} // Navigate when clicking the theater name
            >
              {theater.name}
            </h2>
            <p className="text-gray-600 mt-2 text-xs">{theater.address}</p>
            <div className="flex items-center mt-2 pt-7">
              <FaMapMarkerAlt className="text-gray-600 h-4 w-4 mr-1" />
              <p className="text-gray-600 text-xs">{theater.distance} km away</p>
            </div>
            <button className="flex items-center text-blue-500 hover:text-blue-700 mt-2 text-xs pt-2">
              <FaDirections className="h-4 w-4 mr-1" />
              Directions
            </button>
          </div>
          <div className="hidden md:block mt-4 md:mt-0 md:ml-4 w-full md:w-1/2">
            <NowShowing movies={theater.movies} /> {/* Show Now Showing component on desktop */}
          </div>
        </div>
        <div className="block md:hidden">
          <div className="flex items-center justify-between">
            <p className="flex items-center text-gray-600 text-xs">
              <FaMapMarkerAlt className="h-4 w-4 mr-1" />
              {theater.distance} km away
            </p>
            <button className="flex items-center text-gray-600 text-xs" onClick={toggleDropdown}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 mr-1 transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          {isDropdownOpen && (
            <div className="mt-2 p-0 bg-gray-100 rounded-lg h-32 overflow-hidden">
              <NowShowing movies={theater.movies} compact /> {/* Compact view of Now Showing on mobile */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TheaterCard;
