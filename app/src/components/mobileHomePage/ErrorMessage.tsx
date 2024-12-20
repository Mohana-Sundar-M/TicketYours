import React from 'react';
import image from '../../assets/2816015.png';
import imageDesk from '../../assets/popcorn.png';

const ErrorMessage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* Placeholder Images */}
      {/* Mobile Image */}
      <img
        src={image}
        alt="No Movies Available"
        className="w-[300px] h-[400px] object-cover mb-6 block md:hidden" // Visible on mobile only
      />
      {/* Desktop Image */}
      <img
        src={imageDesk}
        alt="No Movies Available"
        className="w-[450px] h-[400px] object-cover mb-6 hidden md:block" // Visible on desktop only
      />
      {/* Message Text */}
      <h2 className="text-2xl font-semibold text-gray-600">No Movies Available Now</h2>
      <p className="text-base text-gray-500 mt-2">Try adjusting your filters or check back later.</p>
    </div>
  );
};

export default ErrorMessage;
