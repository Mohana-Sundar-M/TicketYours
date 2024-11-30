import React from 'react';
import image from '../../assets/2816015.jpg'

const ErrorMessage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* Placeholder Image */}
      <img 
        src={image} 
        alt="No Movies Available"
        className="w-[300px] h-[300px] object-cover mb-6"  // Adjust the size of the image
      />
      {/* Message Text */}
      <h2 className="text-2xl font-semibold text-gray-600">No Movies Available Now</h2>
      <p className="text-base text-gray-500 mt-2">Try adjusting your filters or check back later.</p>
    </div>
  );
};

export default ErrorMessage;
