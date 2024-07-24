import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar: React.FC = () => {
  return (
    <div className="flex justify-center my-4">
      <div className="relative w-full max-w-lg shadow-md">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded pl-10"
          placeholder="Search for cinema"
        />
        <FaSearch className="absolute top-2.5 left-3 text-gray-500" />
      </div>
    </div>
  );
};

export default SearchBar;
