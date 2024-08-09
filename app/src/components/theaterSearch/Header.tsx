import React from 'react';
import logo from '../../assets/logo.png'

const Header: React.FC = () => {
  return (
    <div className="min-w-full flex flex-col items-center justify-start bg-gray-100">
      <nav className="w-full flex items-center justify-between p-4 bg-white shadow-lg border-b-2">
        <div className="text-3xl font-bold "><img src={logo} alt="TY Logo" className="h-12 w-auto" /></div>
        <div className="flex items-center space-x-4">
          
          <button className="text-2xl sm:visible">&#9776;</button>
        </div>
      </nav>
      </div>
  );
};

export default Header;
