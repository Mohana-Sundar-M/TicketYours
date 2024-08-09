import React from 'react';

interface TimingCardProps {
  timings: string[];
  language: string;
}

const TimingCard: React.FC<TimingCardProps> = ({ timings, language }) => {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-bold uppercase mb-2">{language}</h3>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
        {timings.map((time, index) => (
          <button
            key={index}
            className="p-1 sm:p-2 bg-gray-100 border-2 text-green-500 font-bold rounded-lg text-center text-xs sm:text-sm hover:bg-gray-200 transition-colors duration-200 h-8 sm:h-10"
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimingCard;
