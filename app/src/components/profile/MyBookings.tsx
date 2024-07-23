// src/components/MyBookings.tsx
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
        <button
          className={`flex-1 py-4 text-center ${selectedTab === 'giftCards' ? 'border-b-2 border-teal-500 text-teal-500' : 'text-gray-500'}`}
          onClick={() => setSelectedTab('giftCards')}
        >
          Gift Cards
        </button>
        <button
          className={`flex-1 py-4 text-center ${selectedTab === 'voucher' ? 'border-b-2 border-teal-500 text-teal-500' : 'text-gray-500'}`}
          onClick={() => setSelectedTab('voucher')}
        >
          Voucher
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

      {selectedTab === 'giftCards' && (
        <div className="flex flex-col items-center justify-center h-64">
          <FaGift className="text-6xl text-gray-200 mb-4" />
          <p className="text-gray-500 mb-4">No Gift Cards Available</p>
          <p className="text-gray-400 mb-6">Purchased gift cards will appear here</p>
          <button className="px-6 py-2 bg-teal-500 text-white rounded-md">Buy Gift Cards</button>
        </div>
      )}

      {selectedTab === 'voucher' && (
        <div className="flex flex-col items-center justify-center h-64">
          <FaTags className="text-6xl text-gray-200 mb-4" />
          <p className="text-gray-500 mb-4">No Vouchers Available</p>
          <p className="text-gray-400 mb-6">Available vouchers will appear here</p>
          <button className="px-6 py-2 bg-teal-500 text-white rounded-md">Get Vouchers</button>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
