import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-md border-t border-gray-300 flex flex-col items-center w-full">
      <div className="flex justify-between items-center w-full mb-2">
        <span className="text-gray-500">View summary ₹149.5</span>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Proceed to pay</button>
      </div>
      <div className="text-center text-gray-500 text-sm">
        By proceeding, I express my consent to complete the transaction
      </div>
    </div>
  );
};

export default Footer;
