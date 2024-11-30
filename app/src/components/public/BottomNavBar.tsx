import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import TheatersIcon from '@mui/icons-material/Theaters';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const BottomNavBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  const [activePath, setActivePath] = useState<string>('/'); // Default active path is Home ('/')

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Movies', icon: <MovieIcon />, path: '/v3/movies/city/:cityId' }, // Replace cityId dynamically
    { text: 'Theater', icon: <TheatersIcon />, path: '/theater-search' },
    { text: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
  ];

  // Function to handle navigation
  const handleNavigation = (path: string) => {
    navigate(path);
    setActivePath(path); // Set the active path on navigation
  };

  // Update the active path when location changes (to reflect the active button)
  useEffect(() => {
    setActivePath(location.pathname); // Update active path based on current location
  }, [location]);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 flex justify-around items-center py-3 px-4 rounded-tl-2xl rounded-tr-2xl border-t border-gray-300">
      {menuItems.map((item) => (
        <button
          key={item.text}
          onClick={() => handleNavigation(item.path)} // Navigate when button is clicked
          className={`flex flex-col items-center text-sm text-gray-600 hover:text-teal-500 transition-colors duration-300 ${
            activePath === item.path ? 'text-teal-500' : 'text-gray-600' // Highlight active item
          }`}
        >
          {item.icon}
          <span className="mt-1">{item.text}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNavBar;
