import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface Ticket {
  id: string;
  issue: string;
  customer: string;
  theater: string;
  lastUpdate: string;
  status: string;
}

const ticketsData: Ticket[] = [
  { id: '#12345', issue: 'Refund Request', customer: 'Alice Smith', theater: 'AMC Metreon 16', lastUpdate: '2 days ago', status: 'Open' },
  { id: '#12346', issue: 'Login Issue', customer: 'Bob Johnson', theater: 'Cinemark 20', lastUpdate: '1 day ago', status: 'Unresolved' },
  { id: '#12347', issue: 'Payment Problem', customer: 'Eva Brown', theater: 'Regal Union Square', lastUpdate: '3 days ago', status: 'Resolved' },
  { id: '#12348', issue: 'Seat Selection Error', customer: 'Jack Davis', theater: 'Landmark Embarcadero', lastUpdate: '4 days ago', status: 'Open' },
  { id: '#12349', issue: 'App Crash', customer: 'Olivia Lee', theater: 'Century San Francisco Centre', lastUpdate: '5 days ago', status: 'Unresolved' },
];

const CustomerSupportComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredTickets = ticketsData.filter(ticket => {
    const matchesSearch =
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.issue.toLowerCase().includes(searchTerm.toLowerCase());

    if (filter === 'All') return matchesSearch;
    return matchesSearch && ticket.status === filter;
  });

  return (
    <div className="ml-64 p-6">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-3.5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by issue ID, customer name, etc."
            className="pl-12 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex mb-4 border-b border-gray-200">
        {['All', 'Open', 'Unresolved', 'Resolved'].map(tab => (
          <button
            key={tab}
            className={`px-6 py-2 mr-2 ${
              filter === tab ? 'border-b-2 border-blue-500 font-semibold text-blue-600' : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setFilter(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg">
          <thead>
            <tr className="text-left bg-gray-100 border-b">
              <th className="px-6 py-3 font-semibold">Ticket</th>
              <th className="px-6 py-3 font-semibold">Issue</th>
              <th className="px-6 py-3 font-semibold">Customer</th>
              <th className="px-6 py-3 font-semibold">Theater</th>
              <th className="px-6 py-3 font-semibold">Last Update</th>
              <th className="px-6 py-3 font-semibold">Status</th>
              <th className="px-6 py-3 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket, idx) => (
              <tr key={ticket.id} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <td className="px-6 py-4 border-b">{ticket.id}</td>
                <td className="px-6 py-4 border-b">{ticket.issue}</td>
                <td className="px-6 py-4 border-b">{ticket.customer}</td>
                <td className="px-6 py-4 border-b">{ticket.theater}</td>
                <td className="px-6 py-4 border-b">{ticket.lastUpdate}</td>
                <td className="px-6 py-4 border-b">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      ticket.status === 'Open'
                        ? 'bg-green-100 text-green-700'
                        : ticket.status === 'Unresolved'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {ticket.status}
                  </span>
                </td>
                <td className="px-6 py-4 border-b">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerSupportComponent;
