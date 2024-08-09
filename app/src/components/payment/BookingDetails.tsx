import React from 'react';

const BookingDetails: React.FC = () => {
  return (
    <div className="relative bg-white shadow-md w-full p-4 border border-gray-300 rounded-lg overflow-hidden md:w-full max-w-full">
      <div className="ticket-border-left"></div>
      <div className="ticket-border-right"></div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex-grow pr-4">
          <h2 className="text-xl font-semibold">Harom Hara - The Revolt</h2>
          <div className="flex space-x-2 mt-2">
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">A</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Telugu</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">2D</span>
          </div>
          <p className="text-gray-600 mt-2">Murali Cinemas (Gokula) 4K Dolby 7.1, Mathikere</p>
          <div className="border-b border-dashed border-gray-300 my-4 relative">
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
          </div>
          <p className="text-gray-600">Wed, 19 Jun, 04:30 PM</p>
          <p className="text-gray-600">MURALI CINEMAS, GOLD CLASS-H9</p>
        </div>
        <div className="flex-shrink-0 text-center ml-2">
          <img src="https://assetscdn1.paytm.com/images/cinema/Raayan--705x750-27e7bc00-4a67-11ef-89fa-2987ba4f9f5b.jpg?format=webp&imwidth=576" alt="Movie Poster" className="w-20 h-28 object-cover rounded" />
          <div className="mt-2">
            <div className="border border-gray-300 rounded p-2 text-xl w-12 h-12 flex flex-col items-center justify-center bg-gray-100">
              <span className="text-lg font-bold">1</span>
              <span className="text-xs text-gray-700">Ticket</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
