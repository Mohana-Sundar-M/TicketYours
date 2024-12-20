import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/Movie';
import TheatersIcon from '@mui/icons-material/Theaters';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const BottomNavBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState<string>('/'); // Default active path is Home ('/')
  const [lastScrollY, setLastScrollY] = useState<number>(0); // Keep track of the last scroll position
  const [visible, setVisible] = useState<boolean>(true); // State to manage visibility of navbar

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

  // Update the active path when location changes
  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  // Track scroll direction to hide or show the navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // Hide navbar when scrolling down
      } else {
        setVisible(true); // Show navbar when scrolling up
      }
      setLastScrollY(window.scrollY); // Update the last scroll position
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 flex justify-around items-center py-3 px-4 rounded-tl-2xl rounded-tr-2xl border-t border-gray-300 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full' // Hide or show the navbar
      }`}
    >
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
