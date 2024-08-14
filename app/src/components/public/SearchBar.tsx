import React from 'react';
import { FaSearch } from 'react-icons/fa';

type SearchBarProps = {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;  // Function to handle input changes
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
  return (
    <div className="flex justify-center my-4">
      {/* Container for centering the search bar */}
      <div className="relative w-full max-w-6xl"> {/* Adjust `max-w` as needed for responsive design */}
        <input
          type="text"
          className="w-full p-3 pl-12 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-1 focus:ring-teal-300 transition-all duration-300"
          placeholder="Search for cinema"  // Placeholder text for the search input
          onChange={onSearchChange}  // Calls the onSearchChange function whenever input changes
        />
        <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 text-lg" />
        {/* Search icon positioned inside the input field */}
      </div>
    </div>
  );
};

export default SearchBar;
