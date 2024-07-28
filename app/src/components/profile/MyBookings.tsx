
import React, { useState } from 'react';
import { FaTicketAlt, FaGift, FaTags } from 'react-icons/fa';

const MyBookings: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('tickets');

  return (
    <div className="flex flex-col w-full p-6 bg-white shadow-md rounded-md">
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`flex-1 py-4 text-center ${selectedTab === 'tickets' ? 'border-b-2 border-teal-500 text-teal-500' : 'text-gray-500'}`}
          onClick={() => setSelectedTab('tickets')}
        >
          Tickets & Food
        </button>
        
      </div>

      {selectedTab === 'tickets' && (
        <div className="flex flex-col items-center justify-center h-64">
          <FaTicketAlt className="text-6xl text-gray-200 mb-4" />
          <p className="text-gray-500 mb-4">No Booking Available</p>
          <p className="text-gray-400 mb-6">Movie bookings & food orders will appear here</p>
          <button className="px-6 py-2 bg-teal-500 text-white rounded-md">Book Tickets</button>
        </div>
      )}

     
    </div>
  );
};

export default MyBookings;
