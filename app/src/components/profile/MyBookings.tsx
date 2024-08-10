import React, { useState } from 'react';
import { FaTicketAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const MyBookings: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('tickets'); // State to manage the selected tab
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Function to navigate to the movies route
  const handleBookTicketsClick = () => {
    navigate('/movies');
  };

  return (
    <div className="flex flex-col w-full p-6 bg-white shadow-md rounded-md">
      {/* Tab navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`flex-1 py-4 text-center ${selectedTab === 'tickets' ? 'border-b-2 border-teal-500 text-teal-500' : 'text-gray-500'}`}
          onClick={() => setSelectedTab('tickets')} // Switch to 'tickets' tab
        >
          Tickets & Food
        </button>
      </div>

      {/* Content for the 'tickets' tab */}
      {selectedTab === 'tickets' && (
        <div className="flex flex-col items-center justify-center h-64">
          <FaTicketAlt className="text-6xl text-gray-200 mb-4" /> {/* Icon for ticket */}
          <p className="text-gray-500 mb-4">No Booking Available</p> {/* Message for no bookings */}
          <p className="text-gray-400 mb-6">Movie bookings & food orders will appear here</p> {/* Additional information */}
          <button 
            className="px-6 py-2 bg-teal-500 text-white rounded-md" 
            onClick={handleBookTicketsClick} // Navigate to the movies route on click
          >
            Book Tickets
          </button>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
