import React, { useState } from 'react';
import { format, addDays, isToday } from 'date-fns';

const dates = Array.from({ length: 5 }, (_, i) => addDays(new Date(), i));

const DateNavigation: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(dates[0]);

  return (
    <div className="flex space-x-4 py-2 bg-white border-b overflow-x-auto pl-4 max-sm:pl-4">
      {dates.map(date => (
        <button
          key={date.toString()}
          className={`flex flex-col items-center px-4 py-2 rounded-full border ${
            selectedDate === date ? 'bg-teal-400 text-white' : 'bg-transparent text-gray-700 border-teal-400'
          } hover:bg-teal-300 hover:text-white`}
          onClick={() => setSelectedDate(date)}
        >
          <span className="font-semibold text-xs">
            {format(date, 'MMM')}
          </span>
          <span className="font-bold text-lg">
            {format(date, 'dd')}
          </span>
          <span className="text-xs">
            {isToday(date) ? 'Today' : format(date, 'EEE')}
          </span>
        </button>
      ))}
    </div>
  );
};

export default DateNavigation;
