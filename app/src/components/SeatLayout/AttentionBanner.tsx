import React from 'react';

const AttentionBanner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center my-6">
      {/* Banner */}
      <div className="relative w-64 h-6 bg-blue-100 flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full border-t-4 border-blue-300 rounded-t-lg" />
        <div className="absolute top-1 left-1 w-full h-full border-t-4 border-blue-200 rounded-t-lg transform scale-95" />
        <div className="absolute top-2 left-2 w-full h-full border-t-4 border-blue-100 rounded-t-lg transform scale-90" />
      </div>
      {/* Text */}
      <p className="text-gray-600 text-center mt-2">All eyes this way please!</p>
    </div>
  );
};

export default AttentionBanner;
