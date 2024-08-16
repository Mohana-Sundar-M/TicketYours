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
    setCurrentBanner((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setCurrentBanner((prev) =>
      prev === 0 ? banners.length : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentBanner === banners.length) {
      // Temporary disabling transition to jump to the first image
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentBanner(0);
      }, 800); // Duration matches the transition time
    } else if (currentBanner < 0) {
      // Temporary disabling transition to jump to the last image
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentBanner(banners.length - 1);
      }, 0);
    }
  }, [currentBanner, banners.length]);

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
        {/* Duplicate the first image */}
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
