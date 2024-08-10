import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  FaUser,
  FaTicketAlt,
  FaHeadset,
  FaFileAlt,
  FaQuestionCircle,
  FaCommentDots,
} from 'react-icons/fa';

interface SideMenuProps {
  onMenuClick: (path: string) => void; // Function to handle menu item clicks
}

const SideMenu: React.FC<SideMenuProps> = ({ onMenuClick }) => {
  const location = useLocation(); // Hook to get the current route location

  // Array of menu items with paths, labels, and icons
  const menuItems = [
    { path: '/', label: 'Personal Details', icon: <FaUser /> },
    { path: '/bookings', label: 'My Bookings', icon: <FaTicketAlt /> },
    { path: '/support', label: 'Customer Support', icon: <FaHeadset /> },
    { path: '/terms', label: 'Terms & Conditions', icon: <FaFileAlt /> },
    { path: '/faq', label: 'FAQ', icon: <FaQuestionCircle /> },
    { path: '/feedback', label: 'Feedback', icon: <FaCommentDots /> },
  ];

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
            <span className='text-center w-full'>{item.label}</span>
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
          <a href='#'>
            <span className='underline'>Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
