import React from 'react';
import { useMediaQuery } from '@mui/material';
import HomePage from './HomePage'; // Import the Desktop HomePage
import MobileHomePage from './HomepageMobile'; // Import the Mobile HomePage

const MainHomePage: React.FC = () => {
  // Media query hook to check if the screen is small (mobile) or large (desktop)
  const isMobileView = useMediaQuery('(max-width: 768px)'); // This breakpoint is usually for tablets/mobile

  return (
    <div className="flex flex-col min-h-screen">
      {/* Conditional rendering based on the screen size */}
      {isMobileView ? <MobileHomePage /> : <HomePage />}
    </div>
  );
};

export default MainHomePage;
