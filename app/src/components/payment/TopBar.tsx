import React from 'react';
import { MdArrowBack } from 'react-icons/md'; // Importing back icon from react-icons

const TopBar: React.FC<{ timeLeft: number }> = ({ timeLeft }) => {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleBackClick = () => {
    // Handle the back navigation logic here
    
  };

  return (
    <div className="flex items-center p-4 bg-white shadow-md w-full">
      <button onClick={handleBackClick} className="text-gray-600 mr-4">
        <MdArrowBack size={24} />
      </button>
      <div className="flex-grow">
        <span className="font-semibold text-lg">Complete your booking</span>
      </div>
      <span className="bg-red-500 text-white px-2 py-1 rounded ml-auto">
        {formatTime(timeLeft)}
      </span>
    </div>
  );
};

export default TopBar;
