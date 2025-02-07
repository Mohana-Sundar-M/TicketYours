import React from 'react';

// Define the props that the TimingCard component will accept
interface TimingCardProps {
  timings?: string[];  // Optional array of timings available for the specified language
  language?: string;   // Optional language of the movie showings
}

const TimingCard: React.FC<TimingCardProps> = ({ timings = [], language = 'English' }) => {
  // Dummy data for timings if none are provided
  const dummyTimings = timings.length > 0 ? timings : ['10:00 AM', '1:00 PM', '4:00 PM', ];

  return (
    <div className="mb-4">
      {/* Display the language heading */}
      <h3 className="text-sm font-bold uppercase mb-2">{language}</h3>
      
      {/* Display timings in a responsive grid */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-4 mb-4">
        {dummyTimings.map((time, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-white border border-teal-500 rounded-lg text-teal-500 text-base font-semibold hover:bg-teal-50 md:px-3 md:py-2 md:text-sm"
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimingCard;
