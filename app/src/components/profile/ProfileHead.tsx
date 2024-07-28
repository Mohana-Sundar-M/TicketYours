import React from 'react';
import { FaUser } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const ProfileHead: React.FC = () => {
  return (
    <div className="min-w-full flex flex-col items-center justify-start bg-gray-100">
      <nav className="w-full flex items-center justify-between p-4 bg-white shadow-lg border-b-2">
        <div className="text-3xl font-bold">
          <img src={logo} alt="TY Logo" className="h-12 w-auto" />
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-2xl sm:visible">&#9776;</button>
        </div>
      </nav>
      <div className="flex flex-col p-6 bg-white w-full min-h-44 border-b-2">
        <div className="flex flex-col items-center md:pl-24 md:flex-row">
          <div className="bg-teal-400 rounded-full w-24 h-24 flex items-center justify-center md:relative md:mb-0 mb-4">
            <FaUser className="text-white text-3xl" />
          </div>
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:pl-8">
            <h1 className="text-2xl font-bold">Mohana Sundar</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHead;
