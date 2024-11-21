import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import {
  FaUser,
  FaTicketAlt,
  FaHeadset,
  FaFileAlt,
  FaQuestionCircle,
  FaCommentDots,
} from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext'; // Assuming your AuthContext is in authContext.ts or similar

interface SideMenuProps {
  onMenuClick: (path: string) => void; // Function to handle menu item clicks
}

const SideMenu: React.FC<SideMenuProps> = ({ onMenuClick }) => {
  const location = useLocation(); // Hook to get the current route location
  const { logout,  } = useAuth(); // Access the logout function and isLoggedIn from context
  const navigate = useNavigate(); // Use navigate for redirection

  // Array of menu items with paths, labels, and icons
  const menuItems = [
    { path: '/', label: 'Personal Details', icon: <FaUser /> },
    { path: '/bookings', label: 'My Bookings', icon: <FaTicketAlt /> },
    { path: '/support', label: 'Customer Support', icon: <FaHeadset /> },
    { path: '/terms', label: 'Terms & Conditions', icon: <FaFileAlt /> },
    { path: '/faq', label: 'FAQ', icon: <FaQuestionCircle /> },
    { path: '/feedback', label: 'Feedback', icon: <FaCommentDots /> },
  ];

  // Handle logout
  const handleLogout = () => {
    logout(); // Call the logout function from context
    navigate('/'); // Redirect the user to the default route (home page)
  };

  return (
    <nav className="side-menu bg-white p-4 shadow-md rounded-lg h-fit">
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={`flex items-center p-2 rounded cursor-pointer ${
              location.pathname === item.path ? 'highlight md:bg-teal-100' : ''
            } hover:bg-teal-50`}
            onClick={() => onMenuClick(item.path)}
          >
            <span className="mr-2">{item.icon}</span>
            <span className="text-center w-full">{item.label}</span>
          </li>
        ))}
        <li className="flex items-center p-2 bg-gray-200 rounded">
          <span className="mr-2">💬</span>
          <span>Whatsapp Notifications</span>
          <div className="ml-auto">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </li>
        <li className="p-2 text-red-600 border-none">
          <a href="#" onClick={handleLogout}>
            <span className="underline">Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
