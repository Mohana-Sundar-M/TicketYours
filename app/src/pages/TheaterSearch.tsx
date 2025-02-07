import React from 'react';
import '../index.css'; // Import global styles for the project

import TheaterList from '../components/theaterSearch/TheaterList'; // Component displaying a list of theaters based on search criteria
import Nav from '../components/public/NavBar'; // Navigation bar component
import BottomNavBar from '../components/public/BottomNavBar';
import { useMediaQuery } from '@mui/material';

//This is a theater Search Page Which is used to search the theaters

const TheaterSearch: React.FC = () => {
  const isMobileView = useMediaQuery('(max-width: 768px)');
  return (
    <div className="min-h-screen bg-gray-100">
      <Nav /> {/* Navigation bar at the top of the page */}
      
      {/* TheaterList component to show the search results for theaters */}
      <TheaterList />

      {isMobileView&&<BottomNavBar/>}
    </div>
  );
};

export default TheaterSearch;
