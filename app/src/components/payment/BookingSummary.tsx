import React, { useState } from 'react';
import { FaReceipt, FaTicketAlt, FaChevronDown, FaInfoCircle } from 'react-icons/fa';

const BookingSummary: React.FC = () => {
  const [isTaxOpen, setIsTaxOpen] = useState(false);

  const toggleTaxDetails = () => {
    setIsTaxOpen(!isTaxOpen);
  };

  return (
    <div className="bg-white shadow-md w-full p-4 border border-gray-300 rounded-lg max-w-full md:w-full mt-2">
      <h2 className="text-lg font-semibold mb-4 flex items-center">
        <FaReceipt className="mr-2" />
        Booking Summary
      </h2>
      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-gray-800">Ticket</p>
            <p className="text-gray-600 flex items-center">
              <FaTicketAlt className="mr-2" />
              1 x GOLD CLASS Ticket @ ₹120
            </p>
          </div>
          <p className="text-gray-800">₹120</p>
        </div>
        <div className="border-t border-gray-200 py-4">
          <button 
            className="text-gray-600 flex items-center w-full justify-between" 
            onClick={toggleTaxDetails}
          >
            <div className="flex items-center">
              <FaChevronDown className="mr-2" />
              Taxes & Fees
            </div>
            <span className="text-gray-800">₹29.5</span>
          </button>
          {isTaxOpen && (
            <div className="mt-2">
              <p className="text-gray-600 flex items-center">
                <FaInfoCircle className="mr-2" />
                Service Tax: ₹10.5
              </p>
              <p className="text-gray-600 flex items-center">
                <FaInfoCircle className="mr-2" />
                Convenience Fee: ₹19
              </p>
            </div>
          )}
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-800 font-semibold">Total</p>
            <p className="text-gray-800 font-semibold">₹149.5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
