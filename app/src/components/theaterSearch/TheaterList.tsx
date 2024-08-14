import React, { useState } from 'react';
import TheaterCard from './TheaterCard';
import SearchBar from '../public/SearchBar';
import { theaters } from '../../data/dummyData'; // Import dummy data for theaters

const TheaterList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>(''); // State for search query

  // Function to handle search input changes
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase()); // Update search query in lowercase
  };

  // Filter theaters based on search query
  const filteredTheaters = theaters.filter(theater =>
    theater.name.toLowerCase().includes(searchQuery) // Check if theater name includes search query
  );

  return (
    <div className="container mx-auto p-4  ">
      <SearchBar onSearchChange={handleSearchChange} /> {/* Search bar for filtering theaters */}
      <div className="mt-4">
        {filteredTheaters.length > 0 ? (
          filteredTheaters.map(theater => (
            <TheaterCard key={theater.id} theater={theater} /> // Render a TheaterCard for each filtered theater
          ))
        ) : (
          <p>No theaters found</p> // Message when no theaters match the search query
        )}
      </div>
    </div>
  );
};

export default TheaterList;
