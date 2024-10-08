import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import expand icon from MUI

// Define the props interface for the Filters component
type FiltersProps = {
  onFilterChange: (filters: { languages: string[], genres: string[], format: string[] }) => void;
};

// Filters component for displaying and managing filter options
const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  // State to manage which filter categories are expanded
  const [expanded, setExpanded] = useState({
    languages: true,
    genres: false,
    format: false,
  });

  // State to manage selected filters for each category
  const [selectedFilters, setSelectedFilters] = useState({
    languages: [] as string[],
    genres: [] as string[],
    format: [] as string[],
  });

  // Toggle expansion state of a filter category
  const toggleExpand = (filter: keyof typeof expanded) => {
    setExpanded((prev) => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };
  
  // Handle filter option click
  const handleFilterClick = (filterCategory: string, option: string) => {
    setSelectedFilters((prev) => {
      const newFilters = prev[filterCategory as keyof typeof prev].includes(option)
        ? prev[filterCategory as keyof typeof prev].filter((item) => item !== option)
        : [...prev[filterCategory as keyof typeof prev], option];
      const updatedFilters = { ...prev, [filterCategory]: newFilters };
      onFilterChange(updatedFilters); // Notify parent component of filter changes
      return updatedFilters;
    });
  };

  // Clear all selected filters in a specific category
  const clearFilters = (filterCategory: string) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev, [filterCategory]: [] };
      onFilterChange(newFilters); // Notify parent component of filter reset
      return newFilters;
    });
  };

  // Render filter options as buttons
  const renderOptions = (options: string[], filterCategory: string) => (
    <div className="flex flex-wrap gap-3 mt-3">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleFilterClick(filterCategory, option)}
          className={`px-3 py-2 border ${selectedFilters[filterCategory as keyof typeof selectedFilters].includes(option) ? 'bg-teal-500 text-white' : 'border-gray-300 text-gray-700'} rounded-md`}
        >
          {option}
        </button>
      ))}
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-80 space-y-6">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Languages filter */}
      <div className="filter-card">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand('languages')}>
          <div className="flex items-center">
            <ExpandMoreIcon style={{ transform: expanded.languages ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            <h3 className="text-lg font-semibold text-gray-800 ml-2">Languages</h3>
          </div>
          <button onClick={(e) => { e.stopPropagation(); clearFilters('languages'); }} className="text-teal-500">Clear</button>
        </div>
        {expanded.languages && renderOptions(['Hindi', 'English', 'Gujarati', 'Korean', 'Marathi', 'Tamil', 'Telugu', 'Kannada', 'Malayalam'], 'languages')}
      </div>

      {/* Genres filter */}
      <div className="filter-card">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand('genres')}>
          <div className="flex items-center">
            <ExpandMoreIcon style={{ transform: expanded.genres ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            <h3 className="text-lg font-semibold text-gray-800 ml-2">Genres</h3>
          </div>
          <button onClick={(e) => { e.stopPropagation(); clearFilters('genres'); }} className="text-teal-500">Clear</button>
        </div>
        {expanded.genres && renderOptions(['Drama', 'Comedy', 'Action', 'Thriller', 'Romantic', 'Crime', 'Horror'], 'genres')}
      </div>

      {/* Format filter */}
      <div className="filter-card">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand('format')}>
          <div className="flex items-center">
            <ExpandMoreIcon style={{ transform: expanded.format ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            <h3 className="text-lg font-semibold text-gray-800 ml-2">Format</h3>
          </div>
          <button onClick={(e) => { e.stopPropagation(); clearFilters('format'); }} className="text-teal-500">Clear</button>
        </div>
        {expanded.format && renderOptions(['2D', '3D', 'IMAX'], 'format')}
      </div>
    </div>
  );
};

export default Filters;
