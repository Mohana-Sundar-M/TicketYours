import React from 'react';

const BannerSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Latest Movies</h2>
        <p>Check out the latest releases in theaters.</p>
      </div>
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Book Your Seat</h2>
        <p>Reserve your favorite seat for the best experience.</p>
      </div>
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Special Discounts</h2>
        <p>Enjoy special discounts and offers available now.</p>
      </div>
    </div>
  );
};

export default BannerSection;
