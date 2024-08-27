import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import SeatingChart from '../components/SeatLayout/SeatLayout';
import Timing from '../components/SeatLayout/Timing';
import data from '../data/layout.json';
import { MdArrowBack } from 'react-icons/md';
import AttentionBanner from '../components/SeatLayout/AttentionBanner';

const SeatBooking: React.FC = () => {
  const { divisions, maxSeatsPerRow } = data;
  const [hasSelectedSeats, setHasSelectedSeats] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedSeatsCount, setSelectedSeatsCount] = useState<number>(0);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSeatSelection = (selectedSeats: Set<string>) => {
    setSelectedSeatsCount(selectedSeats.size);
    setHasSelectedSeats(selectedSeats.size > 0);
  };

  const handleTimingSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleProceedClick = () => {
    if (hasSelectedSeats) {
      navigate('/contact'); // Navigate to Contact route
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full py-2 px-2 bg-white border-b border-gray-200 shadow-md flex items-center">
        <button onClick={() => window.history.back()} className="text-gray-600 mr-2">
          <MdArrowBack size={24} />
        </button>
        <div className="ml-2">
          <h1 className="text-lg font-bold text-gray-800">Stree 2: Sarkate Ka Aatank</h1>
          <p className="text-sm text-gray-600">
            MovieMax: SM5, Kalyan | Today, 18 Aug, {selectedTime || 'Select a time'}
          </p>
        </div>
        <div className="flex-grow" />
      </header>

      {/* Timing Component */}
      <div className="w-full px-2 bg-gray-50 ">
        <Timing onSelect={handleTimingSelect} defaultTime={selectedTime} />
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center overflow-auto pt-4 pb-24 md:pt-16">
        {/* Seat Layout */}
        <div className="w-full max-w-screen-lg pt-6 px-4 md:px-8">
          <SeatingChart
            divisions={divisions}
            maxSeatsPerRow={maxSeatsPerRow}
            onSeatSelection={handleSeatSelection}
          />
        </div>
        <AttentionBanner/>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full py-4 px-4 md:py-6 md:px-8 border-t border-gray-200 bg-white shadow-md flex items-center justify-center">
        {hasSelectedSeats ? (
          <div className="flex items-center space-x-4 w-full max-w-screen-lg">
            <span className="font-bold text-gray-800 flex-grow">
              {selectedSeatsCount} Seats Selected
            </span>
            <button
              onClick={handleProceedClick} // Add onClick handler
              className="bg-teal-500 text-white rounded-full px-6 py-2 shadow-lg hover:bg-teal-600 transition-colors duration-300"
            >
              Proceed
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-4 md:space-x-6">
            <div className="flex items-center space-x-2">
              <div
                style={{
                  width: '1rem',
                  height: '1rem',
                  backgroundColor: '#e0e0e0',
                  border: '1px solid #b0b0b0',
                }}
              ></div>
              <span className="text-gray-700 text-xs md:text-sm">Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div
                style={{
                  width: '1rem',
                  height: '1rem',
                  backgroundColor: '#4CAF50',
                  border: '1px solid #4CAF50',
                }}
              ></div>
              <span className="text-gray-700 text-xs md:text-sm">Selected</span>
            </div>
            <div className="flex items-center space-x-2">
              <div
                style={{
                  width: '1rem',
                  height: '1rem',
                  backgroundColor: '#f28d8d',
                  border: '1px solid #e74c3c',
                }}
              ></div>
              <span className="text-gray-700 text-xs md:text-sm">Sold</span>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
};

export default SeatBooking;
