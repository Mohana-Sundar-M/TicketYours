import React, { useState } from 'react';
import { format, addDays } from 'date-fns';

// Generate an array of dates for the next 5 days
const dates = Array.from({ length: 5 }, (_, i) => addDays(new Date(), i));

const DateNavigation: React.FC = () => {
  // State to track the selected date, initialized to today’s date
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Get the month label for the selected date
  const monthLabel = format(selectedDate, 'MMM').toUpperCase();

  return (
    <div className="flex items-center space-x-2 justify-start overflow-x-auto bg-white p-4 rounded w-full ">
      {/* Month label */}
      <div className="flex flex-col items-center">
        <span className="transform -rotate-90 bg-gray-700 text-white px-2 py-1 rounded text-sm">
          {monthLabel}
        </span>
      </div>

      {/* Render a button for each date */}
      {dates.map(date => (
        <button
          key={date.toString()} // Unique key for each button
          className={`flex flex-col items-center px-4 py-2 rounded transition-colors duration-300 ${
            selectedDate.toDateString() === date.toDateString()
              ? 'bg-teal-400 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`} // Apply styles based on selected state
          onClick={() => setSelectedDate(date)} // Update the selected date on click
        >
          <span className="text-xs">{format(date, 'EEE')}</span> {/* Day of the week */}
          <span className="text-sm">{format(date, 'd')}</span>   {/* Date */}
        </button>
      ))}
    </div>
  );
};

export default DateNavigation;
