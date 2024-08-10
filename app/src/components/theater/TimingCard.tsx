import React from 'react';

// Define the props that the TimingCard component will accept
interface TimingCardProps {
  timings: string[];  // Array of timings available for the specified language
  language: string;   // Language of the movie showings
}

const TimingCard: React.FC<TimingCardProps> = ({ timings, language }) => {
  return (
    <div className="mb-4">
      {/* Display the language heading */}
      <h3 className="text-sm font-bold uppercase mb-2">{language}</h3>
      
      {/* Display timings in a responsive grid */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-4">
        {timings.map((time, index) => (
          <button
            key={index}  // Unique key for each button to help React track changes
            className="px-2 py-1 bg-gray-100 rounded-full text-green-600 text-xs font-medium hover:bg-gray-200 transition-colors duration-200 md:px-3 md:py-2 md:text-sm"
          >
            {time}  {/* Display the time */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimingCard;
