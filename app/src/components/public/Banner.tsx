import React, { useEffect, useState } from 'react';
import '../../css/Header.css';

const Header: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const banners = [
    'https://assets-in.bmscdn.com/promotions/cms/creatives/1717082518448_playcardweb.jpg',
    'https://assets-in.bmscdn.com/promotions/cms/creatives/1722429978310_keyvisual1240x300wocta.jpg',
    'https://assets-in.bmscdn.com/promotions/cms/creatives/1721811170335_thegarfieldmovie10minpreviewweb.jpg',
  ];

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Change banner every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    if (currentBanner === banners.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentBanner(0);
      }, 800); // Match transition duration
    } else if (currentBanner < 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentBanner(banners.length - 1);
      }, 0);
    }
  }, [currentBanner]);

  return (
    <div className="header-container">
      <div
        className="banner-wrapper"
        style={{
          transform: `translateX(-${currentBanner * 100}%)`,
          transition: isTransitioning ? 'transform 0.8s ease-in-out' : 'none',
        }}
        onTransitionEnd={() => setIsTransitioning(true)}
      >
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            className="banner-image"
            alt={`Banner ${index}`}
          />
        ))}
        <img
          src={banners[0]}
          className="banner-image"
          alt="Banner Duplicate"
        />
      </div>
      <button
        onClick={handlePrevious}
        className="nav-button prev-button"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="nav-button next-button"
      >
        &#8250;
      </button>
    </div>
  );
};

export default Header;
