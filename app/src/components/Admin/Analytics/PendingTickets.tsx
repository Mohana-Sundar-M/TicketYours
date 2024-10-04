import React from 'react';

const PendingSupportTickets: React.FC = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg flex justify-between items-center mb-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Pending Support Tickets</h3>
        <p className="text-sm text-gray-600">25 pending</p>
      </div>
      <button className="text-blue-600 font-semibold hover:underline">
        Resolve Tickets
      </button>
    </div>
  );
};

export default PendingSupportTickets;
