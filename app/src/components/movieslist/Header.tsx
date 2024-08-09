import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [
    'https://assets-in.bmscdn.com/promotions/cms/creatives/1717082518448_playcardweb.jpg',
    'https://assets-in.bmscdn.com/promotions/cms/creatives/1721811170335_thegarfieldmovie10minpreviewweb.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, [banners.length]);

  const handlePrevious = () => {
    setCurrentBanner((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  return (
    <div className="relative w-full   lg:h-80 overflow-hidden">
      <img
        src={banners[currentBanner]}
        className="w-full h-full object-cover"
      />
      <button
        onClick={handlePrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-teal-500 text-white px-3 py-1 rounded-full text-lg md:text-xl lg:text-2xl"
      >
        &#8249;
      </button>
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