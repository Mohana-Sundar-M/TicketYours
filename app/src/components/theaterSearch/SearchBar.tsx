import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar: React.FC = () => {
  return (
    <div className="flex justify-center my-4">
      <div className="relative min-w-[95%] max-w-lg shadow-md p-4 bg-white rounded-lg">
        <FaSearch className="absolute top-7 left-8 text-gray-500" />
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded pl-10"
          placeholder="Search for cinema"
        />
      </div>
    </div>
  );
};

export default SearchBar;
