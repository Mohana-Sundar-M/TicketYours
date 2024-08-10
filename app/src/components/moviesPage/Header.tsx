import React, { useEffect, useState } from 'react';

// Header component for displaying a banner carousel with navigation controls
const Header: React.FC = () => {
  // State to track the index of the current banner
  const [currentBanner, setCurrentBanner] = useState(0);

  // Array of banner image URLs
  const banners = [
    'https://assets-in.bmscdn.com/promotions/cms/creatives/1717082518448_playcardweb.jpg',
    'https://assets-in.bmscdn.com/promotions/cms/creatives/1721811170335_thegarfieldmovie10minpreviewweb.jpg',
  ];

  // Effect to automatically change the banner at regular intervals
  useEffect(() => {
    // Set up an interval to change banners every 3 seconds
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000); // Adjust the interval time as needed

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [banners.length]);

  // Function to go to the previous banner
  const handlePrevious = () => {
    setCurrentBanner((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  // Function to go to the next banner
  const handleNext = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  return (
    <div className="relative w-full lg:h-80 overflow-hidden">
      {/* Banner image with full width and height */}
      <img
        src={banners[currentBanner]}
        className="w-full h-full object-cover"
        alt="Banner"
      />
      {/* Previous button */}
      <button
        onClick={handlePrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-teal-500 text-white px-3 py-1 rounded-full text-lg md:text-xl lg:text-2xl"
      >
        &#8249;
      </button>
      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-500 text-white px-3 py-1 rounded-full text-lg md:text-xl lg:text-2xl"
      >
        &#8250;
      </button>
    </div>
  );
};

export default Header;
