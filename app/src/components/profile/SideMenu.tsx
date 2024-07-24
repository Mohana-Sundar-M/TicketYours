import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import '../../css/SideMenu.css'
import {
  FaUser,
  FaTicketAlt,
  FaHeadset,
  FaFileAlt,
  FaQuestionCircle,
  FaCommentDots,
} from 'react-icons/fa';

const SideMenu: React.FC = () => {
  const location = useLocation();

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
            className={`flex items-center p-2 rounded ${
              location.pathname === item.path ? 'bg-teal-100' : ''
            }`}
          >
            <Link to={item.path} className="mr-2">{item.icon}</Link>
            <Link to={item.path} className='text-center w-full'>{item.label}</Link>
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
        <li className="p-2 text-red-600">
          <a href='#'>
            <span className='underline'>Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
