import  { useState } from 'react';

const TicketsComponent = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const tickets = [
    { theater: 'PVR', movie: 'Stree 2', ticketId: 'TICKET-1234', customer: 'Dileep', qty: 2, total: '$36', date: 'Sep 9, 2024' },
    { theater: 'PVR', movie: 'Stree 2', ticketId: 'TICKET-5678', customer: 'Dileep', qty: 1, total: '$18', date: 'Sep 9, 2024' },
    { theater: 'PVR', movie: 'Stree 2', ticketId: 'TICKET-9101', customer: 'Dileep', qty: 3, total: '$54', date: 'Sep 9, 2024' },
    { theater: 'PVR', movie: 'Stree 2', ticketId: 'TICKET-1121', customer: 'Dileep', qty: 4, total: '$72', date: 'Sep 9, 2024' },
    { theater: 'SRM', movie: 'Stree 2', ticketId: 'TICKET-1121', customer: 'Dileep', qty: 4, total: '$72', date: 'Sep 9, 2024' },
    // ... Add more tickets as necessary
  ];

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <div className="ml-64 p-6">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by theater, movie, ticket ID, customer"
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-6">
        {['All', 'Pending', 'Sold', 'Canceled', 'Refunded'].map((status) => (
          <button
            key={status}
            onClick={() => handleFilterChange(status)}
            className={`px-4 py-2 rounded-full border ${
              filter === status
                ? 'bg-gray-200 border-gray-400'
                : 'bg-white border-gray-300'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Tickets Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr>
              {['Theater', 'Movie', 'Ticket ID', 'Customer', 'Qty', 'Total', 'Date'].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-sm font-semibold text-gray-600"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={ticket.ticketId} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 text-sm">{ticket.theater}</td>
                <td className="px-6 py-4 text-sm">{ticket.movie}</td>
                <td className="px-6 py-4 text-sm text-blue-600">{ticket.ticketId}</td>
                <td className="px-6 py-4 text-sm">{ticket.customer}</td>
                <td className="px-6 py-4 text-sm">{ticket.qty}</td>
                <td className="px-6 py-4 text-sm">{ticket.total}</td>
                <td className="px-6 py-4 text-sm">{ticket.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketsComponent;
