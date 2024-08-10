import React, { useState } from 'react';
import { format, addDays, isToday } from 'date-fns'; // Import date-fns functions for date manipulation

// Generate an array of dates for the next 5 days
const dates = Array.from({ length: 5 }, (_, i) => addDays(new Date(), i));

const DateNavigation: React.FC = () => {
  // State to track the selected date, initialized to the first date in the array
  const [selectedDate, setSelectedDate] = useState(dates[0]);

  return (
    <div className="flex space-x-4 py-2 bg-white border-b overflow-x-auto pl-4 max-sm:pl-4">
      {/* Render a button for each date */}
      {dates.map(date => (
        <button
          key={date.toString()} // Unique key for each button
          className={`flex flex-col items-center px-4 py-2 rounded-full border ${
            selectedDate === date ? 'bg-teal-400 text-white' : 'bg-transparent text-gray-700 border-teal-400'
          } hover:bg-teal-300 hover:text-white`} // Apply styles based on selected state
          onClick={() => setSelectedDate(date)} // Update the selected date on click
        >
          <span className="font-semibold text-xs">
            {format(date, 'MMM')} {/* Display the month abbreviation */}
          </span>
          <span className="font-bold text-lg">
            {format(date, 'dd')} {/* Display the day of the month */}
          </span>
          <span className="text-xs">
            {isToday(date) ? 'Today' : format(date, 'EEE')} {/* Display 'Today' if the date is today, otherwise the day of the week */}
          </span>
        </button>
      ))}
    </div>
  );
};

export default DateNavigation;
