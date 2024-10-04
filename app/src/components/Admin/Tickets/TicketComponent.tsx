import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface Ticket {
  theater: string;
  movie: string;
  ticketId: string;
  customer: string;
  qty: number;
  total: string;
  date: string;
}

const ticketsData: Ticket[] = [
  { theater: 'PVR', movie: 'Stree 2', ticketId: 'TICKET-1234', customer: 'Dileep', qty: 2, total: '$36', date: 'Sep 9, 2024' },
  { theater: 'PVR', movie: 'Stree 2', ticketId: 'TICKET-5678', customer: 'Dileep', qty: 1, total: '$18', date: 'Sep 9, 2024' },
  { theater: 'PVR', movie: 'Stree 2', ticketId: 'TICKET-9101', customer: 'Dileep', qty: 3, total: '$54', date: 'Sep 9, 2024' },
  { theater: 'PVR', movie: 'Stree 2', ticketId: 'TICKET-1121', customer: 'Dileep', qty: 4, total: '$72', date: 'Sep 9, 2024' },
  { theater: 'SRM', movie: 'Stree 2', ticketId: 'TICKET-1312', customer: 'Arjun', qty: 2, total: '$36', date: 'Sep 10, 2024' },
  // Add more tickets as necessary
];

const TicketsComponent = () => {
  const [filter, setFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredTickets = ticketsData.filter((ticket) => {
    const matchesSearch =
      ticket.theater.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.movie.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.ticketId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch; // Adjust filtering by status here if needed
  });

  return (
    <div className="ml-64 p-4"> {/* Reduced padding */}
      {/* Search Bar */}
      <div className="mb-4">
        <div className="relative">
          <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by theater, movie, ticket ID, customer"
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400" // Reduced padding, text size
          />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-5"> {/* Reduced gap */}
        {['All', 'Pending', 'Sold', 'Canceled', 'Refunded'].map((status) => (
          <button
            key={status}
            onClick={() => handleFilterChange(status)}
            className={`px-4 py-2 rounded-full border text-sm ${
              filter === status
                ? 'bg-gray-200 border-gray-400'
                : 'bg-white border-gray-300'
            }`} // Reduced padding and text size
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
                  className="px-4 py-3 text-left text-sm font-medium text-gray-700" // Reduced padding, text size
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket, index) => (
              <tr key={ticket.ticketId} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 text-sm">{ticket.theater}</td> {/* Reduced padding, text size */}
                <td className="px-4 py-3 text-sm">{ticket.movie}</td>
                <td className="px-4 py-3 text-sm text-blue-600">{ticket.ticketId}</td>
                <td className="px-4 py-3 text-sm">{ticket.customer}</td>
                <td className="px-4 py-3 text-sm">{ticket.qty}</td>
                <td className="px-4 py-3 text-sm">{ticket.total}</td>
                <td className="px-4 py-3 text-sm">{ticket.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketsComponent;
